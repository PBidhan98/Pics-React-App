import React from 'react';

class SearchBar extends React.Component {

  render(){
    return (
      <div className="ui segment">
        <form className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input type="text" onChange={(e) => console.log(e.target.value)}/>
            </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
