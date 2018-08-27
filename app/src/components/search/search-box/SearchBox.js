import React, { Component } from 'react';

import GIPHYService from '../../../api/services/giphy/giphy-service';
import SearchInputField from '../../common/search-input-field/SearchInputField';

class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className="search-input">
        <SearchInputField />
      </div>
    );
  }
}

export default SearchBox;