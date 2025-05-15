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

it("POST /api/v1/actividades", async () => {
  const response = await request(server.express)
    .post("/api/v1/actividades")
    .set(
      "x-token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyNiwicm9sZV9pZCI6MiwiaWF0IjoxNzQ3Mjc3MDAyLCJleHAiOjE3NDcyODA2MDJ9.UdnQAGr2RyR4N681S_iIB3VwARuTbP7R5DDZY2NFx_4"
    )
    .send({
      id_semillero: 4,
      nombre: "Instalar Node.js",
      descripcion: "Instalar y configurar un proyecto utilizando Node.js",
      fecha_inicio: "2025-05-21T00:00:00.000Z",
      fecha_fin: "2025-05-22T00:00:00.000Z",
    });
  expect(response.statusCode).toBe(HttpResponseCodes.CREATED);
});
