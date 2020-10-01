import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import NeighborsList from './Components/NeighborsList';
import About from './Components/About.js';
import Resources from './Components/Resources'
import Home from './Components/Home'


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
						</Route>
					</Switch>
				</div>
			</Router>
		</Container>
	);
}



