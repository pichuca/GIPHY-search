import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function SearchButton() {
  return (
    <Button variant="contained" color="primary" className="search-button">
       Search
    </Button>
  );
}

export default withStyles(styles)(SearchButton);
