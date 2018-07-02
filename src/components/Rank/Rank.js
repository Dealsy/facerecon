import React from 'react';

const Rank = ({name, entries}) => {
	return (

		<div>
		<div className='white f3'>
		{`${name} , You have entered`}
		<div className='white f1 '>
		{entries}
		<div className="white f3">Pictures! </div>
		</div>
		</div>
		</div>

		);
}


export default Rank;