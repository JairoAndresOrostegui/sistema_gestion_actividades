import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import { HttpResponseCodes } from "../shared/HttpResponseCodes";

export function validateJwt(req: Request, res: Response, next: NextFunction) {
  const token = req.header("x-token");

  if (!token) {
    return res.status(HttpResponseCodes.BAD_REQUEST).json({
      success: false,
      message: "No se encontró token en la petición",
    });
  }

  try {
    const { user_id, role_id } = jwt.verify(
      token,
      process.env.JWT_SECRET_KEY!
    ) as {
      user_id: number;
      role_id: number;
    };

    req.body.token_user_id = user_id;
    req.body.token_role_id = role_id;
    next();
  } catch (error) {
    return res.status(HttpResponseCodes.BAD_REQUEST).json({
      success: false,
      message: "El token no es válido o ya expiró",
    });
  }
}
