import React from 'react';
import Header from "./Header";
import Footer from "./Footer";
import ToDo from "./Todo";
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Card, { CardContent } from 'material-ui/Card';
import Grid from 'material-ui/Grid';

import { connect } from 'react-redux';
import Auth from './components/Login/Auth';
import Inside from './components//Inside';
import LoadingIndicator from './components/LoadingIndicator'

const styles = theme => ({
    card: {
        minWidth: 275,
        maxWidth: 500,
      },
    
  });

const App = (props) => {
    const { classes } = props;
    return (
        <Grid 
            container
            justify= "center"
            >
        <Grid 
            xs={12}
            sm={6}
            align="center">
        <Card 
            className={classes.card}
            align="center">
        <CardContent align="center">
                <Header/>
                <ToDo />                
                <Footer/>
        </CardContent>
        </Card>
        </Grid>
        </Grid>
    )
};

App.propTypes = {
    classes: PropTypes.object.isRequired,
  };
  
export default withStyles(styles)(App);
