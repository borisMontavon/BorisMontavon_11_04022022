import { useState } from "react";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import CarouselArrows from "./carouselArrows";

function Carousel({ pictures, title }) {
    const styles = {"objectFit": "cover", "objectPosition": "center"};
    const [imgSource, setImgSource] = useState("");
    const [imgIndex, setImgIndex] = useState(0);

    // When the page loaded, check if the state of "imgSource" is well implemented
    if (pictures.length && !imgSource) {
        setImgSource(pictures[0]);
    }

    function onPreviousImg(e) {
        e.preventDefault();

        let index;

        if (imgIndex === 0) {
            setImgIndex(pictures.length - 1);
            index = pictures.length - 1;
        } else {
            setImgIndex(imgIndex - 1);
            index = imgIndex - 1;
        }

        setImgSource(pictures[index]);
    }

    function onNextImg(e) {
        e.preventDefault();

        let index;

        if (imgIndex === pictures.length - 1) {
            setImgIndex(0);
            index = 0;
        } else {
            setImgIndex(imgIndex + 1);
            index = imgIndex + 1;
        }

        setImgSource(pictures[index]);
    }

    return (
        <div className="w-full h-64 lg:h-96 px-6 lg:px-24 mb-4 relative">
            { pictures.length > 1 ?
                <CarouselArrows arrowsClass="left-8 lg:left-28" icon={faChevronLeft} callback={onPreviousImg} /> :
                null
            }
            <img
                src={imgSource}
                alt={title}
                className="rounded-md lg:rounded-3xl h-full m-auto"
                style={styles}
            />
            { pictures.length > 1 ?
                <CarouselArrows arrowsClass="right-8 lg:right-28" icon={faChevronRight} callback={onNextImg} /> :
                null
            }
            <span className="bg-primary-opac text-white text-sm lg:text-lg absolute bottom-2 left-2/4 -translate-x-1/2 px-2 py-1 rounded-md">
                {`${imgIndex + 1}/${pictures.length}`}
            </span>
        </div>
    );
}

export default Carousel;
