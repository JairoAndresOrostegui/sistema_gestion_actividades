import jwt from "jsonwebtoken";
import nodemailer from "nodemailer";
import { EMAIL, GENERATED_PASSWORD, JWT_SECRET_KEY, PORT } from "../config";
import { UserInterface } from "../interfaces/user.interface";
import { UserRepository } from "../repositories/users.repository";
import { InternalResponse } from "../shared/dtos/InternalResponse";
import { JwtDto } from "../shared/dtos/jwt.dto";
import { UserDto } from "../shared/dtos/user/user.dto";
import { CaseUseException } from "../shared/exceptions/CaseUseException";
import { generateJwt } from "../shared/jwt/generate-jwt";
import { ActividadesService } from "./actividades.service";
import { EstuActService } from "./estuact.service";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require("bcrypt");

export class UsersService {
  static async createUser(
    user: UserInterface,
    id_semillero?: number | null
  ): Promise<InternalResponse> {
    try {
      const response = await this.validateUniqueValues(user);
      if (!response.success) {
        return response;
      }

      const newUser = await UserRepository.createUser(user);

      if (id_semillero) {
        const actividades =
          await ActividadesService.getAllActividadesBySemilleroId(id_semillero);

        if (actividades.success) {
          actividades.data!.map(async (actividad) => {
            await EstuActService.createEstuAct({
              id_actividad: actividad.id!,
              id_estudiante: newUser.data?.id!,
              estado: 0,
            });
          });
        }
      }

      return {
        success: newUser.success,
        message: newUser.message,
      };
    } catch (error) {
      console.log(error);
      throw new CaseUseException("Error creando usuario");
    }
  }

