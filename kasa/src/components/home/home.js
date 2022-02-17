import Navbar from "../navbar";
import Banner from "../banner";
import bannerImage from "../../assets/images/test.jpg";

function Home() {
    return (
        <>
            <Navbar />
            <Banner
                src={bannerImage}
                alt="Test"
                heightClass="h-28 md:h-56"
                title="Chez vous, partout et ailleurs"
            />
        </>
    );
}

export default Home;