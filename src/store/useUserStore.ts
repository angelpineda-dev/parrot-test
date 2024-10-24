import { create } from "zustand";
import { IMeResponse } from "../interfaces";
import { Store } from "../interfaces/IMeResponse";

interface IUserStore {
	user: object;
	stores: Store[];
	products: [];
	setStore: (data: IMeResponse) => void;
}

export const useUserStore = create<IUserStore>((set) => ({
	user: {},
	stores: [],
	products: [],
	setStore: (data) => {
		const { result } = data;
		const { stores, ...user } = result;

		set({
			stores,
			user,
		});
	},
}));
