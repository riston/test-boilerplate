
var assert = require("assert");
var request = require("supertest");
var app = require("../lib/application");

describe("Index", function () {
    
    it("ping page", function (done) {
        request(app)
            .get("/")
            .expect(200)
            .end(done);
    });

    it("users page", function (done) {
        request(app)
            .get("/users")
            .expect(200)
            .end(function (err, res) {
                if (err) return done(err);

                assert(Array.isArray(res.body));
                done();
            });
    });
});