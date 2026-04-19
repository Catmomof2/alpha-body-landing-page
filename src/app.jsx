import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './landing.jsx';
import Checkout from './checkout.jsx';
// Final path resolution check
// Force rebuild for path resolution

const App = () => {
  return (
    <Router basename="/alpha-body-landing-page">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
    </Router>
  );
};

export default App;
