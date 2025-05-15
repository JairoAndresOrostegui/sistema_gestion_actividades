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

it("POST /api/v1/semilleros", async () => {
  const response = await request(server.express)
    .post("/api/v1/semilleros")
    .set(
      "x-token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyNSwicm9sZV9pZCI6MSwiaWF0IjoxNzQ3Mjc0NTczLCJleHAiOjE3NDcyNzgxNzN9.3DB5jBHgnj04JTDmwQUKvYB3pCHiDGEBRJpz3s3Bdg4"
    )
    .send({
      id_prog_acad: 12,
      id_docente: 26,
      nombre: "Semillero de investigación Frontend",
      descripcion:
        "Investigación de patrones de diseño para uso en el frontend",
      cupo: 20,
      fecha_limite_inscripcion: "2025-05-20T00:00:00.000Z",
      fecha_inicio: "2025-05-21T00:00:00.000Z",
      fecha_fin: "2025-05-22T00:00:00.000Z",
      cant_act_aprobatoria: 2,
    });
  expect(response.statusCode).toBe(HttpResponseCodes.CREATED);
});
