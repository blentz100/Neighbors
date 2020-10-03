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
			  <ListGroup.Item variant='primary'>Deploy to AWS</ListGroup.Item>
			  <ListGroup.Item variant='primary'>Add a link to this github repo</ListGroup.Item>
			  <ListGroup.Item variant='primary'>Add Photo Captions with Photographer Credit</ListGroup.Item>
			  <ListGroup.Item variant='primary'>Make Top Buttons clickable, not just text</ListGroup.Item>
			  <ListGroup.Item variant='primary'>Fix Color Contrast of Top Buttons</ListGroup.Item>
			  <ListGroup.Item variant='primary'>Do something with the Zillow Links</ListGroup.Item>
			  <ListGroup.Item variant='primary'>Update Title of Page</ListGroup.Item>
			  <ListGroup.Item variant='secondary'>Add Update functionality for neighbors - done</ListGroup.Item>
			  <ListGroup.Item variant='secondary'>Make Delete Button Red- done</ListGroup.Item>
			</ListGroup>
			<br/>
		</div>
	);
}
export default Todo;
