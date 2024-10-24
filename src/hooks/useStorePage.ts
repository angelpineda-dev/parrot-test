/* React */
import { useEffect } from "react";
/* Libraries */
import { useAxios } from "@/context/axios/AxiosProvider";
/* store */
import { useUserStore } from "@/store/useUserStore";
/* interfaces */
import { IMeResponse } from "@/interfaces";

export default function useStorePage() {
	const { axiosInstance } = useAxios();
	const setStore = useUserStore((state) => state.setStore);
	const stores = useUserStore((state) => state.stores);

	/**
	 * getMet
	 * fetch user data and assign it to zustand store
	 */
	async function getMe() {
		try {
			const response: IMeResponse = await axiosInstance.get("/v1/users/me");
			setStore(response);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getMe();
	}, []);

	return {
		stores,
	};
}
