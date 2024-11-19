/* eslint-disable react/prop-types */

import { useAuthState } from "react-firebase-hooks/auth";
import Loading from "../../components/Loading ";
import { Navigate } from "react-router-dom";
import { auth } from "../../firebase/firebase.config";


const PrivateRouter = ({children}) => {
    const [user, loading] = useAuthState(auth)
    if(loading) return <Loading/>
    if(!user){
        return <Navigate to="/login"/> // Router dom's property
    }
    return children;
};

export default PrivateRouter;