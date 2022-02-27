import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { dataFetchHelper } from "../helpers/dataFetchHelper";
import Carousel from "./carousel";
import Tags from "./tags";
import OwnerRatings from "./ownerRatings";
import Dropdown from "../shared/dropdown";

function HousingPage() {
    const { id } = useParams();

    const [data, setData] = useState({"host": {}, "tags": [], "equipments": [], "description": "", "pictures": []});

    useEffect(() => {
        async function fetchData() {
            const { housing } = await dataFetchHelper();

            const housingData = housing.filter((item) => item.id === id);

            if (housingData.length) {
                setData(housingData[0]);
            }
        };

        fetchData();
    }, [id]);

    const tags = data.tags.map((item, index) => 
        <Tags tagName={item} key={index} />
    );

    return (
        <>
            <Carousel pictures={data.pictures} title={data.title} />
            <div className="lg:flex lg:mb-4 lg:justify-between lg:w-full">
                <div className="px-6 lg:pl-24 lg:pr-0 lg:w-9/12">
                    <h2 className="font-medium text-primary text-lg lg:text-2xl mb-4 lg:mb-0">
                        {data.title}
                    </h2>
                    <h3 className="font-medium text-primary text-base lg:text-lg mb-6">
                        {data.location}
                    </h3>
                    <div className="mb-2 flex flex-wrap">
                        {tags}
                    </div>
                </div>
                <div>
                    <OwnerRatings rating={data.rating} host={data.host} />
                </div>
            </div>
            <div className="mx-6 lg:mx-24 lg:grid lg:grid-cols-2 lg:gap-10">
                <Dropdown title={"Description"} text={data.description} />
                <Dropdown title={"Équipements"} list={data.equipments} />
            </div>
        </>
    );
}

export default HousingPage;
