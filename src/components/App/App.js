import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Home from '../Pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
