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
import { useUserStore } from "@/store/stores";
import { useEffect } from "react";

const Stores = () => {
	const navigate = useNavigate();
	const { getMe } = useStorePage();
	const stores = useUserStore((state) => state.stores);

	function handleRedirect(storeID: string) {
		navigate(`/store-details/${storeID}`);
	}

	useEffect(() => {
		getMe();
	}, []);

	return (
		<Container>
			<Typography
				variant="h2"
				component="h1"
				textAlign="center"
				my={4}
				color="primary"
			>
				My Stores
			</Typography>

			<List
				sx={{
					width: "100%",
					maxWidth: "800px",
					margin: "0 auto",
				}}
				component="nav"
			>
				{stores.map((store) => (
					<ListItemButton
						onClick={() => handleRedirect(store.uuid)}
						divider
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
