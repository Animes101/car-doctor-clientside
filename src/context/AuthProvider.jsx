
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider,onAuthStateChanged  } from "firebase/auth";
import app from "../firebase/firebase";

export const AuthContext=createContext(null);

const auth=getAuth(app);

const AuthProvider = ({ children }) => {

    const [user, setUser]=useState(null);
    const [loading, setLoading]=useState(true);

    const googleProvider = new GoogleAuthProvider();

        const signUpUser=(email,password)=>{
            setLoading(true)
            return createUserWithEmailAndPassword(auth, email, password)
        }

        const signInUser=(email,password)=>{
            setLoading(true)
            return signInWithEmailAndPassword(auth, email, password)
        }

        const googleSignIn=()=>{
            setLoading(true)
            return signInWithPopup(auth, googleProvider)
        }

        const logOUt=()=>{
            return signOut(auth)
        }


        const authInfo={
            signUpUser,
            signInUser,
            googleSignIn,
            logOUt,
            user,
            setUser,
            loading,
            setLoading,
        }

        // User managment

            useEffect(()=>{
            const unSubscrib = onAuthStateChanged(auth, (curentUser) => {
                    if (curentUser) {
                    setUser(curentUser)
                    setLoading(false)
                    } else {
                    // User is signed out

                    setUser(null)
                

                    
                    }
                })

                return ()=>{
                    unSubscrib();
                }
            },[])

            return (   
                <AuthContext.Provider value={authInfo}>
                    {children}
                </AuthContext.Provider>
            );
            };

export default AuthProvider;

