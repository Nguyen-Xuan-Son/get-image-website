import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

class Images extends React.Component {
	constructor(props) {
		super(props);
	}

  	render() {

  		return (
			<div>
      			<GridList>
        			{this.props.imgs.map((img, index) => (
						<img key={index} src={img} alt='abc'/>
        			))}
      			</GridList>
    		</div>
  		);	
  	}
}

export default Images;
