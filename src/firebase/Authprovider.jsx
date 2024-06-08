import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";

export const AuthContex = createContext(null)


const Authprovider = ({children}) => {
    
const [user , setUser]=useState(null)

const [lodaing ,setLoading] = useState(true)


const createuser = (email , password) =>{
    setLoading(true);
    return createUserWithEmailAndPassword(auth , email , password)
}

const login = ( email , password)=>{
    setLoading(true);

    return signInWithEmailAndPassword(auth ,email , password)
}



const logout = ()=>{
    setLoading(true)

   return signOut(auth)
}

useEffect(()=>{
   const unsubcribe =   onAuthStateChanged(auth , currentUser =>{
        console.log('uers auth state is changed ' , currentUser) 

        setUser(currentUser);
        setLoading(false)
    });
    return ()=>{
        unsubcribe()
    }
} ,[])


    const authInfo = {
  
        lodaing, user , createuser, setUser , logout ,login
    }


    return (
        <AuthContex.Provider value={authInfo}>
            {children}


        </AuthContex.Provider>
    );
};

export default Authprovider;