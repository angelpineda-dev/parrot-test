import {
	Container,
	List,
	ListItemButton,
	ListItemIcon,
	ListItemText,
	Typography,
} from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";
import { useNavigate } from "react-router";
import useStorePage from "../../hooks/useStorePage";

const Stores = () => {
	const { stores, getProducts } = useStorePage();
	const navigate = useNavigate();

	function handleRedirect(storeID: string) {
		navigate(`/store-details/${storeID}`);
		getProducts(storeID);
	}

	return (
		<Container>
			<Typography variant="h2" component="h1" textAlign="center" my={4}>
				My Stores
			</Typography>

			<List
				sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
				component="nav"
			>
				{stores.map((store) => (
					<ListItemButton
						onClick={() => handleRedirect(store.uuid)}
						key={store.uuid}
					>
						<ListItemIcon sx={{ color: store.config.brandColor }}>
							<StorefrontIcon />
						</ListItemIcon>
						<ListItemText primary={store.name} />
					</ListItemButton>
				))}
			</List>
		</Container>
	);
};

export default Stores;
