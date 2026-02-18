import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";

import Opening from "./pages/Opening";
import Home from "./pages/Home";
import About from "./pages/AboutUs";
import Team from "./pages/Team";
import Events from "./pages/Events";
import Projects from "./pages/Projects";
import AboutMsa from "./pages/AboutMSA";
import Contact from "./pages/ContactUs";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Opening />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/team" element={<Team />} />
        <Route path="/events" element={<Events />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about-mlsa" element={<AboutMsa />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
