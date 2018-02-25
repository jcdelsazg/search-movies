import React, { Component } from 'react';
import './App.css';
import 'bulma/css/bulma.css';
import { Title } from './components/Title'
import { SearchForm } from './components/SearchForm'
import { MoviesList } from './components/MoviesList'

class App extends Component {
  state = {
    usedSearch: false,
    results: []
  }

  _handleResults = (results) => {

    this.setState({ usedSearch: true, results })
  }

  _renderResults () {

    return (
      this.state.results.length === 0 
      ? <p> Sin Resultados </p> : <MoviesList movies={this.state.results} />
    )
  }

  render() {
    return (
      <div className="App">
        <Title> Search Movies </Title>
        <div className='searchForm-wrapper'>
          <SearchForm onResults={ this._handleResults } />
        </div>
        {this.state.usedSearch ? this._renderResults() : <small>Usa la App</small>}
      </div>      
    );
  }
}

export default App;
