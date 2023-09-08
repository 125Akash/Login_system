// src/components/Login.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from './firebase';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import "./Login.css"
const Login = () => {
  const history = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      await auth.signInWithEmailAndPassword(email, password);
       history('/home');
       toast.success("Login SuccessFull")
    } catch (error) {
      console.error(error.message);
      toast.error("Invalid Credentials")
    }
  };

  return (
    <div>
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>
      <p>
         Don't have an account? <Link to="/signup">Sign up here</Link>.
      </p>
    </div>
  );
};

export default Login;
