import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: '100%',
  },
  menu: {
    width: '100%',
  },
});

class SearchInputField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };

    // Bind events.
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      query: event.target.value,
    });
    this.props.onInput(this.state.query);
  };

  render() {
    return (
      <TextField
        id="full-width"
        InputLabelProps={{
          shrink: true,
        }}
        placeholder="Search"
        fullWidth
        margin="normal"
        onChange={this.handleChange}
      />
    );
  }
}

SearchInputField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchInputField);
