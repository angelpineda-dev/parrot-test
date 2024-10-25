/* React */
import { useState } from "react";
/* Libraries */
import { Collapse, ListItemButton, ListItemText } from "@mui/material";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
/* Components */
import ProductItem from "../ProductItem/ProductItem";
import { ICategory } from "@/interfaces/models";
/* Interfaces */

const ProductSublist = ({ name, products }: ICategory) => {
	const [open, setOpen] = useState(false);

	const handleClick = () => {
		setOpen(!open);
	};
	return (
		<>
			<ListItemButton onClick={handleClick}>
				<ListItemText primary={`${name} (${products.length})`} />
				{open ? <ExpandLess /> : <ExpandMore />}
			</ListItemButton>
			<Collapse in={open} timeout="auto" unmountOnExit>
				{products.map((product) => (
					<ProductItem key={product.uuid} {...product} />
				))}
			</Collapse>
		</>
	);
};

export default ProductSublist;
