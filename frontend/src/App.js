import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Footer from './components/Footer';
import AdminDashboard from './pages/AdminDashboard';
import DeliveryDashboard from './pages/DeliveryDashboard';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white p-4 flex flex-col min-h-screen">
        <nav className="flex justify-between items-center mb-6">
          <h1 className="text-4xl font-bold text-blue-600">Quick-Commerce</h1>
          <div>
            <Link to="/" className="mr-4 text-blue-600 hover:underline">Home</Link>
            <Link to="/login" className="mr-4 text-blue-600 hover:underline">Login</Link>
            <Link to="/admin" className="mr-4 text-blue-600 hover:underline">Admin</Link>
            <Link to="/delivery" className="text-blue-600 hover:underline">Delivery</Link>
          </div>
        </nav>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin" element={<AdminDashboard />} />
            <Route path="/delivery" element={<DeliveryDashboard />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
