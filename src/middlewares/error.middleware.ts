import { Request, Response, NextFunction } from "express";
import { HttpResponseCodes } from "../shared/HttpResponseCodes";

export function handleError(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {
  console.error(err);
  res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).json({
    status: "error",
    message: err.message,
  });
}
