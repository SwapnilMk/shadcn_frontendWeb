import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface ProtectedRouteProps {
    children: ReactNode;
    roles?: string[];
}

const ProtectedRoute = ({ children, roles = [] }: ProtectedRouteProps) => {
    const token = localStorage.getItem("token");
    const userRole = localStorage.getItem("role"); // Assuming role is stored in localStorage

    if (!token) {
        // User is not authenticated, redirect to login
        return <Navigate to="/login" />;
    }

    if (roles.length > 0 && !roles.includes(userRole || "")) {
        // User is authenticated but does not have the required role(s)
        return <Navigate to="/unauthorized" />; // Redirect to an unauthorized page
    }

    // User is authenticated and has the required role(s)
    return children;
};

export default ProtectedRoute;
