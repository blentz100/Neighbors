import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import NeighborsList from './Components/NeighborsList';
import Table from 'react-bootstrap/Table';
import computer from './images/computer-screen.jpg'

// Good Resource for React Bootstrap
// https://react-bootstrap.github.io/components/alerts

import {
	BrowserRouter as Router,
	Switch,
	Route,
	Link
} from 'react-router-dom';

// A single page application is a single page that changes the view
// to make it seem like there are multiple changes
// We will be creating a few functional components to form the basis
// of this single page application
// More details on function components: https://reactjs.org/docs/components-and-props.html#function-and-class-components
//
export default function App(){


	return(
		<Container>
			<Router>
				<div>
					<ButtonGroup>
						<Button variant="outline-primary">
							<Link to="/">Home</Link>
						</Button>
						<Button variant="outline-primary">
							<Link to="/about">About</Link>
						</Button>
						<Button variant="outline-primary">
							<Link to="/resources">Resources</Link>
						</Button>
						<Button variant="outline-primary">
							<Link to="/neighbors">Neighbors</Link>
						</Button>
					</ButtonGroup>
					<Switch>
						<Route path='/resources'>
							<Resources />
						</Route>
						<Route path='/about'>
							<About  />
						</Route>
						<Route path="/neighbors">
							<NeighborsList />
						</Route>
						<Route path="/">
							<Home />
							<img src={computer} alt='computer screen' height="600"
							width="800"/>
						</Route>
					</Switch>
				</div>
			</Router>
		</Container>
	);
}

function Home(){
	return <h2> Home </h2>
}

function About(){
	return (
		<div>	
			<h2>About This Project</h2>
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
						<td>Contain at least 10 components</td>
						<td></td>
					</tr>
					<tr>
						<td>Allow for all CRUD operations</td>
						<td></td>
					</tr>
				</tbody>
			</Table>
		</div>
);
}

function Resources(){
	 return(
			<h2>Resources</h2>
	 );
}


