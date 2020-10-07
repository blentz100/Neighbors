import React, {useState} from 'react';

export const NewNeighborForm = (props) =>{
	const [name, setName] = useState('');
	const [number, setNumber] = useState('');

	const onSubmit = (event) => {
		event.preventDefault();
		console.log('name', name);
		if(name){
			console.log('***newNeighborForm.js: ');
			console.log('props', props);
			props.addNewNeighbor({name,number});
			setName('');
			setNumber('');
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
					placeholder='Name of Owner'
					onChange={(event) => setName(event.target.value)}
					value={name}
				/>
				<br/>
				<input
					type='number'
					placeholder='Unit Number'
					onChange={(event) => setNumber(event.target.value)}
					value={number}
				/>
				<br/>
			<button type='submit'>Add Neighbor</button>
			</form>
		</div>
	);
};
