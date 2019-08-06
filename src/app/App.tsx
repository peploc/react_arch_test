import React from 'react';
import './App.css';
import { Switch } from 'react-router-dom';
import { routes } from '../config/routes.config';
import { RoutePath } from '../entities/components/RoutePath/RoutePath';

const App: React.FC = () => {
  return (
    <Switch>
      {
        routes.map((route: any, index: number) => <RoutePath key={index} {...route} />)
      }
    </Switch>
  );
};

export default App;
