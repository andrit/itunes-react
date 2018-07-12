import React, { Component } from 'react';
import Results from './components/Results';
import Search from './components/Search';

import './App.css';

class App extends Component {
  state={
    searchresults:[]
  }
  setLookupResults = (results) => {
    this.setState({
      searchresults: results
    })
  }
  render() {
    return (
      <div className="App">
        <Search setLookupResults={this.setLookupResults} />
        {this.state.searchresults.length > 0 
          ? <Results searchresults={this.state.searchresults} /> 
          : 'Results will show up here'}
      </div>
    );
  }
}

export default App;
