import logo from "../../assets/logo/LOGO-white.svg";
import ThemeSwitch from "./darkModeSwitch";
import { dataFetchHelper } from "../helpers/dataFetchHelper";
import { useState, useEffect } from "react";

function Footer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { footer } = await dataFetchHelper();

            setData(footer);
        };

        fetchData();
    }, []);

    return (
        <footer className="w-full h-52 absolute bottom-0 bg-black flex flex-col justify-center items-center">
            <img
                src={logo}
                alt="Logo Kasa"
                id="footer-logo"
            />
            <p className="text-white font-medium text-sm lg:text-xl mt-8">
                {data.title}
            </p>
            <ThemeSwitch />
        </footer>
    );
}

export default Footer;
