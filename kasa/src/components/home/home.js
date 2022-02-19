import Banner from "../banner";
import bannerImage from "../../assets/images/scotland.webp";
import Resources from "../../assets/resources.json";

function Home() {
    const { homeBanner } = Resources;
    return (
        <>
            <Banner
                src={bannerImage}
                alt="Test"
                heightClass="h-28 lg:h-56"
                title={homeBanner.title}
            />
        </>
    );
}

export default Home;