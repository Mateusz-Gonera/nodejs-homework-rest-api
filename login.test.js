const request = require("supertest");
const app = require("./app.js");

describe("/POST /api/users/login", () => {
  test("should response with status code 200", async () => {
    const response = await request(app)
      .post("/api/users/login")
      .send({
        email: "email",
        password: "password",
      })
      .set("Accept", "application/json");
    expect(response.status).toBe(200);
  });
});
