import { createContext, useContext, useState } from "react";
import Loader from "../../components/Loader/Loader";

const AuthContext = createContext({
	logout: () => {},
	isAuthenticated: false,
	getAccessToken: () => {},
	setAuthTokens: (_accessToken: string, _refreshToken: string) => {},
});

interface AuthProviderProps {
	children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
	const [accessToken, setAccessToken] = useState("");
	const [refreshToken, setRefreshToken] = useState("");
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(false);

	function setAuthTokens(accessToken: string, refreshToken: string) {
		setAccessToken(accessToken);
		setRefreshToken(refreshToken);

		localStorage.setItem("token", JSON.stringify(refreshToken));
	}

	function getAccessToken() {
		return accessToken;
	}

	function logout() {
		localStorage.removeItem("token");
		setAccessToken("");
		setRefreshToken("");
		// petition to remove token?
	}

	async function checkAuth() {
		setIsLoading(true);

		try {
			if (!!accessToken) {
				setAccessToken(accessToken);
				setIsAuthenticated(true);
				setIsLoading(false);
			} else {
				const token = localStorage.getItem("token");

				if (token) {
					const refreshToken = JSON.parse(token);

					//-> /api/auth/token/refresh
					// refresh
					// set data
				}
			}
		} catch (error) {
			console.error(error);
			// show alert with error
		}
	}

	return (
		<AuthContext.Provider
			value={{
				logout,
				setAuthTokens,
				getAccessToken,
				isAuthenticated,
			}}
		>
			{isLoading ? <Loader /> : children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext);
