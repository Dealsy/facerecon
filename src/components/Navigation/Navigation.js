import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {


	if ( isSignedIn )  {

		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
			<p onClick={() => onRouteChange('signout')} className= 'f2 link dim grow white underline ma3 pa3 pointer b'> Sign Out </p>
			</nav>
			);

	}	else {
		return (
			<nav style={{display: 'flex', justifyContent: 'flex-end'}}>
			<p onClick={() => onRouteChange('signin')} className= 'f2 link dim grow white underline ma3 pa3 pointer b'> Sign In </p>
			<p onClick={() => onRouteChange('register')} className= 'f2 link dim grow white underline ma3 pa3 pointer b'> Register </p>
			</nav>

			);

	}

	

	
}


export default Navigation;