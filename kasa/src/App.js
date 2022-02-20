import { Routes, Route } from "react-router-dom";
import "./css/compiled/compiled.css";
import Home from "./components/home/home";
import About from "./components/about/about";
import ErrorPage from "./components/errorPage/errorPage";
import Navbar from "./components/shared/navbar";
import Footer from "./components/shared/footer";

function App() {
  return (
    <div className="relative min-h-screen dark:bg-gray900">
        <Navbar />
        <div className="pb-64">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </div>
        <Footer />
    </div>
  );
}

export default App;
