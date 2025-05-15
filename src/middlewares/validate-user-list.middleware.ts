import { NextFunction, Request, Response } from "express";
import { HttpResponseCodes } from "../shared/HttpResponseCodes";
import { ADMIN_ROLE_ID, DIRPROG_ROLE_ID } from "../config";

export function validateUserList(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const idParam = parseInt(req.params.id, 10);

  if (idParam === DIRPROG_ROLE_ID && req.body.token_role_id !== ADMIN_ROLE_ID) {
    return res.status(HttpResponseCodes.FORBIDDEN).json({
      success: false,
      message: "No tienes permisos para hacer esto.",
    });
  }
  next();
}
