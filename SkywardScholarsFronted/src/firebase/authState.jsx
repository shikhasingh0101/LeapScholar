import { onAuthStateChanged } from "./firebase/auth";
import { auth } from "./firebaseConfig";  // Adjust path

const authStateListener = (callback) => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      callback(user);  // User is signed in
    } else {
      callback(null);  // User is signed out
    }
  });
};

export { authStateListener };
