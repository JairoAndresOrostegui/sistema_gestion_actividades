import { NextFunction, Request, Response } from "express";
import { HttpResponseCodes } from "../shared/HttpResponseCodes";
import {
  ADMIN_ROLE_ID,
  DIRPROG_ROLE_ID,
  DOCENTE_ROLE_ID,
  ESTUDIANTE_ROLE_ID,
} from "../config";

export function validateUserCreation(
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (req.body.id_rol === DIRPROG_ROLE_ID) {
    if (req.body.token_role_id !== ADMIN_ROLE_ID) {
      return res.status(HttpResponseCodes.FORBIDDEN).json({
        success: false,
        message:
          "No tienes permisos para crear un usuario con rol de DIRECTOR DE PROGRAMA",
      });
    }
  }

  if (req.body.id_rol === DOCENTE_ROLE_ID) {
    if (req.body.token_role_id !== DIRPROG_ROLE_ID) {
      return res.status(HttpResponseCodes.FORBIDDEN).json({
        success: false,
        message: "No tienes permisos para crear un usuario con rol de DOCENTE",
      });
    }
  }

  if (req.body.id_rol === ESTUDIANTE_ROLE_ID) {
    if (req.body.token_role_id !== DOCENTE_ROLE_ID) {
      return res.status(HttpResponseCodes.FORBIDDEN).json({
        success: false,
        message:
          "No tienes permisos para crear un usuario con rol de ESTUDIANTE",
      });
    }

    req.body.is_student = true;
  }
  next();
}
