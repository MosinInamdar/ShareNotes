import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
//import users from '../../../users'; // Import the users data

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming this is a mock function for login API call
    const mockLoginUser = async () => {
      // Simulate API call delay for 1.5 seconds (to mimic network request time)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate API response
      const response = { success: true };

      return response;
    };

    try {
      // Make the API call to log in the user
      const response = await mockLoginUser();

      // Assuming the API returns a successful response
      if (response.success) {
        // After successful login, you can navigate the user to the dashboard or perform any other necessary action.
        navigate('/dashboard'); // Navigating to the dashboard for demonstration purposes
        // You can store authentication details, display a success message to the user, or take any other actions here.
      } else {
        // Handle login failure (e.g., display an error message)
      }
    } catch (error) {
      // Handle any errors that occurred during the login API call
      console.error('Login error:', error);
      // Display an error message to the user or take any other actions here.
    }
  };

  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
          <p className="message">
            Not registered? <a href="/Signup">Create an account</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;