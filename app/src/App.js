import React, { Component } from 'react';
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
        <SearchAndTrending />
      </div>
    );
  }
}

export default App;
