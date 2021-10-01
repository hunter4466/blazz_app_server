import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  Redirect,
} from 'react-router-dom';
import HomePage from './components/homepage';

const App = () => {
  const handleStoreCloseClick = () => {
  };
  return (
    <Router>
      <div className="page_holder">
        <div className="navigator_bar">
          <NavLink activeClassName="selected_nav_item" className="nav_item" onClick={() => { handleStoreCloseClick(); }} to="/home">Home</NavLink>
        </div>
        <Switch>
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/home">
            <HomePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
