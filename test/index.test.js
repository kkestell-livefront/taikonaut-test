const request = require("supertest");
const app = require("../index");

test("GET / returns Hello World", async () => {
  const res = await request(app).get("/");
  expect(res.status).toBe(200);
  expect(res.text).toBe("Hello World");
});

test("GET /health returns ok", async () => {
  const res = await request(app).get("/health");
  expect(res.status).toBe(200);
  expect(res.text).toBe("ok");
  expect(res.headers["content-type"]).toContain("text/plain");
});
