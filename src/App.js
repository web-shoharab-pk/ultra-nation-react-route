import React from 'react';
import './App.css'
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NoMatch from './components/NoMatch/NoMatch';
import ShowDetails from './components/ShowDetails/ShowDetails';


const App = () => {
  
  return (
    <div className="all">
      <Router>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/name/:countryName">
            <ShowDetails />
        </Route>
        <Route path="*">
            <NoMatch />
        </Route>
      </Switch>
    </Router>
    </div>
    
  );
};

export default App;