import { useState, useEffect, useRef } from "react";
import { List, ListItemButton, ListItemText, Switch } from "@mui/material";
import { Product } from "@/interfaces/IProductResponse";
import { useAxios } from "@/context/axios/AxiosProvider";
import { useParams } from "react-router";
import { IProductUpdateResponse } from "@/interfaces/IProductUpdateResponse";
import useStorePage from "@/hooks/useStorePage";

function getSwitchState(state: string) {
	if (state == "AVAILABLE") {
		return true;
	} else {
		return false;
	}
}

const ProductItem = ({ name, uuid, availability }: Product) => {
	const [switchState, setSwitchState] = useState(getSwitchState(availability));
	const { getProducts } = useStorePage();
	const { axiosInstance } = useAxios();
	const { id: storeID } = useParams();
	const switchRef = useRef(false);

	const handleSwitch = () => {
		setSwitchState(!switchState);
	};

	async function updateProduct(uuid: string, value: boolean) {
		const response: IProductUpdateResponse = await axiosInstance.put(
			`/v1/products/${uuid}/availability`,
			{
				availability: value ? "AVAILABLE" : "UNAVAILABLE",
			}
		);

		if (response.status == "ok" && storeID) {
			getProducts(storeID);
		}
	}

	useEffect(() => {
		/* avois first render petition */
		if (!switchRef.current) {
			switchRef.current = true;
			return;
		}

		updateProduct(uuid, switchState);
	}, [switchState]);

	return (
		<List component="div" disablePadding>
			<ListItemButton sx={{ pl: 4 }}>
				<ListItemText primary={name} />
				<Switch checked={switchState} onChange={handleSwitch} />
			</ListItemButton>
		</List>
	);
};

export default ProductItem;
