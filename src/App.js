import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import NeighborsList from './Components/NeighborsList';

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
							<Link to="/posts">Posts</Link>
						</Button>
						<Button variant="outline-primary">
							<Link to="/neighbors">Neighbors</Link>
						</Button>
					</ButtonGroup>

					<Switch>
						<Route path='/posts'>
							<Posts />
						</Route>
						<Route path='/about'>
							<About  />
						</Route>
						<Route path="/neighbors">
							<NeighborsList />
						</Route>
						<Route path="/">
							<Home />
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
		<div>	<h2>About This Project</h2>
		<p>	Using an online API of your choice, or multiple APIs (or if no API
			can be found, using an array for in-memory storage is okay as well),
			create a React project of your choice. You will be working on this
			for the next three weeks.</p>
			
			Project must meet the following criteria:
			<ol>
				<li>Use React Router and have at least 3 pages</li>
				<li>Use React Bootstrap or an alternative styling library</li>
				<li>Contain at least 10 components</li>
				<li>Allow for all CRUD operations</li>
			</ol>
		</div>
);
}

function Posts(){
	 return(
			<h2>Posts</h2>
	 );
}


