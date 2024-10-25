import { useParams } from "react-router";
import { Container, List, Typography } from "@mui/material";
import { useUserStore } from "@/store/stores";
import ProductSublist from "./components/ProductSublist/ProductSublist";
import { Store } from "@/interfaces/IMeResponse";
import useStorePage from "@/hooks/useStorePage";
import { useEffect } from "react";

const StoreDetails = () => {
	const { id: storeID } = useParams();
	const categories = useUserStore((state) => state.categories);
	const stores: Store[] = useUserStore((state) => state.stores);
	const { getProducts, getMe } = useStorePage();

	/**
	 * getStoreName
	 * search store by uuid and returns store name
	 * @return {string}
	 */
	function getStoreName() {
		const store = stores.find((store) => store.uuid == storeID);

		return store?.name || "Store Name";
	}

	useEffect(() => {
		getProducts(storeID);
	}, [storeID]);

	useEffect(() => {
		if (stores.length < 1) {
			getMe();
		}
	}, [stores]);

	return (
		<Container>
			<Typography
				variant="h2"
				component="h1"
				textAlign="center"
				my={4}
				color="primary"
			>
				{getStoreName()}
			</Typography>

			<List
				sx={{ width: "100%", maxWidth: "800px", margin: "0 auto" }}
				data-testid="store-detail-item"
			>
				{categories.map((category) => (
					<ProductSublist key={category.uuid} {...category} />
				))}
			</List>
		</Container>
	);
};

export default StoreDetails;
