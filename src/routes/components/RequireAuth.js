import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ isLoggedIn, children }) {
  const location = useLocation();

  const logout = async () => {
    // TODO signout
    console.log("you are logged out");
  };

  if (isLoggedIn) {
    return children;
  } else {
    logout();
  }

  return <Navigate to="/public/login" state={{ from: location }} />;
}
