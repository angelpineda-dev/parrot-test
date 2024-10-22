/* Libraries */
import { BrowserRouter, Route, Routes } from "react-router-dom";
/* Pages */
import Login from "./pages/Login/Login";
import Stores from "./pages/Stores/Stores";
import StoreDetails from "./pages/StoreDetails/StoreDetails";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/login" element={<Login />} />
				<Route path="/store-details/:id" element={<StoreDetails />} />

				<Route path="/" element={<Stores />} />

				<Route path="*" element={<h2>404 Not found.</h2>} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
