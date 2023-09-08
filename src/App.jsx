// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'; // Import necessary components
import Login from './Login';
import Signup from './Signup';
import Home from './Home';
import { auth } from './firebase'; // Import your Firebase authentication instance

const App = () => {
  const user = auth.currentUser;

  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {user ? (
          <Route path="/home" element={<Home />} />
        ) : (
          <Route
            path="/signup"
            element={<Navigate to="/signup" replace />} // Use Navigate component to redirect to signup if not logged in
          />
        )}

        <Route
          path="/"
          element={
            user ? (
              <Navigate to="/home" replace /> // Use Navigate component to redirect to home if logged in
            ) : (
              <Navigate to="/signup" replace /> // Use Navigate component to redirect to signup if not logged in
            )
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
