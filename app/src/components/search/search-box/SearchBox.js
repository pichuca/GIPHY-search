import React, { Component } from 'react';

import GIPHYService from '../../../api/services/giphy/giphy-service';
import SearchInputField from '../../common/search-input-field/SearchInputField';
import SearchButton from '../../common/search-button/SearchButton';


class SearchBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      searchList: [],
    };

    // Bind methods.
    this.getInput = this.getInput.bind(this);
    this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
  }
  getInput(query) {
    this.setState({
      query,
    });
  }
  handleSearchButtonClick(event) {
    let q = this.state.query;
    GIPHYService.searchQuery(q)
      .then((searchListFromAPI) => {
        console.log(searchListFromAPI);
        this.setState({
          searchList: searchListFromAPI,
        });
      });
  }
  render() {
    return (
      <div className="search-input">
        <SearchInputField onInput={this.getInput} />
        <div className="search-button-wrapper" onClick={this.handleSearchButtonClick}>
          <SearchButton />
        </div>
      </div>
    );
  }
}

export default SearchBox;