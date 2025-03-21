import { swaggerSpec } from "../src/swagger"; 

import fs from "fs";

// Save OpenAPI spec to a JSON file
fs.writeFileSync("./openapi.json", JSON.stringify(swaggerSpec, null, 2));

console.log("OpenAPI specification generated successfully!");
