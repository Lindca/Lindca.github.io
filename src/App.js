import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import NavbarComp from './components/Navbar';

// const initialState = { currentUser: {} };
// const UserContext = React.createContext(initialState);

function App() {
  return (
    <Router>
      <div>
        <NavbarComp />
        <Switch>
          <Route exact path="/" component={Home}></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
