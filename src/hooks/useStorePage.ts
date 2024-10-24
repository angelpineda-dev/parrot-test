import { useEffect } from "react";
import { useAxios } from "../context/axios/AxiosProvider";
import { useUserStore } from "../store/useUserStore";
import { IMeResponse } from "../interfaces";

export default function useStorePage() {
	const { axiosInstance } = useAxios();
	const setStore = useUserStore((state) => state.setStore);
	const stores = useUserStore((state) => state.stores);

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
