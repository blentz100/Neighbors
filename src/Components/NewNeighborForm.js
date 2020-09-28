import React, {useState} from 'react';


export const NewNeighborForm = (props) =>{
	const [name, setName] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		console.log('name', name);
		if(name){
			console.log('***newNeighborForm.js: ');
			console.log('props', props);
			props.addNewNeighbor({name});
		}
		else{
			console.log('invalid input');
		}
	};

	return (
		<div>
			<br />	
			<h3> Add a New Neighbors Form </h3>
			<form onSubmit={onSubmit}>
				<input
					type='text'
					placeholder='New Unit Number'
					onChange={(event) => setName(event.target.value)}
					value={name}
				/>
			<button type='submit'>Add Neighbor</button>
			</form>
		</div>
	);
};
