import logo from "../assets/logo/LOGO-white.svg";

function Footer() {
    return (
        <footer className="w-full h-52 absolute bottom-0 bg-black flex flex-col justify-center items-center">
            <img
                src={logo}
                alt="Logo Kasa"
                id="footer-logo"
            />
            <p className="text-white font-medium text-sm lg:text-xl mt-8">© 2020 Kasa. All rights reserved</p>
        </footer>
    );
}

export default Footer;
