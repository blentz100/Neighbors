import React, {useState} from 'react';
import computer from '../images/computer-screen.jpg'

export const Home = () => {
	const[count,setCount] = useState(0);

	return ( 
		<div >
			<h2> Home </h2>
			<img src={computer} alt='checklist' height="450"/>
			<p>{count}</p>
			<button onClick={() => setCount(count + 1)} > 
				Hook Counter Demo
			</button>
		</div>
	);
}



export default Home;
