import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AppBar from '@material-ui/core/AppBar';
import { Toolbar, Typography } from '@material-ui/core';
import './App.css';
import LocationListContainer from './containers/LocationListContainer';
import ForecastExtendedContainer from './containers/ForecastExtendedContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Grid>
          <AppBar position="sticky">
            <Toolbar>
              <Typography component="h1" variant="h3" color="inherit">
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Grid>
        <Grid container>
          <Grid item xs={12} md={5}>
            <LocationListContainer />
          </Grid>
          <Grid item xs={12} md={7}>
            <Paper>
              <ForecastExtendedContainer />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default App;