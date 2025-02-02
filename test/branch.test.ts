import request from "supertest";
import app from "../src/app";

let server: any;
let branchId: number;

beforeAll(async () => {
  server = app.listen(3000, () => console.log("Test server running port 3000"));
});

afterAll(async () => {
  if (server) {
    await new Promise<void>((resolve) => server.close(() => {
      console.log("Test server closed");
      resolve();
    }));
  }
});

describe("Branch API", () => {
  it("Should create a new branch", async () => {
    const res = await request(app).post("/api/v1/branches").send({
      name: "Downtown Branch",
      address: "123 Main St",
      phone: "123-456-7890",
    });

    console.log("Created branch response:", res.body); 

    expect(res.status).toBe(201);
    expect(res.body).toHaveProperty("id");
    branchId = res.body.id; 
  });

  it("Should return all branches", async () => {
    const res = await request(app).get("/api/v1/branches");
    expect(res.status).toBe(200);
    expect(Array.isArray(res.body)).toBe(true);
  });

  it("Should return specific branch", async () => {
    if (!branchId) throw new Error("Branch ID is undefined");

    const res = await request(app).get(`/api/v1/branches/${branchId}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("id", branchId);
  });

  it("Should update branch", async () => {
    if (!branchId) throw new Error("Branch ID is undefined");

    const res = await request(app).put(`/api/v1/branches/${branchId}`).send({
      phone: "987-654-3210",
    });

    expect(res.status).toBe(200);
    expect(res.body.phone).toBe("987-654-3210");
  });

  it("Should delete a branch", async () => {
    if (!branchId) throw new Error("Branch ID is undefined");

    const res = await request(app).delete(`/api/v1/branches/${branchId}`);
    expect(res.status).toBe(200);
    expect(res.body).toHaveProperty("message", "Branch deleted successfully");
  });
});
