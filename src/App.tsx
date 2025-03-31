import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DynamicIsland from './components/DynamicIsland';
import HomePage from './pages/HomePage';
import CollectionsPage from './pages/CollectionsPage';
import CartPage from './pages/CartPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <DynamicIsland />
        <div className="pt-24">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/collections" element={<CollectionsPage />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;