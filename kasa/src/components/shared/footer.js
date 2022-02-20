import logo from "../../assets/logo/LOGO-white.svg";
import Resources from "../../assets/resources.json";
import ThemeSwitch from "./darkModeSwitch";

function Footer() {
    const { footer } = Resources;

    return (
        <footer className="w-full h-52 absolute bottom-0 bg-black flex flex-col justify-center items-center">
            <img
                src={logo}
                alt="Logo Kasa"
                id="footer-logo"
            />
            <p className="text-white font-medium text-sm lg:text-xl mt-8">
                {footer.title}
            </p>
            <ThemeSwitch />
        </footer>
    );
}

export default Footer;
