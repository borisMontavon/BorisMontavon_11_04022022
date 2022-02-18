import {useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

function Dropdown(props) {
    const { title, text } = props;
    const [iconClass, setIconClass] = useState("");
    const [dropdownClass, setDropdownClass] = useState("hidden");

    function displayDropdownContent() {
        if (dropdownClass === "hidden") {
            setIconClass("dropdown-icon-rotation");
            setDropdownClass("block");
        } else {
            setIconClass("");
            setDropdownClass("hidden");
        }
    }

    return (
        <div className="mx-6 mb-6 relative">
            <div onClick={displayDropdownContent} className="relative z-20 bg-primary rounded-md flex justify-between items-center h-8 md:h-12">
                <p className="text-white font-medium text-base ml-3">{title}</p>
                <FontAwesomeIcon icon={faAngleDown} className={`text-white mr-3 transition-all ${iconClass}`} />
            </div>
            <div className={`px-3 pt-8 pb-4 bg-gray300 rounded-b-md w-full h-auto relative top-4 z-10 ${dropdownClass}`}>
                <p className="w-full text-sm text-primary">{text}</p>
            </div>
        </div>
    );
}

export default Dropdown;
