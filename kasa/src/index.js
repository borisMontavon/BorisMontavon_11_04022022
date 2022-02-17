import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./css/compiled/compiled.css";
import App from "./App";

ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
