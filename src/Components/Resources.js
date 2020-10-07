import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import github from '../images/GitHub.png'
import crudcrud from '../images/crudcrud.png'
import react from '../images/React.svg'
import promineo from '../images/promineo.png'
import resources from '../images/resources.jpg'

export const Resources = () => {
	return ( 
		<div >
			<h1>Resources </h1>
			<img src={resources} alt='resources' height="450"/>
				<Tabs defaultActiveKey="react" id="uncontrolled-tab-example">
				  <Tab eventKey="react" title="React">
					<ReactX />
				  </Tab>
				  <Tab eventKey="home" title="Github">
					<Github />
				  </Tab>
				  <Tab eventKey="promineo" title="Promineo" >
					<Promineo />
				  </Tab>
				  <Tab eventKey="crudcrud" title="CrudCrud" >
					<CrudCrud />
				  </Tab>
		</Tabs>
		</div>
	);
}
function Github(){
	return(
		<div>
			<Card style={{ width: '18rem' }}>
			  <Card.Img variant="top" src={github} />
			  <Card.Body>
				<Card.Title>Github</Card.Title>
				<Card.Text>
					Used for version control and source control.  
				</Card.Text>
				  <Button variant="primary" href="https://www.github.com">Learn More about Github</Button>
			  </Card.Body>
			</Card>	

		</div>
	)
}
function Promineo(){
	return(
		<div>
			<Card style={{ width: '18rem' }}>
			  <Card.Img variant="top" src={promineo} />
			  <Card.Body>
				<Card.Title>Promineo</Card.Title>
				<Card.Text>
					Coding Bootcamp 
				</Card.Text>
				  <Button variant="primary" href="http://www.promineotech.com">Learn more about Promineo</Button>
			  </Card.Body>
			</Card>	

		</div>
	)
}
function ReactX(){
	return(
		<div>
			<Card style={{ width: '18rem' }}>
			  <Card.Img variant="top" src={react} />
			  <Card.Body>
				<Card.Title>React</Card.Title>
				<Card.Text>
					This assignment uses React to build a CRUD application.
				</Card.Text>
				  <Button variant="primary" href="https://reactjs.org/">Learn More about React</Button>
			  </Card.Body>
			</Card>	

		</div>
	)
}
function CrudCrud(){
	return(
		<div>
			<Card style={{ width: '18rem' }}>
			  <Card.Img variant="top" src={crudcrud} />
			  <Card.Body>
				<Card.Title>CrudCrud</Card.Title>
				<Card.Text>
					CrudCrud provides a low cost API for testing and POCs.
					Used in this project to develop my own CRUD application.
				</Card.Text>
				<Button variant="primary"
				  href="https://crudcrud.com/api/8395807bd67349e78e6b6993d2003e8f/unicorns">Learn
				More about CrudCrud</Button>
			  </Card.Body>
			</Card>	

		</div>
	)
}
export default Resources;
