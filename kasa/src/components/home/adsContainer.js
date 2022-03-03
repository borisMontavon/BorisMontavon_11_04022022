import { useState, useEffect } from "react";
import { dataFetchHelper } from "../helpers/dataFetchHelper";
import Miniatures from "./miniatures";

function AdsContainer() {
    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const { housing } = await dataFetchHelper();

            setData(housing);
        };

        fetchData();
    }, []);

    const miniaturesItems = data.map((item, index) =>
        <Miniatures src={item.cover} title={item.title} link={item.id} key={index} />
    );

    return (
        <div className="mx-6 h-auto lg:mx-24 lg:bg-gray300 dark:lg:bg-gray800 lg:rounded-3xl lg:p-10 lg:grid lg:grid-cols-3 lg:gap-10">
            {miniaturesItems}
        </div>
    );
}

export default AdsContainer;
