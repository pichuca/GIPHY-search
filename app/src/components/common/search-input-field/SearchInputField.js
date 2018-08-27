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
    this.state = {}; 
  }

  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;

    return (
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          id="full-width"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Search"
          fullWidth
          margin="normal"
        />
      </form>
    );
  }
}

SearchInputField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SearchInputField);
