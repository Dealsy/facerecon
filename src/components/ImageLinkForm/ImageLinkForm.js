import React from 'react';
import './ImageLinkForm.css';



const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
	return (

		<div>
		<p className='f3 b'>
		{'This Magic App Will Detect Faces In Pictures You Link to!'}

		</p>
		<p className='f4 b'> Enter a image link address below and hit Dectect! </p>
		<div className='center'>
		<div className='form center pa4 br3 shadow-5'>
		<input className='f4 pa2 w-70 center' type='tex' onChange={onInputChange}/>
		<button className='w-30 grow f4 link ph3 pv2 dib white Dectect' onClick={onButtonSubmit}>Detect</button>
		</div>
		</div>

		</div>

		);
}


export default ImageLinkForm;