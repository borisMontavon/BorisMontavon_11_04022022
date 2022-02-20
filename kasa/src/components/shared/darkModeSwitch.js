import { useEffect } from "react";
import toggleThemes from "../helpers/themeHelper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";

function ThemeSwitch() {
    useEffect(() => {
        toggleThemes();
    }, []);

    return (
        <div className="flex absolute top-6 right-6">
            <FontAwesomeIcon icon={faSun} className="text-white" />
            <label className="switch mx-2 relative inline-block">
                <input id="modeToggle" type="checkbox" className="opacity-0 w-0 h-0" />
                <span className="slider round absolute cursor-pointer transition-all bg-gray500"></span>
            </label>
            <FontAwesomeIcon icon={faMoon} className="text-white" />
        </div>
    );
}

export default ThemeSwitch;
