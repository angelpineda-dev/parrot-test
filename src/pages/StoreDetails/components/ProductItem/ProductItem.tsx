import { useState, useEffect } from "react";
import { List, ListItemButton, ListItemText, Switch } from "@mui/material";
import { Product } from "../../../../interfaces/models";

const ProductItem = ({ name }: Product) => {
	const [switchState, setSwitchState] = useState(false);

	const handleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
		setSwitchState(!switchState);
	};

	useEffect(() => {
		// petition
	}, [switchState]);

	return (
		<List component="div" disablePadding>
			<ListItemButton sx={{ pl: 4 }}>
				<ListItemText primary={name} />
				<Switch value={switchState} onChange={(e) => handleSwitch(e)} />
			</ListItemButton>
		</List>
	);
};

export default ProductItem;
