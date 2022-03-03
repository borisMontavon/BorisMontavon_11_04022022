import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

function OwnerRatings({ rating, host }) {
    let stars = [];

    for (let i = 1; i <= 5; i++) {
        if (i <= rating) {
            stars.push(<FontAwesomeIcon icon={faStar} className="text-primary mr-3 lg:text-xl" key={i} />);
        } else {
            stars.push(<FontAwesomeIcon icon={faStar} className="text-gray400 dark:text-gray600 mr-3 lg:text-xl" key={i} />);
        }
    }

    return (
        <div className="px-6 lg:pr-24 lg:pl-0 mb-4 flex justify-between items-center lg:flex-col-reverse lg:justify-between lg:h-full">
            <div className="lg:mb-2">
                {stars}
            </div>
            <div className="flex items-center">
                <p className="font-medium text-primary text-sm lg:text-lg text-right w-24">{host.name}</p>
                <img
                    src={host.picture}
                    alt={host.name}
                    className="rounded-full w-8 h-8 lg:w-16 lg:h-16 ml-2 lg:ml-4"
                />
            </div>
        </div>
    );
}

export default OwnerRatings;
