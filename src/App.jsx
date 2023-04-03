import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/header";
import Diracter from "./components/diracter";
import Location from "./components/location";
import Episode from "./components/episode";

function App() {
  const [count, setCount] = useState(0);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/diracter" element={<Diracter />} />
        <Route path="/location" element={<Location />} />
        <Route path="/episode" element={<Episode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
