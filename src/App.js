import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ProjectDetails from './components/ProjectDetails';
import Navbar from './components/Navbar';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/register" component={Register} />
        <Route path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/projects/:id" component={ProjectDetails} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  );
};

export default App;
