export async function dataFetchHelper() {
    try {
        let response = await fetch(
            "/assets/resources.json",
            {
                headers: 
                {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                }
            }
        );
        
        return response.json();
    } catch (error) {
        console.error(error);
    }
}
