const ASSESSOR_ENDPOINT = 'https://api.mcassessor.maricopa.gov/api/search/805 n 4th ave 506'

class MaricopaApi{

	/*This get request will get a single neighbor from the API */
	getSingle = async () => {
		try {
			console.log('inside try block for fetching a getSingle API call');

			const resp = await
				fetch(ASSESSOR_ENDPOINT, {
				 method: 'GET',
				 headers :{
					  'X-MC-AUTH': 'c44ecb2f94764b828ae483960b877be5',
				  'Content-Type' : 'application/JSON'
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
