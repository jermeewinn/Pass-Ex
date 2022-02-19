import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import Login from './components/Login';
import YourPosts from './components/YourPosts';



function App() {
  return (
    <Router>
    <div className="App">
    <Nav    />
    <Routes>
      <Route exact path="/" element={<Login/>} />
      <Route exact path="/Home" element={<Home/>} />
      <Route exact path="/YourAccount" element={<YourPosts/>} />
      
    </Routes>
    <Footer/>
    </div>
    </Router>
    
  );
}

export default App;
