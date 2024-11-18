/* eslint-disable no-useless-catch */

import {
  createUserWithEmailAndPassword,
  sendEmailVerification,
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
export { registerUserWithEmailPassword };
