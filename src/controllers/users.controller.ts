import { Request, Response } from "express";
import { HttpResponseCodes } from "../shared/HttpResponseCodes";
import { UsersService } from "../services/users.service";
import { ControllerError } from "../shared/exceptions/ControllerError";

// eslint-disable-next-line @typescript-eslint/no-var-requires
const bcrypt = require("bcrypt");

export class UsersController {
  static async createUser(req: Request, res: Response) {
    try {
      const hashedPassword = await bcrypt.hash(
        req.body.contrasena || "password123",
        10
      );
      const response = await UsersService.createUser(
        {
          id_rol: req.body.id_rol,
          nombre_completo: req.body.nombre_completo,
          correo_personal: req.body.correo_personal,
          correo_institucional: req.body.correo_institucional,
          telefono: req.body.telefono,
          contrasena: hashedPassword,
          estado: 1,
          creado_en: new Date(),
        },
        req.body.is_student ? req.body.id_semillero : null
      );
      if (response.success) {
        res.status(HttpResponseCodes.CREATED).json(response);
      } else {
        res.status(HttpResponseCodes.BAD_REQUEST).json(response);
      }
    } catch (error) {
      console.log(error);
      if (error instanceof ControllerError) {
        res.status(HttpResponseCodes.BAD_REQUEST).json({ success: false });
      } else {
        res
          .status(HttpResponseCodes.INTERNAL_SERVER_ERROR)
          .json({ success: false });
      }
    }
  }

  static async updateUser(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const response = await UsersService.updateUser(id, {
        nombre_completo: req.body.nombre_completo,
        correo_personal: req.body.correo_personal,
        correo_institucional: req.body.correo_institucional,
        telefono: req.body.telefono,
      });

      if (response.success) {
        res.status(HttpResponseCodes.OK).json(response);
      } else {
        res.status(HttpResponseCodes.BAD_REQUEST).json(response);
      }
    } catch (error) {
      console.log(error);
      if (error instanceof ControllerError) {
        res.status(HttpResponseCodes.BAD_REQUEST).json({ success: false });
      } else {
        res
          .status(HttpResponseCodes.INTERNAL_SERVER_ERROR)
          .json({ success: false });
      }
    }
  }

  static async deleteUser(req: Request, res: Response) {
    try {
      const id = parseInt(req.params.id);
      const response = await UsersService.deleteUser(id);
      if (response.success) {
        res.status(HttpResponseCodes.OK).json(response);
      } else {
        res.status(HttpResponseCodes.BAD_REQUEST).json(response);
      }
    } catch (error) {
      console.error(error);
      res
        .status(HttpResponseCodes.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Internal server error" });
    }
  }

  static async authenticateUser(req: Request, res: Response) {
    try {
      const response = await UsersService.authenticateUser(
        req.body.correo_institucional,
        req.body.contrasena
      );

      if (response.success) {
        res.status(HttpResponseCodes.OK).json(response);
      } else {
        res.status(HttpResponseCodes.BAD_REQUEST).json(response);
      }
    } catch (error) {
      console.log(error);
      if (error instanceof ControllerError) {
        res.status(HttpResponseCodes.BAD_REQUEST).json({ success: false });
      } else {
        res
          .status(HttpResponseCodes.INTERNAL_SERVER_ERROR)
          .json({ success: false });
      }
    }
  }

  static async refreshToken(req: Request, res: Response) {
    try {
      const response = await UsersService.refreshToken({
        token_user_id: req.body.token_user_id,
        token_role_id: req.body.token_role_id,
      });

      if (response.success) {
        res.status(HttpResponseCodes.OK).json(response);
      } else {
        res.status(HttpResponseCodes.BAD_REQUEST).json(response);
      }
    } catch (error) {
      console.log(error);
      res
        .status(HttpResponseCodes.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Internal server error" });
    }
  }

  static async getById(req: Request, res: Response) {
    try {
      console.log({ id: req.params.id });
      const response = await UsersService.getById(Number(req.params.id));
      if (response.success) {
        res.status(HttpResponseCodes.OK).json(response);
      } else {
        res.status(HttpResponseCodes.BAD_REQUEST).json(response);
      }
    } catch (error) {
      console.log(error);
      res
        .status(HttpResponseCodes.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Internal server error" });
    }
  }

  static async getByRoleId(req: Request, res: Response) {
    try {
      const response = await UsersService.getByRoleId(Number(req.params.id));
      if (response.success) {
        res.status(HttpResponseCodes.OK).json(response);
      } else {
        res.status(HttpResponseCodes.BAD_REQUEST).json(response);
      }
    } catch (error) {
      console.log(error);
      res
        .status(HttpResponseCodes.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Internal server error" });
    }
  }

  static async getAllAvailableDirectors(req: Request, res: Response) {
    try {
      const response = await UsersService.getAllAvailableDirectors();
      if (response.success) {
        res.status(HttpResponseCodes.OK).json(response);
      } else {
        res.status(HttpResponseCodes.BAD_REQUEST).json(response);
      }
    } catch (error) {
      console.log(error);
      res
        .status(HttpResponseCodes.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Internal server error" });
    }
  }

  static async getAllStudentsByActividadId(req: Request, res: Response) {
    try {
      const paramId = Number(req.params.id);
      console.log({paramId})
      const response = await UsersService.getAllStudentsByActividadId(paramId);
      console.log({ response })
      if (response.success) {
        res.status(HttpResponseCodes.OK).json(response);
      } else {
        res.status(HttpResponseCodes.BAD_REQUEST).json(response);
      }
    } catch (error) {
      console.log(error);
      res
        .status(HttpResponseCodes.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Internal server error" });
    }
  }

  static async getAllAvailableDocentes(req: Request, res: Response) {
    try {
      const response = await UsersService.getAllAvailableDocentes();
      if (response.success) {
        res.status(HttpResponseCodes.OK).json(response);
      } else {
        res.status(HttpResponseCodes.BAD_REQUEST).json(response);
      }
    } catch (error) {
      console.log(error);
      res
        .status(HttpResponseCodes.INTERNAL_SERVER_ERROR)
        .json({ success: false, message: "Internal server error" });
    }
  }

  static async forgotPassword(req: Request, res: Response) {
    try {
      const response = await UsersService.forgotPassword(
        req.body.correo_institucional
      );
      if (response.success) {
        res.status(HttpResponseCodes.OK).json(response);
      } else {
        res.status(HttpResponseCodes.BAD_REQUEST).json(response);
      }
    } catch (error) {
      console.log(error);
      if (error instanceof ControllerError) {
        res.status(HttpResponseCodes.BAD_REQUEST).json({ success: false });
      } else {
        res
          .status(HttpResponseCodes.INTERNAL_SERVER_ERROR)
          .json({ success: false });
      }
    }
  }

  static async resetPassword(req: Request, res: Response) {
    try {
      const hashedNewPassword = await bcrypt.hash(
        req.body.contrasena_nueva,
        10
      );

      const response = await UsersService.resetPassword(
        req.body.token,
        hashedNewPassword
      );
      if (response.success) {
        res.status(HttpResponseCodes.OK).json(response);
      } else {
        res.status(HttpResponseCodes.BAD_REQUEST).json(response);
      }
    } catch (error) {
      console.log(error);
      if (error instanceof ControllerError) {
        res.status(HttpResponseCodes.BAD_REQUEST).json({ success: false });
      } else {
        res
          .status(HttpResponseCodes.INTERNAL_SERVER_ERROR)
          .json({ success: false });
      }
    }
  }
}
