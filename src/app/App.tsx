import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import Home from '../entities/pages/Home/Home';

const App: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
    </Switch>
  );
};

export default App;
