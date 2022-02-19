import { Link } from "react-router-dom";
import Resources from "../../assets/resources.json";

function ErrorPage() {
    const { errorPage } = Resources;

    return (
        <div className="flex flex-col justify-center items-center mt-20 lg:mt-0">
            <span className="font-bold text-primary text-4xl lg:text-5xl">404</span>
            <p className="font-medium text-primary text-lg lg:text-2xl text-center">
                {errorPage.title}
            </p>
            <Link to="/" className="font-medium text-primary underline text-base lg:text-lg mt-32">
                {errorPage.link}
            </Link>
        </div>
    );
}

export default ErrorPage;
