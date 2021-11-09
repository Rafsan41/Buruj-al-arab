
import { getAuth, signInWithPopup, GoogleAuthProvider,onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuthentication from "../../Firebase/Firebase.init";


initAuthentication();

const useFirebase = () => {

    const [ user, setUser]  = useState({});
//-----------------------------------
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();
//-----------------------------------
    const googleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = user.result
                console.log(user);
            })//.then
    }//googleSignIn
 //-----------------------------------   
        const logOut = () => {
            signOut(auth)
                .then(result => {
                    setUser({});
                })
    } //logout
//-----------------------------------
        useEffect(() => {
                const unsubscribe = onAuthStateChanged(auth, (user) => {
                    if (user) {
                        setUser(user)
                    }
                });
                return unsubscribe;
        }, [])//useEffect
    //-----------------------------------
    return {
        user,
        googleSignIn,
        logOut
    }//return
}//useFirebase
    

 