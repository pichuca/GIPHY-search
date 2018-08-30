import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import './App.css';
import SearchAndTrending from './features/search-and-trending/SearchAndTrending';

class App extends Component {
  render() {
    return (
      <div className="app">
        <header className="app-header">
          <p className="app-intro">
            <code>GIPHY-search</code>
          </p>
        </header>
        <Router>
          <SearchAndTrending />
          

          <Route path="/search-results" component={}/>
        </Router>
      </div>
    );
  }
}

export default App;
