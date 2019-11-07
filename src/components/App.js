import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from '../containers/Home';
import List from '../containers/List';
import Details from '../containers/Details';


const App = () => {
  return (
    <>
      <Header />
      <Router>
        <Switch>
          <Route path='/List/:character' component={List} />
          <Route path='/Details/:_id' component={Details} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
      <Footer />
    </>
  );
};

export default App;
