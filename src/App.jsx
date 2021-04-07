import React from 'react';
import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import NavBar from './common/navbar/navbar';
import useStyles from './App.styles';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const classes = useStyles();
  return (
    <Router classes={classes.root}>
      <NavBar />
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <ToastContainer />
    </Router>
  );
};

export default App;
