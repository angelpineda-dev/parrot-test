/* React */
import { useEffect } from "react";
/* Libraries */
import { useAxios } from "@/context/axios/AxiosProvider";
/* store */
import { useUserStore } from "@/store/stores";
/* interfaces */
import { IMeResponse, IProductResponse } from "@/interfaces";

export default function useStorePage() {
	const { axiosInstance } = useAxios();
	const setStore = useUserStore((state) => state.setStore);
	const setProducts = useUserStore((state) => state.setProducts);
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

	async function getProducts(storeID?: string) {
		if (!storeID) {
			return;
		}
		try {
			const response: IProductResponse = await axiosInstance.get(
				`/v1/products/?store=${storeID}`
			);

			setProducts(response);
		} catch (error) {
			console.error(error);
		}
	}

	useEffect(() => {
		getMe();
	}, []);

	return {
		stores,
		getProducts,
	};
}
