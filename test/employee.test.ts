import request from "supertest";
import app from "../src/app";

let server: any;
let employeeId: number;

beforeAll(async () => {
  if (!server) {
    server = app.listen(0, () => console.log("Test server running on a random port")); 
  }
});

afterAll(async () => {
  if (server && server.listening) {
    await new Promise<void>((resolve, reject) => {
      server.close((err: Error | null) => {
        if (err) {
          console.error("Error closing server:", err);
          reject(err);
        } else {
          console.log("Test server closed successfully");
          resolve();
        }
      });
    });
  }
});

describe("Employee API", () => {
  test("Should create a new employee", async () => {
    const res = await request(app).post("/api/v1/employees").send({
      name: "John Doe",
      position: "Developer",
      department: "IT",
      email: "john@example.com",
      phone: "987-654-3210",
      branchId: 1,
    });

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    employeeId = res.body.id;
  });

  test("Should fetch all employees", async () => {
    const res = await request(app).get("/api/v1/employees");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("Should fetch an employee by ID", async () => {
    if (!employeeId) throw new Error("Employee ID is undefined");

    const res = await request(app).get(`/api/v1/employees/${employeeId}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id", employeeId);
  });

  test("Should fetch employees by department", async () => {
    const res = await request(app).get("/api/v1/employees/department/IT");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("Should fetch employees by branch ID", async () => {
    const res = await request(app).get("/api/v1/employees/branch/1");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  test("Should update an employee", async () => {
    if (!employeeId) throw new Error("Employee ID is undefined");

    const res = await request(app).put(`/api/v1/employees/${employeeId}`).send({
      position: "Senior Developer",
    });

    expect(res.status).toBe(200);
    expect(res.body.position).toBe("Senior Developer");
  });

  test("Should delete an employee", async () => {
    if (!employeeId) throw new Error("Employee ID is undefined");

    const res = await request(app).delete(`/api/v1/employees/${employeeId}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message", "Employee deleted successfully");
  });
});
