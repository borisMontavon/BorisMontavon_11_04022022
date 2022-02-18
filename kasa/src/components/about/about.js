import Navbar from "../navbar";
import Banner from "../banner";
import Dropdown from "../dropdown";
import bannerImage from "../../assets/images/ireland.webp";
import Resources from "../../assets/resources.json";

function About() {
    const { dropdowns } = Resources;
    const dropdownItems = dropdowns.map((item, index) => 
        <Dropdown title={item.title} text={item.text} key={index} />
    );

    return (
        <>
            <Navbar />
            <Banner
                src={bannerImage}
                alt="Test"
                heightClass="h-56"
            />
            {dropdownItems}
        </>
    );
}

export default About;
