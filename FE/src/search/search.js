import React from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import {Button, Checkbox, FormControlLabel } from '@material-ui/core';

import './search.css';

class Search extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			imageWebsite: '',
			error: null,
			formatImage: ["png", "jpg", "jpeg", "gif"],
			isLoaded: false,
			URLSearch: '',
			formatsImage: [],
			items: []
		};
		this.callApiGetImages = this.callApiGetImages.bind(this);
		this.onHandleChange = this.onHandleChange.bind(this);
		this.handleChange = this.handleChange.bind(this);
	}

	callApiGetImages(URLSearch, formatsImage) {
		fetch(`http://localhost:4000/api/get-image-website`,
			{
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify({URLSearch, formatsImage})
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

	handleChange(e) {
		const tempsFormat = this.state.formatsImage;

		if (this.state.formatsImage.length && e.target.checked) {
			tempsFormat.push(e.target.value);
		} else if (!this.state.formatsImage.length && e.target.checked) {
			tempsFormat.push(e.target.value);
		} else if (!e.target.checked && tempsFormat.indexOf(e.target.value) !== -1 ) {
			tempsFormat.splice(tempsFormat.indexOf(e.target.value), 1);
		}

		this.setState({
			formatsImage: tempsFormat
		})
	}

	render() {

		const checkboxsSelectFormatImage = this.state.formatImage.map((format, index) => {
            return (
                <FormControlLabel
                    key={index}
                    value={format}
                    control={
                        <Checkbox color="primary" onChange={this.handleChange}/>
                    }
                    label={"Get " + format + " image"}
                    labelPlacement="end"
                />
            );
        })

		return (
			<div>
				<div className="content-center">
					<div>
						<FormControl>
							<InputLabel>URL search</InputLabel>
							<Input name="URLSearch" onChange={this.onHandleChange}/>
							<FormHelperText>Enter URL get images from website, .pdf website and image website.</FormHelperText>
						</FormControl>
						<Button onClick={() => this.callApiGetImages(this.state.URLSearch, this.state.formatsImage)} variant="contained" color="primary">
							Get data
      					</Button>
					</div>
				</div>
				<div className="option-format-container">
					{checkboxsSelectFormatImage}
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
				<hr />
			</div>
		);
	}
}

export default Search;
