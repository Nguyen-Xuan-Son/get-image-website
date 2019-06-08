import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import Button from '@material-ui/core/Button';
import './search.css';

class Search extends React.Component {

	constructor(props) {
    	super(props);
    	this.state = {
      		error: null,
      		isLoaded: false,
      		items: []
    	};
    	this.callApiGetImages = this.callApiGetImages.bind(this);
  	}

	callApiGetImages() {
		fetch(`http://localhost:4000/api/getImageWebsite`,
    {
   method: 'post',
   headers: {'Content-Type':'application/json'},
   body: {
    "first_name": 'this.firstName.value'
   }
  }
      ).then(res => res.json()).then((result) => {
          		this.setState({
            		isLoaded: true,
            		items: result.items
          		});
    		}, (error) => {
          		this.setState({
            		isLoaded: true,
            		error
          		})
          	}
  		);
  		console.log(this.state);
	}

  	render() {
		return (
			<div>
				<div className="content-center">
			    	<div>
			    		<FormControl>
	  						<InputLabel>URL search</InputLabel>
	  						<Input/>
	  						<FormHelperText>Enter URL get images from website, .pdf website and image website.</FormHelperText>
						</FormControl>
						<Button onClick={this.callApiGetImages} variant="contained" color="primary">
        					Get data
      					</Button>
			    	</div>
		    	</div>
		    	<div className="content-center">
      				<Button variant="contained" color="secondary">
        				Download PDF website
      				</Button>
      				<Button variant="contained">
        				Default image website
      				</Button>
		    	</div>
			</div>
		    
	  	);
  	}
}

export default Search;
