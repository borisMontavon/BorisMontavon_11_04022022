import { NavLink } from 'react-router-dom';
import logo from "../assets/logo/LOGO-primary.svg";

function Navbar() {
    return (
        <nav className="w-full p-6 lg:py-10 lg:px-24 bg-white">
            <div className="flex justify-between items-center">
                <img
                    src={logo}
                    alt="Logo Kasa"
                    id="navbar-logo"
                />
                <div>
                    <div className="uppercase font-medium text-primary text-base lg:text-xl">
                        <NavLink to="/" className={({isActive}) => "pr-5 lg:pr-10 lg:pr-16" + (!isActive ? "" : " underline")}>Accueil</NavLink>
                        <NavLink to="/about" className={({isActive}) => !isActive ? "" : "underline"}>À Propos</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;
