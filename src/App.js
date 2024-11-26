import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Navbar/NavBar";
import Home from "./Pages/Home/Home";
import FarAwayTravelList from "./Pages/Far Away Travel List/FarAwayTravelList";
import Accordion from "./Components/Accordion/Accordion";
import TipCalc from "./Components/TipCalculator/TipCalc";
import EatAndSplit from "./Components/EatAndSplit/EatAndSplit";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Travel-List" element={<FarAwayTravelList />} />
        <Route path="/Accordion" element={<Accordion />} />
        <Route path="/Tip-Calculator" element={<TipCalc />} />
        <Route path="/EatAndSplit" element={<EatAndSplit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
