import {useState} from "react";
import _ from "lodash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";

function Dropdown({ title, text, list }) {
    // State hooks that allow the use of "State" in a functionnal component
    const [containerClass, setContainerClass] = useState("mb-4 lg:mb-8");
    const [iconClass, setIconClass] = useState("");
    const [dropdownClass, setDropdownClass] = useState("hidden");

    // Function throttled via lodash to handle spam click, it limits calls to the function at a certain rate (here every 1s)
    function displayDropdownContent() {
        if (dropdownClass === "hidden") {
            setContainerClass("mb-0 lg:mb-4");
            setIconClass("dropdown-icon-rotation");
            setDropdownClass("block");
        } else {
            setContainerClass("mb-4 lg:mb-8");
            setIconClass("");
            setDropdownClass("hidden");
        }
    }

    let content = [];

    if (list) {
        list.forEach((item, index) => {
            content.push(<p className="w-full text-sm lg:text-xl text-primary" key={index}>{item}</p>);
        });
    } else if (text) {
        content = <p className="w-full text-sm lg:text-xl text-primary">{text}</p>;
    }

    return (
        <div className={`h-auto relative ${containerClass}`}>
            <div onClick={_.throttle(displayDropdownContent, 1000)} className="relative z-20 bg-primary rounded-md flex justify-between items-center h-8 lg:h-12 cursor-pointer">
                <p className="text-white font-medium text-base lg:text-xl ml-3 lg:ml-5">{title}</p>
                <FontAwesomeIcon icon={faAngleDown} className={`text-white lg:text-xl mr-3 lg:mr-5 transition-all ${iconClass}`} />
            </div>
            <div className={`px-3 lg:px-6 pt-8 pb-4 bg-gray300 dark:bg-gray800 rounded-b-md w-full h-auto relative -top-4 z-10 ${dropdownClass}`}>
                {content}
            </div>
        </div>
    );
}

export default Dropdown;
