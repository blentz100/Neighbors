import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {UpdateNeighborForm} from './UpdateNeighborForm';

export const Neighbor = (props) => {
	console.log('**********Neighbor.js, props is: ', props);
	console.log(props);

	const neighbor = props;
	const {removeNeighbor} = props;

	console.log('neighbor is: ' + neighbor);
	console.log('neighbor.name is: ' + neighbor.name.name);

	const deleteNeighbor = (neighborId) => {
		console.log('neighborId is: ', neighborId);
		removeNeighbor(neighborId);				
	}
	return ( 
		<div>
			<br />
			<Card style ={{width: '38rem'}}>
				<Card.Body>

					<Card.Title>Unit Number: {neighbor.name.number} </Card.Title>
					<Card.Text>Name of Owner: {neighbor.name.name}</Card.Text>
						<Card.Text>Notes: {neighbor.name.notes}
					</Card.Text>
					<UpdateNeighborForm updateNeighbor={props.updateNeighbor} neighbor_id={neighbor.name._id} />
					<br/>
					<Button href ="https://www.zillow.com/b/805-n-4th-ave-phoenix-az-5YNBmJ/"variant="primary">Zillow</Button>
				</Card.Body>
					<Button variant = "danger" onClick={(event) => deleteNeighbor(neighbor.name._id)}>Delete Neighbor
					</Button>
			</Card>
		</div>
	);
}
export default Neighbor;
