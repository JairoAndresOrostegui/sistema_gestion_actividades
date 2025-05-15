import { programa_academico } from "./../generated/prisma/index.d";
import { PrismaClient } from "../generated/prisma";
import { UserInterface } from "../interfaces/user.interface";
import { InternalResponse } from "../shared/dtos/InternalResponse";

const prisma: PrismaClient = new PrismaClient();

export class UserRepository {
  static async createUser(
    user: UserInterface
  ): Promise<InternalResponse<UserInterface>> {
    try {
      const { id, ...createData } = user;
      const newUser = await prisma.usuario.create({ data: createData });
      return {
        success: true,
        message: "Usuario creado correctamente",
        data: newUser,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error creando usuario",
      };
    }
  }

  static async saveResetTokenInfo(
    id: number,
    resetToken: string,
    resetTokenExpiry: number
  ): Promise<InternalResponse> {
    try {
      await prisma.usuario.update({
        where: { id },
        data: {
          token_reseteo: resetToken,
          token_reseteo_expiracion: resetTokenExpiry,
        },
      });
      return { success: true, message: "Tokens actualizados correctamente" };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: "Error actualizando tokens de reseteo de contraseña",
      };
    }
  }

  static async updateUser(
    userId: number,
    newData: UserInterface
  ): Promise<InternalResponse> {
    try {
      const user = await prisma.usuario.findUnique({
        where: { id: userId },
      });
      if (user) {
        const { id, ...updatedData } = newData; // eslint-disable-line @typescript-eslint/no-unused-vars
        await prisma.usuario.update({
          where: { id: userId },
          data: updatedData,
        });
        return {
          success: true,
          message: "Usuario actualizado correctamente",
        };
      } else {
        return { success: false, message: "Usuario no encontrado" };
      }
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
      const response = await this.getById(id);
      if (response.success) {
        await prisma.usuario.update({
          where: { id: id },
          data: { estado: 0, eliminado_en: new Date() },
        });
        return {
          success: true,
          message: "Usuario eliminado correctamente",
        };
      }
      return response;
    } catch (error) {
      console.log(error);
      return { success: false, message: "Error eliminando usuario" };
    }
  }

  static async getByEmail(
    email: string
  ): Promise<InternalResponse<UserInterface>> {
    try {
      const user = await prisma.usuario.findUnique({
        where: { correo_institucional: email, estado: 1 },
      });

      if (user) {
        return { success: true, data: user };
      } else {
        return {
          success: false,
          message: `No se encontró un usuario con el correo institucional ${email}`,
        };
      }
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: `No fue posible obtener el usuario con el correo institucional ${email}`,
      };
    }
  }

  static async getByPersonalEmail(
    personalEmail: string
  ): Promise<InternalResponse<UserInterface>> {
    try {
      const user = await prisma.usuario.findUnique({
        where: { correo_personal: personalEmail, estado: 1 },
      });

      if (user) {
        return { success: true, data: user };
      } else {
        return {
          success: false,
          message: `No se encontró un usuario con el correo personal ${personalEmail}`,
        };
      }
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: `No fue posible obtener el usuario con el correo personal ${personalEmail}`,
      };
    }
  }

  static async getByPhoneNumber(
    phoneNumber: string
  ): Promise<InternalResponse<UserInterface>> {
    try {
      const user = await prisma.usuario.findUnique({
        where: { telefono: phoneNumber, estado: 1 },
      });

      if (user) {
        return { success: true, data: user };
      } else {
        return {
          success: false,
          message: `No se encontró un usuario con el teléfono ${phoneNumber}`,
        };
      }
    } catch (error) {
      console.log(error);
      return {
        success: false,
        message: `No fue posible obtener el usuario con el teléfono ${phoneNumber}`,
      };
    }
  }

  static async getById(id: number): Promise<InternalResponse<UserInterface>> {
    try {
      console.log({ id });
      const user = await prisma.usuario.findUnique({
        where: {
          id,
          estado: 1,
        },
      });
      if (user) {
        return { success: true, data: user };
      }
      return { success: false, message: "Usuario no encontrado" };
    } catch (error) {
      console.log(error);
      return { success: false, message: "Error consultando usuario" };
    }
  }

  static async getByRoleId(
    roleId: number
  ): Promise<InternalResponse<UserInterface[]>> {
    try {
      const user = await prisma.usuario.findMany({
        where: {
          id_rol: roleId,
          estado: 1,
        },
      });
      if (user) {
        return { success: true, data: user };
      }
      return { success: false, message: "Usuarios no encontrados" };
    } catch (error) {
      console.log(error);
      return { success: false, message: "Error consultando usuarios" };
    }
  }

  static async getAllStudentsByActividadId(
    id: number
  ): Promise<InternalResponse<any[]>> {
    try {
      const users = await prisma.$queryRaw<UserInterface[]>`
        SELECT 
          ea.id,
          u.nombre_completo,
          u.correo_institucional,
          ea.estado
        FROM estudiante_actividad ea
        JOIN usuario u ON ea.id_estudiante = u.id
        WHERE ea.id_actividad = ${id};
  `;
      if (users) {
        return { success: true, data: users };
      }
      return { success: false, message: "Estudiantes no encontrados" };
    } catch (error) {
      console.log(error);
      return { success: false, message: "Error consultando estudiantes" };
    }
  }

  static async getAllAvailableDirectors(): Promise<
    InternalResponse<UserInterface[]>
  > {
    try {
      const users = await prisma.$queryRaw<UserInterface[]>`
        SELECT 
          u.id, u.id_rol, u.nombre_completo, u.correo_personal, 
          u.correo_institucional, u.telefono, u.estado, u.creado_en, u.eliminado_en
        FROM usuario AS u
        WHERE 
          u.id_rol = 1
          AND u.estado = 1
          AND u.id NOT IN (
            SELECT id_director FROM programa_academico WHERE eliminado_en IS NULL
          )
          AND u.eliminado_en IS NULL
  `;
      if (users) {
        return { success: true, data: users };
      }
      return { success: false, message: "Usuarios no encontrados" };
    } catch (error) {
      console.log(error);
      return { success: false, message: "Error consultando usuarios" };
    }
  }

  static async getAllAvailableDocentes(): Promise<
    InternalResponse<UserInterface[]>
  > {
    try {
      const users = await prisma.$queryRaw<UserInterface[]>`
      SELECT 
        u.id, u.id_rol, u.nombre_completo, u.correo_personal, 
        u.correo_institucional, u.telefono, u.estado, u.creado_en, u.eliminado_en
      FROM usuario AS u
      WHERE 
        u.id_rol = 2
        AND u.estado = 1
        AND u.id NOT IN (
          SELECT id_director FROM programa_academico WHERE eliminado_en IS NULL
        )
        AND u.id NOT IN (
          SELECT id_docente FROM semillero WHERE eliminado_en IS NULL
        )
        AND u.eliminado_en IS NULL
`;
      if (users) {
        return { success: true, data: users };
      }
      return { success: false, message: "Docentes no encontrados" };
    } catch (error) {
      console.log(error);
      return { success: false, message: "Error consultando docentes" };
    }
  }
}
