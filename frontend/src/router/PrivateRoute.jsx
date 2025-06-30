import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../context/Context";

const PrivateRoute = ({ allowedRoles }) => {
  const { user, loading } = useAuth();

  if (loading) return <p>Chargement...</p>;

  if (!user || !allowedRoles.includes(user.role)) {
    return <Navigate to="/" />;
  }

  return <Outlet />;
};

export default PrivateRoute;
