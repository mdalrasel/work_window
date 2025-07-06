import { use } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate, useLocation } from "react-router";


const PrivateRoute = ({ children }) => {
    const { user, loading } = use(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="min-h-screen flex items-center justify-center">
            <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
    }

    if (!user) {
        return <Navigate state={location?.pathname} to="/logIn"></Navigate>
    }

    return children;
};

export default PrivateRoute;