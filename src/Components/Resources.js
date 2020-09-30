import React from 'react';
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import github from '../images/GitHub.png'

export const Resources = () => {
	return ( 
		<div width="50%">
			<h1>Resources </h1>
				<Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
				  <Tab eventKey="home" title="Github">
					<Github />
				  </Tab>
				  <Tab eventKey="react" title="React">
					<Github />
				  </Tab>
				  <Tab eventKey="promineo" title="Promineo" >
					<Github />
				  </Tab>
				  <Tab eventKey="crudcrud" title="CrudCrud" >
					<Github />
				  </Tab>
		</Tabs>
		</div>
	);

}
function Github(){
	return(
		<div>
			<Card style={{  }}>
			  <Card.Img variant="top" src={github} height="200" width="200" />
			  <Card.Body>
				<Card.Title>Card Title</Card.Title>
				<Card.Text>
				  Some quick example text to build on the card title and make up the bulk of
				  the card's content.
				</Card.Text>
				<Button variant="primary">Go somewhere</Button>
			  </Card.Body>
			</Card>	

		</div>
	)

}
export default Resources;
