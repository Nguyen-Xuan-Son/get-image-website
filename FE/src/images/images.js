import React from 'react';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';

class Images extends React.Component {
  	render() {
  		const tileData = [
  			{
  				img: `https://vignette.wikia.nocookie.net/p__/images/7/75/Future_Gohan_render.png/revision/latest?cb=20140423152620&path-prefix=protagonist`,
  				title: 'abc'
  			},
  			{
  				img: `https://vignette.wikia.nocookie.net/p__/images/7/75/Future_Gohan_render.png/revision/latest?cb=20140423152620&path-prefix=protagonist`,
  				title: 'abc'
  			},
  			{
  				img: `https://vignette.wikia.nocookie.net/p__/images/7/75/Future_Gohan_render.png/revision/latest?cb=20140423152620&path-prefix=protagonist`,
  				title: 'abc'
  			}
  		];

  		return (
			<div>
      			<GridList>
        			{tileData.map(tile => (
          				<GridListTile key={tile.img}>
            				<img src={tile.img} alt={tile.title}/>
          				</GridListTile>
        			))}
      			</GridList>
    		</div>
  		);	
  	}
}

export default Images;
