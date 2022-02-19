import Miniatures from "./miniatures";
import {getMiniaturesData} from "../helpers/dataHelper";

function AdsContainer() {
    const data = getMiniaturesData();
    const miniaturesItems = data.map((item, index) =>
        <Miniatures src={item.src} title={item.title} key={index}/>
    );

    return (
        <div className="mx-6 h-auto lg:mx-24 lg:bg-gray300 lg:rounded-3xl lg:p-10 lg:grid lg:grid-cols-3 lg:gap-10">
            {miniaturesItems}
        </div>
    );
}

export default AdsContainer;
