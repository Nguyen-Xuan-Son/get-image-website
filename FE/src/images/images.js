import React from 'react';

class Images extends React.Component {
  	render() {
		const images = this.props.imgs.map((img, index) => (
			<img key={index} src={img} alt='Images'/>
		));

  		return (
			<div>
				{images.length ? images : ''}
    		</div>
  		);	
  	}
}

export default Images;
