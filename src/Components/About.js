import React from 'react';
import checklist from '../images/checklist.jpg'
import Table from 'react-bootstrap/Table';

export const About = () => {
	return ( 
		<div >
			<h2>About This Project</h2>
			<img src={checklist} alt='checklist' height="450"/>
			<div>
				<p>	Using an online API of your choice, or multiple APIs (or if no API
				can be found, using an array for in-memory storage is okay as well),
				create a React project of your choice. You will be working on this
				for the next three weeks.</p>
				
				Project must meet the following criteria:
			</div>
			<Table striped border hover bordered>
				<thead>
					<tr>
						<th>Criteria</th>
						<th>Status</th>
					</tr>
				</thead>	
				<tbody>
					<tr>
						<td>Use React Router and have at least 3 pages</td>
						<td>X</td>
					</tr>
					<tr>
						<td>Use React Bootstrap or an alternative styling library</td>
						<td>X</td>
					</tr>
					<tr>
						<td>Contain at least 10 <a href="https://reactjs.org/docs/components-and-props.html"> 
							components</a></td>
						<td>X</td>
					</tr>
					<tr>
						<td>Allow for all CRUD operations</td>
						<td>X</td>
					</tr>
				</tbody>
			</Table>
		</div>
	);
}
export default About;
