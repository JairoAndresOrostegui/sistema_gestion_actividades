import request from "supertest";
import { Server } from "../server";
import { HttpResponseCodes } from "../shared/HttpResponseCodes";
const PORT = process.env.PORT;
const server = new Server(PORT!);

beforeEach(async () => {
  await server.listen();
});

afterEach(async () => {
  await server.stop();
});

it("POST /api/v1/users", async () => {
  const response = await request(server.express)
    .post("/api/v1/users")
    .set(
      "x-token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo3LCJyb2xlX2lkIjo0LCJpYXQiOjE3NDcyNzIxMjEsImV4cCI6MTc0NzI3NTcyMX0.anodPrV9a_nuRPzdN-vTwylpWTNMhPOdRU9Ahi-N7FU"
      // Token JWT utilizado para la autenticación, contiene información del usuario y su rol
    )
    .send({
      id_rol: 1,
      nombre_completo: "Carlos Rodriguez",
      correo_personal: "carlosr@gmail.com",
      correo_institucional: "carlosr@udi.edu.co",
      telefono: "3102746728",
      contrasena: "carlos123",
    });
  expect(response.statusCode).toBe(HttpResponseCodes.CREATED);
});
