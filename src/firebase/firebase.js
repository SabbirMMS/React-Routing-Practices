/* eslint-disable no-useless-catch */

import {
  createUserWithEmailAndPassword,
  FacebookAuthProvider,
  GithubAuthProvider,
  GoogleAuthProvider,
  sendEmailVerification,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase.config";
import { toast } from "react-toastify";

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

const loginWithEmailAndPassword = async (email, password) => {
  try {
    const response = await signInWithEmailAndPassword(auth, email, password);
    return response;
  } catch (error) {
    throw error;
  }
};

const sendResetPassword = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
  } catch (error) {
    throw error;
  }
};

/**
 *
 * Firebase authentication setup
 * Provider setup
 *
 */

// Google Login
const googleAuth = new GoogleAuthProvider();
const loginWithGoogle = async () => {
  try {
    // const response = await auth.signInWithPopup(googleAuth);
    const response = await signInWithPopup(auth, googleAuth);
    return response;
  } catch (error) {
    throw error;
  }
};
// GitHub Login
const githubAuth = new GithubAuthProvider();
const loginWithGitHub = async () => {
  try {
    const response = await signInWithPopup(auth, githubAuth);
    // return response;

    // My part Starts --- >
    const user = response.user;
    if (user.emailVerified) {
      return user; // Allow access
    } else {
      console.warn("Email is not verified. Prompt user to verify.");
      await sendEmailVerification(user); // Optionally send verification email
      // toast.error("Your email is not verified. A verification email has been sent to your inbox.")
      throw new Error(
        `Your email is not verified. A verification email has been sent to your inbox for ${user.email}`
      );
    }
    // My part Ends --- >
  } catch (error) {
    throw error;
  }
};
// Facebook Login
const facebookAuth = new FacebookAuthProvider();
const loginWithFacebook = async () => {
  try {
    const response = await signInWithPopup(auth, facebookAuth);
    // return response;

    // My part Starts --- >
    const user = response.user;
    if (user.emailVerified) {
      return user; // Allow access
    } else {
      console.warn("Email is not verified. Prompt user to verify.");
      await sendEmailVerification(user); // Optionally send verification email
      throw new Error(
        `Your email is not verified. A verification email has been sent to your inbox for  ${user.email}`
      );
    }
    // My part Ends --- >
  } catch (error) {
    throw error;
  }
};

export {
  registerUserWithEmailPassword,
  loginWithEmailAndPassword,
  sendResetPassword,
  loginWithGoogle,
  loginWithGitHub,
  loginWithFacebook,
};
