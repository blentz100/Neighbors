import React, {useState} from 'react';

export const UpdateNeighborForm = (props) =>{
	const [notes, setName] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		console.log('notes', notes);
		if(notes){
			console.log('***UpdateNeighborForm.js: ');
			console.log('props', props);
			console.log('props.neighbor_id is: ' + props.neighbor_id);
			props.updateNeighbor({notes}, props.neighbor_id);
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
