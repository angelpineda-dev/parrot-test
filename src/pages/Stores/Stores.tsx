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

const Stores = () => {
	const navigate = useNavigate();

	function handleRedirect(storeID: number) {
		navigate(`/store-details/${storeID}`);
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
				<ListItemButton onClick={() => handleRedirect(0)}>
					<ListItemIcon>
						<StorefrontIcon />
					</ListItemIcon>
					<ListItemText primary="First Store" />
				</ListItemButton>
			</List>
		</Container>
	);
};

export default Stores;
