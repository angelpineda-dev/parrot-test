/* Libraries */
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* Pages */
import Login from "./pages/Login/Login";
import Stores from "./pages/Stores/Stores";
import StoreDetails from "./pages/StoreDetails/StoreDetails";
import ProtectedRoutes from "./components/ProtectedRoutes/ProtectedRoutes";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />

				<Route element={<ProtectedRoutes />}>
					<Route path="/store-details/:id" element={<StoreDetails />} />
					<Route path="/" element={<Stores />} />
				</Route>

				<Route path="*" element={<h2>404 Not found.</h2>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
