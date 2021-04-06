import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home/index';
import Track from './pages/track/index';
import NavBar from './common/navbar/navbar';
import useStyles from './App.styles';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const classes = useStyles();

  return (
    <Router classes={classes.root}>
      <NavBar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/track">
          <Track />
        </Route>
      </Switch>
      <ToastContainer />
    </Router>
  );
};

export default App;
