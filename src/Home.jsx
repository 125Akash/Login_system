import React from 'react';
import { useNavigate } from 'react-router-dom';
import {auth} from './firebase'; // Import your logout function
import "./Home.css"
import { toast } from 'react-toastify';
const Home = () => {
  const navigate = useNavigate(); // Use useNavigate for navigation

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Call the logout function
      navigate('/login'); // Redirect to the login page after logout
      toast.success("Logout Successfull")
    } catch (error) {
      console.error('Error logging out:', error);
      toast.error("Something Went Wrong")
    }
  };

  return (
    <div>
      <h2>Welcome to the Home Page</h2>
      <button onClick={handleLogout}>Logout</button> 
      <p>Hello My Name is Akash form Maharashtra  ,i am  FullStack Web-developer having Experience with Frontend Technologies like Reactjs html javascript etc. and also Backend Technology like Firebase Mongodb and Sql  
         <br/>
        Contact - sabeakash125@gmail.com or darkmashllow125@gmail.com
      </p>
    </div>
  );
};

export default Home;
