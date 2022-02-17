import { Routes, Route } from "react-router-dom";
import "./css/compiled/compiled.css";
import Home from "./components/home/home";
import About from "./components/about/about";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
