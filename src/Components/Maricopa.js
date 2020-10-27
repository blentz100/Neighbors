import React from 'react';
import {maricopaApi} from '../rest/MaricopaApi';

/* https://react-table.tanstack.com/docs/quick-start */


export const Maricopa = () => {

	maricopaApi.getSingle();


	return ( 
		<div >
			<h2> Maricopa </h2>
			<br/>
		</div>
	);
}
export default Maricopa;

