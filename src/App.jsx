import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import Projects from "./pages/Projects";
import Manufacturing from "./pages/Manufacturing";
import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ElectricGuitar from "./pages/ElectricGuitar";
import PickupWinder from "./pages/PickupWinder";
import Footer from "./components/Footer";


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/manufacturing" element={<Manufacturing />} />
        <Route path="/electric-guitar" element={<ElectricGuitar />} />
        <Route path="/pickup-winder" element={<PickupWinder />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
