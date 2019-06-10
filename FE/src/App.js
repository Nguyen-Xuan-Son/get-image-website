import React from 'react';
import Search from './search/search.js';
import Images from './images/images.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imgs: []
    };
    this.getUrlImgs = this.getUrlImgs.bind(this);
  }

  getUrlImgs(imgs) {
    console.log('imgs', imgs);
    this.setState({
      imgs: imgs.urlImgs
    })
  }

  render() {
    return (
      <div>
        <Search getImgs={this.getUrlImgs}/>
        <Images imgs={this.state.imgs}/>
      </div>
    );
  }
}

export default App;
