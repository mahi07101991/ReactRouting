import React, { Component } from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import home from './components/home/home';
import component1 from './components/component1/component1';
import component2 from './components/component2/component2';
import component3 from './components/component3/component3';
import Navigation from './components/navigation/navigation';

class App extends Component {
  render() {
    return ( 
      <div>
        <Navigation />
        <Switch>
          <Route path='/' exact={true} component={home} />
          <Route path='/component1' component={component1} />
          <Route path='/component2' component={component2} />
          <Route path='/component3' component={component3} />
        </Switch> 
      </div>
      
    );
  }
}

export default App;
