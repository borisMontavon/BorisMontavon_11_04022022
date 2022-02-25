import Miniatures from "./miniatures";
import {getMiniaturesData} from "../helpers/dataHelper";
import { dataFetchHelper } from "../helpers/dataFecthHelper";
import { useEffect } from "react";

function AdsContainer() {
    useEffect(() => {
        const data = dataFetchHelper();

        console.log(data);
    }, []);

    const data = getMiniaturesData();
    const miniaturesItems = data.map((item, index) =>
        <Miniatures src={item.src} title={item.title} key={index}/>
    );

    return (
        <div className="mx-6 h-auto lg:mx-24 lg:bg-gray300 dark:lg:bg-gray800 lg:rounded-3xl lg:p-10 lg:grid lg:grid-cols-3 lg:gap-10">
            {miniaturesItems}
        </div>
    );
}

export default AdsContainer;
