import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { AuthProvider } from "./context/auth/AuthProvider.tsx";
import AxiosProvider from "./context/axios/AxiosProvider.tsx";

createRoot(document.getElementById("root")!).render(
	<AxiosProvider>
		<AuthProvider>
			<App />
		</AuthProvider>
	</AxiosProvider>
);
