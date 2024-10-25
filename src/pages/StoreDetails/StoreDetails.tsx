import { Container, List, Typography } from "@mui/material";
import ProductSublist from "./components/ProductSublist/ProductSublist";
import { useUserStore } from "@/store/stores";

const StoreDetails = () => {
	const categories = useUserStore((state) => state.categories);
	return (
		<Container>
			<Typography variant="h2" component="h1" textAlign="center" my={4}>
				store_name
			</Typography>

			<List
				sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
				component="nav"
			>
				{categories.map((category) => (
					<ProductSublist key={category.uuid} {...category} />
				))}
			</List>
		</Container>
	);
};

export default StoreDetails;
