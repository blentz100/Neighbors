const ASSESSOR_ENDPOINT = 'https://mcassessor.maricopa.gov/search/Phoenix'

class MaricopaApi{

	/*This get request will get a single neighbor from the API */
	getSingle = async () => {
		try {
			console.log('inside try block for fetching a getSingle API call');

			const resp = await
				fetch(ASSESSOR_ENDPOINT, {
				 method: "GET",
				 headers: {
					"AUTHORIZATION": "c44ecb2f-9476-4b82-8ae4-83960b877be5",
					"Content-Type" : "application/json"
				} 
			});



			const data = await resp.json();
			console.log('here is the data back from the API:');
			console.log(data);
			return data;
		}catch(e){
			console.log('oops, looks like fetchNeighbors inside getSingle had an issue.',e);
		}
	}

}

export const maricopaApi = new MaricopaApi();

export default MaricopaApi;
