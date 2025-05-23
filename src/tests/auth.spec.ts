import request from "supertest";
import { Server } from "../server";
import { HttpResponseCodes } from "../shared/HttpResponseCodes";
const PORT = process.env.PORT;
const server = new Server(PORT!);

beforeEach(async () => {
  await server.listen();
}); // Inicia el servidor antes de cada prueba

afterEach(async () => {
  await server.stop();
}); // Detiene el servidor después de cada prueba

it.only("POST /api/v1/users/authenticate", async () => {
  const response = await request(server.express)
    .post("/api/v1/users/authenticate") // Envía una petición POST a la ruta '/v1/users/authenticate' para autenticar al usuario
    .send({
      correo_institucional: "jairo@udi.edu.co", // Correo electrónico del usuario que intenta autenticarse
      contrasena: "jairo123", // Contraseña del usuario que intenta autenticarse
    });
  expect(response.statusCode).toBe(HttpResponseCodes.OK); // Verifica que el código de respuesta sea 200 (OK), lo que indica que la autenticación fue exitosa
});
