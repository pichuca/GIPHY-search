import React, { Component } from 'react';

import Trending from '../../components/trending/Trending';
import Search from '../../components/search/Search';
import './SearchAndTrending.css';


class SearchAndTrending extends Component {
  render() {
    return (
      <section className="search-and-trending">
        <Trending />
        <Search />
      </section>
    );
  }
}

export default SearchAndTrending;