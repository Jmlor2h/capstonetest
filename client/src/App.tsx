import React from 'react';
import './index.css';
import { Navigation } from './components/Nav.jsx';
import HomePage from './pages/HomePage';
import { Footer } from './components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import MyHealth360 from './pages/MyHealth360'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router >
   <Navigation />
    <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={< Login/>} />
          <Route path="/register" element={< Register/>} />
    </Routes>
  <Footer />
  </Router>
      </header>
    </div>

  );
}

export default App;
