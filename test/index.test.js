const request = require("supertest");
const app = require("../index");

test("GET / returns Goodbye World", async () => {
  const res = await request(app).get("/");
  expect(res.status).toBe(200);
  expect(res.text).toBe("Goodbye World");
});
