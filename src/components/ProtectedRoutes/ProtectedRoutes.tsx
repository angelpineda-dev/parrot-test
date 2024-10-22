import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../context/auth/AuthProvider";

const ProtectedRoutes = () => {
	const auth = useAuth();

	return auth.isAuthenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
