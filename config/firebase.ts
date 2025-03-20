import * as admin from "firebase-admin";
import * as dotenv from "dotenv";

dotenv.config();

if (!process.env.FIREBASE_CREDENTIALS_BASE64) {
  console.error("Missing Firebase credentials in environment variables!");
  process.exit(1);
}

const serviceAccount = JSON.parse(
  Buffer.from(process.env.FIREBASE_CREDENTIALS_BASE64, "base64").toString("utf-8")
);

if (!admin.apps.length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://assignment03-127c9-default-rtdb.firebaseio.com/",
  });

  console.log("Firebase initialized successfully!");
}

export const db = admin.firestore();
