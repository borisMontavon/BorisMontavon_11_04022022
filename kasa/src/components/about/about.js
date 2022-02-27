import { useState, useEffect } from "react";
import { dataFetchHelper } from "../helpers/dataFetchHelper";
import Banner from "../shared/banner";
import Dropdown from "../shared/dropdown";
import bannerImage from "../../assets/images/ireland.webp";

function About() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { dropdowns } = await dataFetchHelper();

            setData(dropdowns);
        };

        fetchData();
    }, []);

    const dropdownItems = data.map((item, index) => 
        <Dropdown title={item.title} text={item.text} key={index} />
    );

    return (
        <>
            <Banner
                src={bannerImage}
                alt="Test"
                heightClass="h-56"
            />
            <div className="mx-6 lg:mx-52">
                {dropdownItems}
            </div>
        </>
    );
}

export default About;
