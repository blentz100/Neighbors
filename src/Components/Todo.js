import React from 'react';
import computer from '../images/computer-screen.jpg'
import ListGroup from 'react-bootstrap/ListGroup'

export const Todo = () => {
	return ( 
		<div >
			<h2> Todo </h2>
			<img src={computer} alt='checklist' height="450"/>
			<br/> <br/>
			<ListGroup>
			  <ListGroup.Item variant='primary'>Add Photo Captions with Photographer Credit</ListGroup.Item>
			  <ListGroup.Item variant='primary'>Add Update functionality for neighbors</ListGroup.Item>
			  <ListGroup.Item variant='primary'>Make Delete Button Red</ListGroup.Item>
			  <ListGroup.Item variant='primary'>Make Top Buttons clickable, not just text</ListGroup.Item>
			  <ListGroup.Item variant='primary'>Fix Color Contrast of Top Buttons</ListGroup.Item>
			  <ListGroup.Item variant='primary'>Do something with the Zillow Links</ListGroup.Item>
			</ListGroup>
		</div>
	);
}
export default Todo;
