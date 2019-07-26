import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar';

class App extends React.Component{
  state = {images: []};
  async onSearchSubmit(term){
    const response = await axios.get('https://api.unsplash.com/search/photos',{
      params: {query: term},
      headers:{
        Authorization: 'Client-ID 900bf2ecf7afb1ef1054563580032883f22be39b655a1fbe1309b9c95678699e'
      }
    });
    this.setState({images: response.data.results});
  }
  render(){
    return (
      <div className="ui container" style={{marginTop: '50px'}}>
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length} images
        </div>
      );
  }
}

export default App;
