import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Container from 'react-bootstrap/Container';
import NeighborsList from './Components/NeighborsList';
import About from './Components/About.js';
import Resources from './Components/Resources'
import Home from './Components/Home'
import Todo from './Components/Todo'
import Maricopa from './Components/Maricopa'
import Test from './Components/Test'

import {
	BrowserRouter as Router,
	Switch,
	Route
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
						<Button href="/" variant="outline-primary">
							Home
						</Button>
						<Button href="/neighbors" variant="outline-primary">
							Neighbors
						</Button>
						<Button href="/about" variant="outline-primary">
						About
						</Button>
						<Button href="/resources" variant="outline-primary">
							Resources
						</Button>
						<Button href="/todo" variant="outline-primary">
							Todo
						</Button>
						<Button href="/maricopa" variant="outline-primary">
							Maricopa
						</Button>
						<Button href="/test" variant="outline-primary">
							Test
						</Button>
					</ButtonGroup>
					<Switch>
						<Route path='/resources'>
							<Resources />
						</Route>
						<Route path='/about'>
							<About  />
						</Route>
						<Route path="/todo">
							<Todo />
						</Route>
						<Route path="/neighbors">
							<NeighborsList />
						</Route>
						<Route path="/maricopa">
							<Maricopa/>
						</Route>
						<Route path="/test">
							<Test />
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



