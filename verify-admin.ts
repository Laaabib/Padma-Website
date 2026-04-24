import * as admin from 'firebase-admin';

async function verify() {
  try {
    admin.initializeApp({
      credential: admin.credential.applicationDefault()
    });
    console.log('Firebase admin initialized.');
  } catch (err) {
    console.error('Error:', err);
  }
}

verify();
