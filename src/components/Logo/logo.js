import React from 'react';
import Tilt from 'react-tilt'
import network from './network.png';
import './logo.css'


const Logo = () => {
	return (

		<div className='ma4 mt0'>
			<Tilt className="Tilt br2 shadow-2" options={{ max : 55 }} style={{ height: 200, width: 200 }} >
			 <div className="Tilt-inner pa3"> <img style={{ height: '180px'}} alt='logo' src={network} /> </div>
			</Tilt>

		</div>

		);
}


export default Logo;