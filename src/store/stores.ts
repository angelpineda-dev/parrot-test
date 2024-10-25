/* Libraries */
import { create } from "zustand";
import { devtools } from "zustand/middleware";
/* interfaces */
import { ICategory } from "@/interfaces/models";
import { IMeResponse, IProductResponse } from "@/interfaces";
import { Product } from "@/interfaces/IProductResponse";
import { Store } from "@/interfaces/IMeResponse";

interface user {
	uuid: string;
	username: string;
	email: string;
}

interface IUserStore {
	user: user;
	stores: Store[];
	products: Product[];
	categories: ICategory[];
	setStore: (data: IMeResponse) => void;
	setProducts: (data: IProductResponse) => void;
}

export const useUserStore = create<IUserStore>()(
	devtools((set) => ({
		user: {
			uuid: "",
			username: "",
			email: "",
		},
		stores: [],
		products: [],
		categories: [],
		setStore: (data) => {
			const { stores, ...user } = data.result;

			set({
				stores,
				user,
			});
		},
		setProducts: (data) => {
			const products = data.results;
			const categories: ICategory[] = [];

			products.forEach((product) => {
				const categoryName = product.category.name;

				if (categories.some((category) => category.name == categoryName)) {
					categories.map((category) => {
						if (category.name == categoryName) {
							category.products.push(product);
						}
					});
				} else {
					const products = [];
					products.push(product);

					categories.push({ ...product.category, products });
				}
			});

			set({ products, categories });
		},
	}))
);
