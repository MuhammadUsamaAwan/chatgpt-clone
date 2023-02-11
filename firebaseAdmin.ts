import admin from 'firebase-admin';
import { getApps, ServiceAccount } from 'firebase-admin/app';

const serviceAccount: ServiceAccount = {
  projectId: process.env.FIREBASE_SERVICE_ACCOUNT_PROJECT_ID,
  privateKey: process.env.FIREBASE_SERVICE_ACCOUNT_PRIVATE_KEY,
  clientEmail: process.env.FIREBASE_SERVICE_ACCOUNT_CLIENT_EMAIL,
};

if (!getApps().length) {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  });
}

export const adminDb = admin.firestore();
