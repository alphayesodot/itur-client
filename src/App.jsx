import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/Home';
import InterviewerHeader from './common/InterviewerHeader/InterviewerHeader';
import UploadXmlPage from './pages/XmlUploadSite/index';
import useStyles from './App.styles';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const classes = useStyles();

  return (
    <Router classes={classes.root}>
      <InterviewerHeader />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/xml-upload">
          <UploadXmlPage />
        </Route>
        <Route path="/interview-dashboard">
          <h1>interview-dashboard</h1>
        </Route>
      </Switch>
      <ToastContainer className={classes.toastContainer} />
    </Router>
  );
};

export default App;
