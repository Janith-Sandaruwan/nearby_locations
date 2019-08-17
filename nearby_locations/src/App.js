import React, { Component } from 'react';
import Search from './components/search';
import Results from './components/resultslist';
import './App.css';

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      results : []
    }
  }

  updateState(newPlaces){
    this.setState({
      results : newPlaces
    })
  }

  render() {
    return (
      <div className="App">
        <div className="container">
          <Search callUpdateState={this.updateState.bind(this)} />
          <Results places={this.state.results} />
        </div>
      </div>
    );
  }
}

export default App;
