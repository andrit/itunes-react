import React, { Component } from 'react';
import Results from './components/Results';
import Search from './components/Search';

import './App.css';

class App extends Component {
  state={
    searchresults:null
  }
  render() {
    return (
      <div className="App">
        <Search/>
        {this.state.searchresults ? <Results/> : 'Results will show up here'}
      </div>
    );
  }
}

export default App;
