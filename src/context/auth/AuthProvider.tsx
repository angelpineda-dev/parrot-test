import { createContext, useContext, useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import { useAxios } from "../axios/AxiosProvider";
import { IAuhToken } from "../../interfaces";

interface IAuthContext {
	logout: () => void;
	isAuthenticated: boolean;
	getAccessToken: () => string;
	accessToken: string;
	setAuthTokens: (_accessToken: string, _refreshToken: string) => void;
	isLoading: boolean;
}

const AuthContext = createContext<IAuthContext>({
	logout: () => {},
	isAuthenticated: false,
	getAccessToken: () => "",
	accessToken: "",
	setAuthTokens: (_accessToken: string, _refreshToken: string) => {},
	isLoading: false,
});

interface AuthProviderProps {
	children: React.ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
	const { axiosInstance, setAxiosToken } = useAxios();
	const [accessToken, setAccessToken] = useState("");
	const [refreshToken, setRefreshToken] = useState("");
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const [isLoading, setIsLoading] = useState(true);

	function setAuthTokens(accessToken: string, refreshToken: string) {
		setAccessToken(accessToken);
		setRefreshToken(refreshToken);
		setIsAuthenticated(true);
		setAxiosToken(accessToken);

		localStorage.setItem("token", JSON.stringify(refreshToken));
	}

	function getAccessToken() {
		return accessToken;
	}

	function logout() {
		localStorage.removeItem("token");
		setAccessToken("");
		setRefreshToken("");
		setIsAuthenticated(false);
	}

	async function checkAuth() {
		setIsLoading(true);

		try {
			if (!!accessToken) {
				setAccessToken(accessToken);
				setIsAuthenticated(true);
			} else {
				const token = localStorage.getItem("token");

				if (token) {
					const refreshToken = JSON.parse(token);

					const response: IAuhToken = await axiosInstance.post(
						`/auth/token/refresh`,
						{
							refresh: refreshToken,
						}
					);

					const { access, refresh } = response;

					setAuthTokens(access, refresh);
				}
			}
		} catch (error) {
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		checkAuth();
	}, []);

	return (
		<AuthContext.Provider
			value={{
				logout,
				setAuthTokens,
				getAccessToken,
				accessToken,
				isAuthenticated,
				isLoading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
}

export const useAuth = () => useContext(AuthContext);
