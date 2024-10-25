import { Navigate, Outlet } from "react-router";
import { useAuth } from "../../context/auth/AuthProvider";
import Layout from "../Layout/Layout";

const ProtectedRoutes = () => {
	const auth = useAuth();

	return auth.isAuthenticated ? (
		<Layout>
			<Outlet />
		</Layout>
	) : (
		<Navigate to="/login" />
	);
};

export default ProtectedRoutes;
