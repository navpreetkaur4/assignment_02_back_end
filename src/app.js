"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cors_1 = require("cors");
var morgan_1 = require("morgan");
var swagger_1 = require("./swagger");
var employee_routes_1 = require("./api/v1/routes/employee.routes");
var branch_routes_1 = require("./api/v1/routes/branch.routes");
var app = (0, express_1.default)();
// Middleware
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.use((0, morgan_1.default)("combined"));
// Setup Swagger Documentation
(0, swagger_1.setupSwagger)(app);
// API Routes
app.use("/api/v1/employees", employee_routes_1.default);
app.use("/api/v1/branches", branch_routes_1.default);
// Health Check Endpoint
app.get("/health", function (req, res) {
    res.status(200).send("Server is healthy");
});
// Start the server only if executed directly
if (require.main === module) {
    var PORT_1 = 3000;
    app.listen(PORT_1, function () {
        console.log("Server is running on http://localhost:".concat(PORT_1));
    });
}
exports.default = app;
