import { useContext } from "react";
import { AuthContex } from "../firebase/Authprovider";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({children}) => {
    const {user , lodaing} = useContext(AuthContex)

    if(lodaing){
      return  <div className="mx-auto"> <span className="loading loading-dots loading-lg"></span></div>
    }

   if(user){
    return children;
   }

   return <Navigate to='/login'></Navigate>


};

export default PrivateRoute;