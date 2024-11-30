import {
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile,
  } from "firebase/auth";
  import { createContext, useEffect, useState } from "react";
  import auth from "../firebase/firebase.config";
  
  export const AuthContext = createContext();
  const googleProvider = new GoogleAuthProvider();
  
  const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
  
    //create new user
    const registerUser = (email, password) => {
      setLoading(true);
      return createUserWithEmailAndPassword(auth, email, password);
    };
  
    //create new user with Google
    const signInWithGoogle = () => {
      setLoading(true);
      return signInWithPopup(auth, googleProvider);
    };
  
    //login user
    const loginUser = (email, password) => {
      setLoading(true);
      return signInWithEmailAndPassword(auth, email, password);
    };
  
    //logout user
    const logOut = () => {
      return signOut(auth);
    };
  
    //update Profile
    const updateUserProfile = (updatedData) => {
      return updateProfile(auth.currentUser, updatedData);
    };
  
    //reset password
    const resetUserPassword = (email) => {
      return sendPasswordResetEmail(auth, email);
    };
  
    const authInfo = {
      user,
      setUser,
      registerUser,
      signInWithGoogle,
      loginUser,
      logOut,
      updateUserProfile,
      loading,
      resetUserPassword,
    };
  
    //observer
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false);
      });
      return () => {
        unsubscribe();
      };
    }, []);
  
    return (
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    );
  };
  
  export default AuthProvider;
  