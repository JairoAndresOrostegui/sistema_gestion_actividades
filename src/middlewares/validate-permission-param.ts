import { NextFunction, Request, Response } from "express";
import { HttpResponseCodes } from "../shared/HttpResponseCodes";
import { ADMIN_ROLE_ID, DIRPROG_ROLE_ID, DOCENTE_ROLE_ID } from "../config";
import { UsersService } from "../services/users.service";

export async function validatePermissionParam(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const idParam = parseInt(req.params.id, 10);
  const user = await UsersService.getById(idParam);
  if (!user.success) {
    return res.status(HttpResponseCodes.NOT_FOUND).json({
      success: false,
      message: "Usuario no encontrado",
    });
  }

  if (
    user.data?.id_rol === DIRPROG_ROLE_ID &&
    req.body.token_role_id !== ADMIN_ROLE_ID
  ) {
    return res.status(HttpResponseCodes.FORBIDDEN).json({
      success: false,
      message: "No tienes permisos para hacer esto.",
    });
  }

  if (
    user.data?.id_rol === DOCENTE_ROLE_ID &&
    req.body.token_role_id !== DIRPROG_ROLE_ID
  ) {
    return res.status(HttpResponseCodes.FORBIDDEN).json({
      success: false,
      message: "No tienes permisos para hacer esto.",
    });
  }
  next();
}
