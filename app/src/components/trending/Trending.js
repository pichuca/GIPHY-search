import React, { Component } from 'react';

import GIPHYService from '../../api/services/giphy/giphy-service';
import ImageGridList from '../common/image-grid-list/ImageGridList';
import './Trending.css';

class Trending extends Component {
  constructor(props) {
    super(props);
    this.state = {
      trendingItems: [],
    };

    // Bind methods.
    this.getTrendingItems = this.getTrendingItems.bind(this);
  }
  componentDidMount() {
    this.getTrendingItems();
  }
  getTrendingItems() {
    GIPHYService.getTrending()
      .then((items) => {
        this.setState({
          trendingItems: items,
        });
      });
  }
  render() {
    const trendingItems = this.state.trendingItems;
    return (
      <div className="trending">
        <h1>Trending: #10</h1>
        <ImageGridList items={trendingItems} />
      </div>
    );
  }
}

export default Trending;