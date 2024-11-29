import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginScreen from '@screens/LoginScreen';
import { DashboardScreen } from '@screens/DashboardScreen';
import ProtectedRoute from './ProtectedRoute';
import useSetToken from '@custom-hooks/useSetToken';

function App() {
  // We are using openapi-typescript-codegen to generate the OpenAPI client
  // Sets the token in the OpenAPI client
  useSetToken();
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
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