  static async updateUser(
    id: number,
    userData: any
  ): Promise<InternalResponse> {
    try {
      const response = await this.validateUniqueValues(userData);
      if (!response.success) {
        return response;
      }

      const existingUser = await this.getById(id);
      const updatedUser: UserInterface = {
        ...existingUser.data!,
        ...userData,
      };
      return await UserRepository.updateUser(id, updatedUser);
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error actualizando usuario",
      };
    }
  }

  static async deleteUser(id: number): Promise<InternalResponse> {
    try {
      return await UserRepository.deleteUser(id);
    } catch (error) {
      console.log(error);
      throw new CaseUseException("Error eliminando usuario");
    }
  }

  static async authenticateUser(
    email: string,
    password: string
  ): Promise<InternalResponse> {
    try {
      const response = await UserRepository.getByEmail(email);
      if (!response.success) {
        return { success: false, message: response.message };
      }
      const validPassword = await bcrypt.compare(
        password,
        response.data?.contrasena
      );
      if (!validPassword) {
        return { success: false, message: "Contraseña incorrecta" };
      }

      return {
        success: true,
        message: "Autenticación exitosa",
        data: await mapToDto(response.data!, true),
      };
    } catch (error) {
      console.log(error);
      return { success: false, message: "Autenticación fallida" };
    }
  }

  static async getById(id: number): Promise<InternalResponse<UserDto>> {
    const response = await UserRepository.getById(id);
    if (response.success) {
      return {
        success: true,
        data: await mapToDto(response.data!, false),
      };
    } else {
      return { success: false, message: response.message };
    }
  }

  static async getByRoleId(
    roleId: number
  ): Promise<InternalResponse<UserDto[]>> {
    const response = await UserRepository.getByRoleId(roleId);
    if (response.success) {
      return {
        success: true,
        data: await mapToDtoList(response.data!),
      };
    } else {
      return { success: false, message: response.message };
    }
  }

  static async getByEmail(
    email: string
  ): Promise<InternalResponse<UserInterface>> {
    try {
      return await UserRepository.getByEmail(email);
    } catch (error) {
      console.log(error);
      throw new CaseUseException(
        `Error al obtener usuario por el correo ${email}`
      );
    }
  }

  static async forgotPassword(email: string): Promise<InternalResponse> {
    try {
      const response = await this.getByEmail(email);
      if (response.success) {
        const token = jwt.sign({ id: response.data!.id }, JWT_SECRET_KEY!, {
          expiresIn: "1h",
        });

        await UserRepository.saveResetTokenInfo(
          response.data!.id!,
          token,
          Date.now() + 3600000
        );

        const transporter = nodemailer.createTransport({
          service: "Gmail",
          auth: {
            user: EMAIL,
            pass: GENERATED_PASSWORD,
          },
        });

        const resetUrl = `http://localhost:5173/restablecer-contrasena?token=${token}`;

        await transporter.sendMail({
          to: email,
          subject: "Restablecer contraseña",
          html: `<p>Haga clic en este enlace para restablecer su contraseña:</p><a href="${resetUrl}">${resetUrl}</a>`,
        });

        return { success: true, message: "Correo enviado con instrucciones" };
      }

      return response;
    } catch (error) {
      console.log(error);
      throw new CaseUseException(
        `Error al obtener usuario por el correo ${email}`
      );
    }
  }

  static async resetPassword(
    token: string,
    hashedNewPassword: string
  ): Promise<InternalResponse> {
    try {
      const decoded = jwt.verify(token, JWT_SECRET_KEY!) as { id: string };
      const response = await UserRepository.getById(Number(decoded.id));
      if (
        !response ||
        response.data?.token_reseteo !== token ||
        Date.now() > response.data?.token_reseteo_expiracion!
      ) {
        return { success: false, message: "Token inválido o ya expiró" };
      }

      await this.updateUser(response.data!.id!, {
        contrasena: hashedNewPassword,
      });

      return {
        success: true,
        message: "Contraseña reestablecida correctamente",
      };
    } catch (error) {
      console.log(error);
      throw new CaseUseException(`Error al recuperar la contraseña`);
    }
  }

  static async getAllAvailableDirectors(): Promise<
    InternalResponse<UserInterface[]>
  > {
    try {
      return await UserRepository.getAllAvailableDirectors();
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error obteniendo directores disponibles",
      };
    }
  }
  static async getAllStudentsByActividadId(
    id: number
  ): Promise<InternalResponse<any[]>> {
    try {
      return await UserRepository.getAllStudentsByActividadId(id);
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error obteniendo estudiantes",
      };
    }
  }

  static async getAllAvailableDocentes(): Promise<
    InternalResponse<UserInterface[]>
  > {
    try {
      return await UserRepository.getAllAvailableDocentes();
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error obteniendo docentes disponibles",
      };
    }
  }

  static async refreshToken(jwt: JwtDto): Promise<InternalResponse<UserDto>> {
    try {
      const user = await this.getById(jwt.token_user_id);
      if (user.success) {
        return {
          success: true,
          message: "Token actualizado",
          data: await mapToDto(user.data!, true),
        };
      }

      return { success: false, message: "Usuario no encontrado" };
    } catch (error) {
      console.log(error);
      return { success: false, message: "Error actualizando token" };
    }
  }

  static async validateUniqueValues(
    user: UserInterface
  ): Promise<InternalResponse> {
    try {
      const userByEmail = await UserRepository.getByEmail(
        user.correo_institucional
      );
      if (userByEmail.success) {
        return {
          success: false,
          message: `Ya existe un usuario registrado con el correo ${user.correo_institucional}`,
        };
      }

      const userByPersonalEmail = await UserRepository.getByPersonalEmail(
        user.correo_personal
      );
      if (userByPersonalEmail.success) {
        return {
          success: false,
          message: `Ya existe un usuario registrado con el correo ${user.correo_personal}`,
        };
      }

      const userByPhoneNumber = await UserRepository.getByPhoneNumber(
        user.telefono
      );
      if (userByPhoneNumber.success) {
        return {
          success: false,
          message: `Ya existe un usuario registrado con el teléfono ${user.telefono}`,
        };
      }

      return { success: true };
    } catch (error) {
      console.log(error);
      throw new CaseUseException("Error validando valores únicos");
    }
  }
}

async function mapToDto(
  user: UserInterface | UserDto,
  isLogin: boolean
): Promise<UserDto> {
  if (isLogin) {
    const token = await generateJwt(user.id!, user.id_rol);
    return {
      id: user.id!,
      id_rol: user.id_rol,
      nombre_completo: user.nombre_completo,
      correo_personal: user.correo_personal,
      correo_institucional: user.correo_institucional,
      telefono: user.telefono,
      estado: user.estado,
      creado_en: user.creado_en,
      token: token,
    };
  }

  return {
    id: user.id!,
    id_rol: user.id_rol,
    nombre_completo: user.nombre_completo,
    correo_personal: user.correo_personal,
    correo_institucional: user.correo_institucional,
    telefono: user.telefono,
    estado: user.estado,
    creado_en: user.creado_en,
  };
}

async function mapToDtoList(users: UserInterface[]): Promise<UserDto[]> {
  const userDtos: UserDto[] = [];

  for (const user of users) {
    const userDto = await mapToDto(user, false);
    userDtos.push(userDto);
  }

  return userDtos;
}
