import Banner from "../shared/banner";
import AdsContainer from "./adsContainer";
import bannerImage from "../../assets/images/scotland.webp";
import { dataFetchHelper } from "../helpers/dataFetchHelper";
import { useState, useEffect } from "react";


function Home() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { homeBanner } = await dataFetchHelper();

            setData(homeBanner);
        };

        fetchData();
    }, []);

    return (
        <>
            <Banner
                src={bannerImage}
                alt="Test"
                heightClass="h-28 lg:h-56"
                title={data.title}
            />
            <AdsContainer />
        </>
    );
}

export default Home;