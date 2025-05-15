import dotenv from "dotenv";
dotenv.config();

export const PORT = process.env.PORT || "PORT environment variable is required";
export const ADMIN_ROLE_ID = Number(process.env.ADMIN_ROLE_ID);
export const DIRPROG_ROLE_ID = Number(process.env.DIRPROG_ROLE_ID);
export const DOCENTE_ROLE_ID = Number(process.env.DOCENTE_ROLE_ID);
export const ESTUDIANTE_ROLE_ID = Number(process.env.ESTUDIANTE_ROLE_ID);
export const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY;
export const EMAIL = process.env.EMAIL;
export const PASSWORD = process.env.PASSWORD;
export const GENERATED_PASSWORD = process.env.GENERATED_PASSWORD;
export const RECORDS_PER_PAGE = 5;
