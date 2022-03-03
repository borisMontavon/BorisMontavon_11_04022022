import { Link } from "react-router-dom";

function Miniatures(props) {
    const { src, title, link } = props;

    return (
        <div className="relative">
            <Link to={`/housing/${link}`} className="miniature">
                <img
                    src={src}
                    alt={title}
                    className="rounded-md w-full h-64 lg:h-80 mb-6 lg:mb-0"
                />
                <div className="absolute bottom-0 left-0 px-4 py-2 rounded-b-md bg-primary-opac w-full transition-all miniature-title">
                    <h4 className="text-white font-medium text-lg">
                        {title}
                    </h4>
                </div>
            </Link>
        </div>
    );
}

export default Miniatures;
