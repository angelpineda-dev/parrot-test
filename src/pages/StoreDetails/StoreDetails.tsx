import { Container, List, Typography } from "@mui/material";
import ProductSublist from "./components/ProductSublist/ProductSublist";
import { Category } from "../../interfaces/models/ProductItem";

const DATA: Category[] = [
	{
		id: 1,
		name: "Drinks",
		products: [
			{
				id: 1,
				name: "Beer",
				price: 10.0,
				available: true,
				image: {
					url: "https://placehold.co/600x400",
					title: "place image",
				},
			},
			{
				id: 2,
				name: "Soda",
				price: 5.0,
				available: false,
				image: {
					url: "https://placehold.co/600x400",
					title: "place image",
				},
			},
		],
	},
	{
		id: 2,
		name: "Food",
		products: [
			{
				id: 1,
				name: "Sandwich",
				price: 10.0,
				available: true,
				image: {
					url: "https://placehold.co/600x400",
					title: "place image",
				},
			},
			{
				id: 2,
				name: "Bread",
				price: 5.0,
				available: false,
				image: {
					url: "https://placehold.co/600x400",
					title: "place image",
				},
			},
		],
	},
	{
		id: 3,
		name: "Desserts",
		products: [
			{
				id: 1,
				name: "Cake",
				price: 10.0,
				available: true,
				image: {
					url: "https://placehold.co/600x400",
					title: "place image",
				},
			},
			{
				id: 2,
				name: "Flan",
				price: 5.0,
				available: false,
				image: {
					url: "https://placehold.co/600x400",
					title: "place image",
				},
			},
		],
	},
];

const StoreDetails = () => {
	return (
		<Container>
			<Typography variant="h2" component="h1" textAlign="center" my={4}>
				store_name
			</Typography>

			<List
				sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
				component="nav"
			>
				{DATA.map((category) => (
					<ProductSublist key={category.id} {...category} />
				))}
			</List>
		</Container>
	);
};

export default StoreDetails;
