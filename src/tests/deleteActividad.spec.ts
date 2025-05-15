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

it("DELETE /api/v1/actividades/:id", async () => {
  const response = await request(server.express)
    .delete(`/api/v1/actividades/${3}`)
    .set(
      "x-token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyNiwicm9sZV9pZCI6MiwiaWF0IjoxNzQ3Mjc3MDAyLCJleHAiOjE3NDcyODA2MDJ9.UdnQAGr2RyR4N681S_iIB3VwARuTbP7R5DDZY2NFx_4"
    );
  expect(response.statusCode).toBe(HttpResponseCodes.OK);
});
