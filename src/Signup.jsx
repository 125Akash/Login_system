// src/components/Signup.js
import React, { useState } from 'react';
import { auth } from './firebase';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./Signup.css"
const Signup = ({ history }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async () => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
      history.push('/home');// Redirect to the home page after successful signup
      toast.success("Signup SuccessFull")
    } catch (error) {
      console.error(error.message); // Handle signup error (display error message)
      toast.error("Signup Failed Please Signup or Check Credentials")
    }
  };

  return (
    <div>
      <h2>Sign Up</h2>
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSignup}>Sign Up</button>
      
    <p>
  Already have an account? <Link to="/login">Login here</Link>.
    </p>

    </div>
  );
};

export default Signup;
