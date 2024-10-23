import { createContext, useContext, useState } from "react";
import axios, { AxiosInstance } from "axios";
import { useAuth } from "../auth/AuthProvider";

// Define the shape of the context
interface AxiosContext {
	axiosInstance: AxiosInstance;
	setAxiosToken: (value: string) => void;
}

const defaultAxiosIsnstance = axios.create({
	baseURL: import.meta.env.VITE_BASE_URL || "",
	headers: {
		"Content-Type": "application/json",
	},
	timeout: 5000,
});

// Create the context with an initial empty value
const AxiosContext = createContext<AxiosContext>({
	axiosInstance: defaultAxiosIsnstance,
	setAxiosToken: () => {},
});

interface AxiosProviderProps {
	children: React.ReactNode;
}

export default function AxiosProvider({ children }: AxiosProviderProps) {
	const axiosInstance = axios.create({
		baseURL: import.meta.env.VITE_BASE_URL || "",
		headers: {
			"Content-Type": "application/json",
			/* Authorization: `Bearer ${axiosToken}`, */
		},
		timeout: 5000,
	});

	axiosInstance.interceptors.response.use(
		function (response) {
			// Any status code that lie within the range of 2xx cause this function to trigger
			// Do something with response data

			return response?.data;
		},
		function (error) {
			// Any status codes that falls outside the range of 2xx cause this function to trigger
			// Do something with response error
			return Promise.reject(error);
		}
	);

	function setAxiosToken(value: string) {
		axiosInstance.defaults.headers.common["Authorization"] = `Bearer ${value}`;
	}

	return (
		<AxiosContext.Provider value={{ axiosInstance, setAxiosToken }}>
			{children}
		</AxiosContext.Provider>
	);
}

export const useAxios = () => useContext(AxiosContext);
