import React, {useState} from 'react';
import neighborsApi from '../rest/NeighborsApi';

export const UpdateNeighborForm = (props) =>{
	const [notes, setName] = useState('');

	const onSubmit = async (event) => {
		event.preventDefault();
		console.log('notes', notes);
		console.log('setName', setName);
		if(notes){
			console.log('***UpdateNeighborForm.js: ');
			console.log('props', props);
			console.log('props.neighbor_id is: ' + props.neighbor_id);
			const existingNeighborData = await neighborsApi.getSingle(props.neighbor_id);
			console.log(' Need to figure out how to merge the next two lines');
			console.log('existingNeighborData', existingNeighborData);
			console.log('notes', notes);
			existingNeighborData.notes = notes;
			console.log('existingNeighborData', existingNeighborData);
			props.updateNeighbor(existingNeighborData, props.neighbor_id);
			setName('');
		}
		else{
			console.log('invalid input');
		}
	};

	return (
		<div>
			<br />	
			<h6> Update Neighbors Form </h6>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='Add Notes on Neighbor'
					onChange={(event) => setName(event.target.value)}
					value={notes}
				/>
			<button type='submit'>Update</button>
			</form>
		</div>
	);
};
