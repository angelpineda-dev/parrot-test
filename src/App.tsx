/* Libraries */
import { BrowserRouter, Route, Routes } from "react-router-dom"
/* Pages */
import Login from "./pages/Login/Login"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<h2>Home</h2>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
