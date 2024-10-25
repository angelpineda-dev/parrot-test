import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router";
import { toast } from "react-toastify";
import { List, ListItemButton, ListItemText, Switch } from "@mui/material";
import { useAxios } from "@/context/axios/AxiosProvider";
import { Product } from "@/interfaces/IProductResponse";
import { IProductUpdateResponse } from "@/interfaces/IProductUpdateResponse";
import useStorePage from "@/hooks/useStorePage";

import "./styles/productItem.css";
import { useUiContext } from "@/context/ui/UiProvider";

function getSwitchState(state: string) {
	if (state == "AVAILABLE") {
		return true;
	} else {
		return false;
	}
}

const ProductItem = ({ name, uuid, availability, imageUrl }: Product) => {
	const [switchState, setSwitchState] = useState(getSwitchState(availability));
	const { getProducts } = useStorePage();
	const { axiosInstance } = useAxios();
	const { id: storeID } = useParams();
	const refSwitch = useRef(false);
	const { setIsLoading } = useUiContext();

	async function updateProduct(uuid: string) {
		setIsLoading(true);
		try {
			const response: IProductUpdateResponse = await axiosInstance.put(
				`/v1/products/${uuid}/availability`,
				{
					availability: !switchState ? "AVAILABLE" : "UNAVAILABLE",
				}
			);

			if (response.status == "ok") {
				toast.success("Producto actualizado correctamente.");
				getProducts(storeID);
			}
		} catch (error) {
			toast.error(`Error al actualizar el producto: ${name}`);
		} finally {
			setIsLoading(false);
		}
	}

	useEffect(() => {
		if (!refSwitch.current) {
			refSwitch.current = true;
			return;
		}

		setSwitchState(getSwitchState(availability));
	}, [availability]);

	return (
		<List component="div" disablePadding>
			<ListItemButton sx={{ pl: 4 }} data-testid="product-list">
				<img src={imageUrl} alt={name} className="product-img" />
				<ListItemText primary={name} />
				<Switch
					checked={switchState}
					onChange={() => updateProduct(uuid)}
					data-testid="switch-element"
				/>
			</ListItemButton>
		</List>
	);
};

export default ProductItem;
