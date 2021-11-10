
import { getAuth, signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { useEffect, useState } from "react";
import initAuthentication from "../Firebase/Firebase.init";


initAuthentication();

const useFirebase = () => {
    
 const [user, setUser] = useState({});
    
//-----------------------------------
   
   const auth = getAuth();  
    const googleProvider = new GoogleAuthProvider();
//-----------------------------------
    const googleSignIn = () => {
       
    return  signInWithPopup(auth, googleProvider)
            
    }//googleSignIn
 //-----------------------------------   
        const logOut = () => {
            signOut(auth)
                .then(() => {
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
        },[])//useEffect
    //-----------------------------------
    return {
        user,
        googleSignIn,
        logOut
    }//return
}//useFirebase
export default useFirebase;
    

 