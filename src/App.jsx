import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Home from './pages/home/index';
import UploadXmlPage from './pages/xml-upload-site/index';
import NavBar from './common/navbar/navbar';
import useStyles from './App.styles';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const classes = useStyles();

  return (
    <Router classes={classes.root}>
      <NavBar />
      <Switch>
        <Route path="/xmlUpload/">
          <UploadXmlPage></UploadXmlPage>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
      <ToastContainer />
    </Router>
  );
};

export default App;
