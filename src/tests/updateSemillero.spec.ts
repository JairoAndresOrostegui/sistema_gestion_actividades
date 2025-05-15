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

it("PUT /api/v1/semilleros/:id", async () => {
  const response = await request(server.express)
    .put(`/api/v1/semilleros/${4}`)
    .set(
      "x-token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyNSwicm9sZV9pZCI6MSwiaWF0IjoxNzQ3Mjc0NTczLCJleHAiOjE3NDcyNzgxNzN9.3DB5jBHgnj04JTDmwQUKvYB3pCHiDGEBRJpz3s3Bdg4"
    )
    .send({
      nombre: "Semillero de investigación Backend",
      descripcion: "Investigación de patrones de diseño para uso en el backend",
      cupo: 15,
    });
  expect(response.statusCode).toBe(HttpResponseCodes.OK);
});
