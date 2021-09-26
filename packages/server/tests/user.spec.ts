import "jest";

import request from "supertest";

let server: any;

describe("/api/users", () => {
  beforeEach(async () => {
    const res = await import("../lib/bin/www");
    server = res.default;
  });

  afterEach(async () => {
    if (server) await server.close();
  });

  describe("POST /verify", () => {
    it("should return a error if the OTP length is less than 6", async () => {
      const { error } = await request(server)
        .post("/api/users/verify")
        .send({ otp: "1234" });
      expect(error).toBeTruthy();
    });

    it("should return a error if the last digit is 7", async () => {
      const { error } = await request(server)
        .post("/api/users/verify")
        .send({ otp: "123457" });
      expect(error).toBeTruthy();
    });

    it("should return a error if OTP length is greater than 6", async () => {
      const { error } = await request(server)
        .post("/api/users/verify")
        .send({ otp: "1234578" });
      expect(error).toBeTruthy();
    });

    it("should return a success message on valid OTP", async () => {
      const res = await request(server)
        .post("/api/users/verify")
        .send({ otp: "123456" });
      expect(res.statusCode).toBe(200);
    });
  });
});
