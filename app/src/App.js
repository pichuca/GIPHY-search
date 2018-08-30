import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import SearchAndTrending from './features/search-and-trending/SearchAndTrending';
import SearchResults from './features/search-results/SearchResults';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="app">
          <header className="app-header">
            <p className="app-intro">
              <code>GIPHY-search</code>
            </p>
          </header>
          <Route exact path="/" component={SearchAndTrending} />
          <Route path="/search-results" component={SearchResults}/>
        </div>
      </Router>
    );
  }
}

export default App;
