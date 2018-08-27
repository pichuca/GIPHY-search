import React, { Component } from 'react';
import Trending from '../../components/trending/Trending';
import './SearchAndTrending.css';

class SearchAndTrending extends Component {
  render() {
    return (
      <section className="search-and-trending">
        <Trending />
      </section>
    );
  }
}

export default SearchAndTrending;