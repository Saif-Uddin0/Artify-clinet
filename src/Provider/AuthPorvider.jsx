import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { AuthContext } from './AuthContext';
import { auth } from '../Firebase/firebase.init';
import { useEffect, useState } from 'react';



const googleProvider = new GoogleAuthProvider()


const AuthPorvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

console.log(user);

    // register a new User
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login a user
    const signInUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }



    // observer
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
            setUser(currentUser);
            setLoading(false)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    // signout
    const logOut=() => {
        setLoading(true);
        return signOut(auth)
    } 

    // signIn With google
    const signInWithGoogle =() =>{
        setLoading(true);
        return signInWithPopup(auth,googleProvider)
    }




    const authData = {
        user,
        setUser,
        loading,
        setLoading,
        createUser,
        signInUser,
        logOut,
        signInWithGoogle
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
}
export default AuthPorvider;