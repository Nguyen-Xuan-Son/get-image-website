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
			imageWebsite: '',
			error: null,
			isLoaded: false,
			URLSearch: '',
			items: []
		};
		this.callApiGetImages = this.callApiGetImages.bind(this);
		this.onHandleChange = this.onHandleChange.bind(this);
	}

	callApiGetImages(URLSearch) {
		fetch(`http://localhost:4000/api/get-image-website`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({URLSearch})
			}
		).then(res => res.json()).then(result => {
			this.setState({
				isLoaded: true,
				imageWebsite: result.mes,
				items: result.items
			});
			this.props.getImgs(result);
		}, error => {
			this.setState({
				isLoaded: true,
				error
			})
		});
	}

	onHandleChange($event) {
		const target = $event.target;
		const value = target.value;
		const name = target.name;
		this.setState({
			[name]: value
		});
	}

	render() {
		return (
			<div>
				<div className="content-center">
					<div>
						<FormControl>
							<InputLabel>URL search</InputLabel>
							<Input name="URLSearch" onChange={this.onHandleChange}/>
							<FormHelperText>Enter URL get images from website, .pdf website and image website.</FormHelperText>
						</FormControl>
						<Button onClick={() => this.callApiGetImages(this.state.URLSearch)} variant="contained" color="primary">
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
				<div>{this.state.imageWebsite}</div>
			</div>
		);
	}
}

export default Search;
