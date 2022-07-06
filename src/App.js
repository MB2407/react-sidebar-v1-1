import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Leave from './pages/Leave';
import Balance from './pages/Balance';
import Upcoming from './pages/Upcoming';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' exact element={ <Home/> } />
          <Route path='/leave' exact element={ <Leave/> } />
          <Route path='/balance' exact element={ <Balance/> } />
          <Route path='/upcoming' exact element={ <Upcoming/> } />
        </Routes>
      </Router>
    </>
  );
}
export default App;
