import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Pages/Home/Home";
import FarAwayTravelList from "./Pages/Far Away Travel List/FarAwayTravelList";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/Travel-List" element={<FarAwayTravelList />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
