const NEIGHBORS_ENDPOINT = "https://crudcrud.com/api/8395807bd67349e78e6b6993d2003e8f/unicorns";

class NeighborsApi{
	/*This get request will get the list of neighbors from API */
	get = async () => {
		try {
			console.log('inside try block for fetching neighbors');
			const resp = await fetch(NEIGHBORS_ENDPOINT);
			const data = await resp.json();
			//console.log('here is the data back from the API:');
			//console.log(data);
			return data;
		}catch(e){
			console.log('oops, looks like fetchNeighbors had an issue.',e);
		}
	}

	/*This delete request will delete a single neighbor */
	delete = async (neighbor_id) => {
		try {
			console.log('inside try block for deleting neighbors');
			console.log('neighbor_id is:', neighbor_id);
			const resp = await fetch(`${NEIGHBORS_ENDPOINT}/${neighbor_id}`, {
				 method: 'Delete',
				 headers :{
				  'Content-Type' : 'application/JSON'
				  }
			});
			const data = await resp.json();
			return data;
		}catch(e){
			console.log('oops, looks like delete had an issue.',e);
		}
	}
	


	/*This put request will add new rooms or delete rooms from our house*/
	put = async (house) => {
		try {
			console.log('inside try block for updating neighbors');
			console.log('NEIGHBORS_ENDPOINT: ' + NEIGHBORS_ENDPOINT);
			console.log('house._id: ' + house._id);
			console.log('house: ', house);
			const resp = await fetch(`${NEIGHBORS_ENDPOINT}/`, { 
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify(house)
			});
			console.log('body is: ' + JSON.stringify(house));
			console.log ('resp.json is' + resp.json());
			return await resp.json();
		} catch(e){
			console.log('oops, looks like we had an issue updating our house .',e);
		}
	}
}

export const neighborsApi = new NeighborsApi();

export default neighborsApi;
