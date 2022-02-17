import { Link } from 'react-router-dom';
import logo from "../assets/logo/LOGO.svg";

function Navbar() {
    return (
        <nav className="w-full p-6 md:py-10 md:px-14 lg:px-24 bg-white">
            <div className="flex justify-between items-center">
                <img
                    src={logo}
                    alt="Logo Kasa"
                    id="logo"
                />
                <div>
                    <div className="uppercase font-medium text-primary text-base md:text-xl">
                        <Link to="/" className="pr-5 md:pr-10 lg:pr-16 underline">Accueil</Link>
                        <Link to="/about">À Propos</Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
