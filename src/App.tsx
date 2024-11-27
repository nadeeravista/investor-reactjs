import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import { DashboardScreen } from '@components/DashboardScreen';
import ProtectedRoute from './ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/dashboard"
          element={<ProtectedRoute element={<DashboardScreen />} />}
        />
        <Route path="/" element={<div>Home</div>} />
      </Routes>
    </Router>
  );
}

export default App;
