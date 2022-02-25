export async function dataFetchHelper() {
    try {
        let response = fetch("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json", {
            mode: 'cors',
            headers: { 
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*'
            }
        });
        let responseJson = await response.json();

        console.log("response", responseJson);

        return responseJson;
    } catch (error) {
        console.error(error);
    }
}

// return fetch("https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/Front-End+V2/P9+React+1/logements.json")
//     .then((response) => response.json())
//     .then((responseJson) => {
//         return responseJson;
//     })
//     .catch((error) => {
//         console.error(error);
//     });
