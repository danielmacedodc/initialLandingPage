import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './components/header/Header';
import Home from './components/home/Home';
import Destinations from './components/destinations/Destinations'
import Register from './components/register/Register';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        
        <Route exact path='/'>
          <Home />
          <Destinations />
          <Register />
        </Route>

        <Footer />
      </Router>
    </>
  );
}

export default App;
