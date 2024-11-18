import { ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface PrivateRouteProps {
  children: ReactNode;
  isAuthenticated: boolean;
  userRole: string;
  allowedRoles: string[];
}

export const PrivateRoute = ({
  children,
  isAuthenticated,
  userRole,
  allowedRoles
}: PrivateRouteProps) => {
  const location = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }

  if (!allowedRoles.includes(userRole)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <>{children}</>;
};