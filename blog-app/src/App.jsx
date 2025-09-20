import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Contact from "./Contact"; 

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/home">Home</Link>{" "}
        <Link to="/about">About</Link>{" "}
        <Link to="/contact">Contact</Link>
      </nav>

      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} /> {/* form shows here */}
      </Routes>
    </BrowserRouter>
  );
}




<div style={{ textAlign: "center", marginTop: "35px" }}>
  <Routes>
    <Route path="/home" element={<Home />} />
    <Route path="/about" element={<About />} />
    <Route path="/contact" element={<Contact />} />
  </Routes>
</div>




export default App;