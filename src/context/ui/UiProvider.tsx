import { createContext, useContext } from "react";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const UiContext = createContext({});

interface UiProviderProps {
	children: React.ReactNode;
}

export default function UiProvider({ children }: UiProviderProps) {
	return (
		<UiContext.Provider value={{}}>
			{children}
			<ToastContainer />
		</UiContext.Provider>
	);
}

export const useUiContext = () => useContext(UiContext);
