import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function CarouselArrows({ arrowsClass, icon, callback }) {
    return (
        <span
            onClick={callback}
            className={`rounded-full absolute transition-all lg:hover:bg-primary top-2/4 -translate-y-1/2 bg-primary-opac px-3.5 py-2 lg:px-4 lg:py-2.5 cursor-pointer lg:flex lg:items-center ${arrowsClass}`}
        >
            <FontAwesomeIcon icon={icon} className="text-white lg:text-xl" />
        </span>
    );
}

export default CarouselArrows;
