import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import { purple } from '@material-ui/core/colors';
import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
}));


const ColorButton = withStyles(theme => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },
}))(Button);

export default function SimpleTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <Box align="center">
        <Button variant="contained" color="primary" to="/resident" component={Link}>Resident</Button>
        <Button variant="contained" color="secondary" to="/promoter" component={Link}>Promoter</Button>
        <ColorButton variant="contained" to="/organizer" component={Link}>Organizer</ColorButton>
      </Box>
    </div>
  );
}