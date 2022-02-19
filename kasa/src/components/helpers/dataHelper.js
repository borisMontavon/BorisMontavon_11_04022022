import Resources from "../../assets/resources.json";

export function getMiniaturesData() {
    const { housing } = Resources;
    console.log(housing);

    return housing.map((item) => {
        return {"src": item.cover, "title": item.title};
    });
}