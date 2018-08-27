import React, { Component } from 'react';
import GIPHYService from '../../api/services/giphy/giphy-service';
import './Trending.css';

class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingItems: null,
    };

    // Bind methods.
    this.getTrendingItems = this.getTrendingItems.bind(this);
  }
  componentDidMount() {
    this.getTrendingItems();
  }
  getTrendingItems() {
    GIPHYService.getTrending();
  }
  render() {
    return (
      <div className="trending">
        <h1>Trending: #10</h1>
        {/* Trending GIFs list */}
      </div>
    );
  }
}

export default Trending;