import { ReactNode } from 'react';
import { Navigate } from 'react-router-dom';

interface PrivateRouteProps {
  children: ReactNode;
}

const PrivateRoute = ({ children }: PrivateRouteProps) => {
  const token = localStorage.getItem('token');

  // If token exists, user is authenticated
  return token ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
