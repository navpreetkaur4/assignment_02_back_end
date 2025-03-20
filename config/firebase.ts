import * as dotenv from "dotenv";
import * as admin from "firebase-admin";

dotenv.config();

// Load Firebase credentials from environment variables
const { FIREBASE_PROJECT_ID, FIREBASE_CLIENT_EMAIL, FIREBASE_PRIVATE_KEY } = process.env;

// Validate required environment variables
if (!FIREBASE_PROJECT_ID || !FIREBASE_CLIENT_EMAIL || !FIREBASE_PRIVATE_KEY) {
  console.error("Missing Firebase configuration. Ensure all required environment variables are set.");
  process.exit(1);
}

try {
  if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: FIREBASE_PROJECT_ID,
        clientEmail: FIREBASE_CLIENT_EMAIL,
        privateKey: FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"), 
      }),
      databaseURL: `https://${FIREBASE_PROJECT_ID}.firebaseio.com`,
    });

    console.log("Firebase initialized successfully!");
  }
} catch (error) {
  console.error("Firebase initialization error:", error);
  process.exit(1);
}

// Create Firestore database instance
const db = admin.firestore();

// Debug: Verify Firestore connection
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

export { db };
