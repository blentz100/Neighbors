import React from 'react';
import neighborsApi from '../rest/NeighborsApi';
import Neighbor from '../Components/Neighbor';
import {NewNeighborForm} from './NewNeighborForm';

export class NeighborsList extends React.Component{

	state = {
		neighbors: []
	};

	componentDidMount(){
		this.fetchNeighbors();
	}

	fetchNeighbors = async() => {
		const neighbors = await neighborsApi.get();
		this.setState({neighbors});
	};

	updateNeighbors = async(updateNeighbors) => {
		console.log('*****got inside updateNeighbors!');
		await neighborsApi.put(updateNeighbors);
		this.fetchNeighbors();
	}
	
	removeNeighbor = async(neighbor_id) => {
		await neighborsApi.delete(neighbor_id);	
		this.fetchNeighbors();
	}
	addNewNeighbor = (neighbor) =>{
		console.log('Inside Neighbor.js: addNewNeighbor function');
		console.log('neighbor', neighbor);
		this.updateNeighbors({ ...neighbor});
	}

	render(){
		console.log('inside NeighborsList.js, inside render method, this.state.neighbors');
		console.log(this.state.neighbors);
		return(
			<div>
				<h1>Inside NeighborsList.js</h1>
				{this.state.neighbors.map((neighbor) => (
					<Neighbor name={neighbor}
								updateNeighbors={this.updateNeighbors}
								removeNeighbor={this.removeNeighbor}
					/>
				))}
				<NewNeighborForm addNewNeighbor={this.addNewNeighbor}/> 
				<br />
				<br />

			</div>
		)
	};
}
export default NeighborsList;
