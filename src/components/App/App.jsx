import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Home from '../Pages/Home/Home';
import About from '../Pages/About/About';
import How from '../Pages/How/How';
import Ride from '../Pages/Ride/Ride';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/how" component={How} />
          <Route path="/ride" component={Ride} />
        </Switch>
        <Footer />
      </div>
    </Router>

  );
}

export default App;
