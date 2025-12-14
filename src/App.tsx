import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Gallery from "./pages/Gallery";
import Navbar from "./component/Navbar";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
    < Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        
      </Routes>
    </BrowserRouter>
  );
}

export default App;
