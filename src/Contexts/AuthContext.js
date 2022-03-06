import React, { createContext, useContext, useEffect, useState } from 'react';
import { getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
        updateProfile,
        onAuthStateChanged
     } from "firebase/auth";
import '../firebase';
import { useHistory } from 'react-router';


const AuthContext = createContext();

export function useAuth(){
    return useContext(AuthContext);
}

export function AuthProvider({children}){

    const [loading, setLoading] = useState(true);
    const [loggedInUser, setLoggedInUser] = useState();

    useEffect(()=>{
        const auth = getAuth();
        const unsubscribe = onAuthStateChanged(auth, (user)=>{
            setLoggedInUser(user);
            setLoading(false);
        });
        return unsubscribe;
    }, []);

    // signUp function 
    async function signUp(email, password, username){
        const auth = getAuth();
        
        await createUserWithEmailAndPassword(auth, email, password, username);
        // update profile 
        await updateProfile(auth.currentUser, {displayName: username});

        const user = auth.currentUser;
        setLoggedInUser({...user});
        console.log(loggedInUser)
    }

    // login function 
    const login = (email, password) =>{
        const auth = getAuth();
        return (
            signInWithEmailAndPassword(auth, email, password)
        );
    };

    // logout function 
    function logout(){
        const auth = getAuth();
        return signOut(auth);
    }

    const value = {loggedInUser, signUp, login, logout};

    return(
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}