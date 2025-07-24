
import { Navigate } from 'react-router-dom';


const PrivateRoute = ({ children }) => {
  
  const isAuthenticated = localStorage.getItem("Token");
 console.log("User data in localStorage:", isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" replace /> ;
};

export default PrivateRoute;
