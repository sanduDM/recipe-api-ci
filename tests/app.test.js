const request = require("supertest");
const app = require("../src/app");


describe("GET / API Test", () => {

    test("should return CI Pipeline Working message", async () => {

        const response = await request(app).get("/");

        expect(response.statusCode).toBe(200);

        expect(response.body.message)
            .toBe("CI Pipeline Working");

    });

});