import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white p-4">
        <nav className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-blue-600">Quick-Commerce</h1>
          <div>
            <Link to="/" className="mr-4 text-blue-600 hover:underline">Home</Link>
            <Link to="/login" className="text-blue-600 hover:underline">Login</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
