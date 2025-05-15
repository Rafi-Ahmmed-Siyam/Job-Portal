import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth'
import { auth } from '../Firebase/Firebase.init';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loding, setLoding] = useState(true);


    const createUser = (email, password) => {
        setLoding(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }
    const signInUser = (email, password) => {

        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleProvider = new GoogleAuthProvider();
    const signInWithGoogle = () => {
        setLoding(true)
        return signInWithPopup(auth, googleProvider)
    }

    const userSignOut = () => {
        return signOut(auth)
    }

    /// Observer
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {

                setUser(currentUser)

                if (currentUser?.email) {
                    const user = { email: currentUser.email }

                    axios.post('https://job-portal-server-rho-sandy.vercel.app/jwt', user, { withCredentials: true })
                        .then(result => {
                            console.log(result.data)
                            setLoding(false)
                        })
                }

                // Put in the right place
                

            }
            else {
                setUser(null)
                axios.post('https://job-portal-server-rho-sandy.vercel.app/logout', {}, { withCredentials: true })
                    .then(res => {
                        console.log('logout', res.data)
                        setLoding(false);
                    })
            }

        });

        return unSubscribe;
    }, [])
    const authInfo = {
        user,
        loding,
        createUser,
        signInUser,
        signInWithGoogle,
        userSignOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;