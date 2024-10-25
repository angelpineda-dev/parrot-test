import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./context/auth/AuthProvider.tsx";
import AxiosProvider from "./context/axios/AxiosProvider.tsx";
import Compose from "./utils/Compose.tsx";
import CustomThemeProvider from "./context/theme/CustomThemeProvider.tsx";

createRoot(document.getElementById("root")!).render(
	<Compose components={[AxiosProvider, AuthProvider, CustomThemeProvider]}>
		<App />
	</Compose>
);
