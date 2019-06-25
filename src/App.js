import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import ContactMe from './pages/ContactMe';
import Projects from './pages/Projects';
import NavbarComp from './components/Navbar';

// const initialState = { currentUser: {} };
// const UserContext = React.createContext(initialState);

function App() {
  return (
    <Router>
        <div>
          <NavbarComp />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/" component={Projects} />
            <Route exact path="/" component={ContactMe} />
          </Switch>
        </div>
    </Router>
  );
}

export default App;
