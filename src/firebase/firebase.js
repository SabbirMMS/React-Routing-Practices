/* eslint-disable no-useless-catch */

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase.config";

const registerUserWithEmailPassword = async (name, email, password) => {
  try {
    const response = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = response.user;
    await updateProfile(user, { displayName: name });
    await sendEmailVerification(user);
    await signOut(auth);
  } catch (error) {
    throw error;
  }
};

const loginWithEmailPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    
  } catch (ignored) {}
};

export { registerUserWithEmailPassword };
