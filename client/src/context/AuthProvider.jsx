import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword,GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password);

    }

    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleLogIn = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }

    

    

    const logOut = () =>{
        setLoading(true)
        return signOut(auth)
    }

     useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
             setUser(currentUser);
             setLoading(false)
             
         });
         return () =>{
             unSubscribe();
         }
     },[])

    const authInfo = {
        user,
        createUser,
        logIn,
        logOut,
        loading,
        googleLogIn,

    }
    return (
        <AuthContext value={authInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;