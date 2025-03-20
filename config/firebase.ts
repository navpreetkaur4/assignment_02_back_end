import * as dotenv from "dotenv";
import * as admin from "firebase-admin";
import * as path from "path";
import * as fs from "fs";
 
dotenv.config();
 
// Get the path of the Firebase credentials file
const serviceAccountPath =
  process.env.FIREBASE_CREDENTIALS_PATH ||
  path.resolve(__dirname, "assignment03-127c9-firebase-adminsdk-fbsvc-fdcae3dd7f.json");
 
// Debug: Log credential path
console.log("Firebase Credentials Path:", serviceAccountPath);
 
// Ensure the credentials file exists
if (!fs.existsSync(serviceAccountPath)) {
  console.error("Firebase service account file is missing! Ensure it's in the config folder.");
  process.exit(1);
}
 
// Load Firebase service account credentials
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf-8"));
 
try {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
      databaseURL: "https://assignment03-127c9-default-rtdb.firebaseio.com/",
    });
 
    console.log("Firebase initialized successfully!");
  }
} catch (error) {
  console.error("Firebase initialization error:", error);
  process.exit(1);
}
 
// Create Firestore database instance
const db = admin.firestore();
 
// Debug: Verify database connection
async function testFirestoreConnection() {
  try {
    await db.collection("test-connection").add({ message: "Firestore is connected!" });
    console.log("Firestore connection test passed");
  } catch (error) {
    console.error("Firestore connection test failed:", error);
  }
}
 
// Run Firestore test only if not in test environment
if (process.env.NODE_ENV !== "test") {
  testFirestoreConnection();
}