const request = require("supertest");
const app = require("../index");

test("GET / returns Hello World", async () => {
  const res = await request(app).get("/");
  expect(res.status).toBe(200);
  expect(res.text).toBe("Hello World");
});
