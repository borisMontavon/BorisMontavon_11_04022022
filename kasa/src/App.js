import { Routes, Route } from "react-router-dom";
import "./css/compiled/compiled.css";
import Home from "./components/home/home";
import About from "./components/about/about";
import Footer from "./components/footer";

function App() {
  return (
    <div className="relative min-h-screen">
        <div className="pb-64">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
