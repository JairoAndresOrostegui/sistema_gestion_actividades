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

it("DELETE /api/v1/users/:id", async () => {
  const response = await request(server.express)
    .delete(`/api/v1/users/${25}`)
    .set(
      "x-token",
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjo3LCJyb2xlX2lkIjo0LCJpYXQiOjE3NDcyNzIxMjEsImV4cCI6MTc0NzI3NTcyMX0.anodPrV9a_nuRPzdN-vTwylpWTNMhPOdRU9Ahi-N7FU"
    );
  expect(response.statusCode).toBe(HttpResponseCodes.OK);
});
