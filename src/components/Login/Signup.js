import React, { useState } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [course, setCourse] = useState('');
  const [college, setCollege] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Assuming this is a mock function for registration API call
    const mockRegisterUser = async () => {
      // Simulate API call delay for 1.5 seconds (to mimic network request time)
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate API response
      const response = { success: true };

      return response;
    };

    try {
      // Make the API call to register the user
      const response = await mockRegisterUser();

      // Assuming the API returns a successful response
      if (response.success) {
        // After successful registration, you can navigate the user to the login page or perform any other necessary action.
        navigate('/'); // Navigating back to the login page for demonstration purposes
        // You can display a success message to the user or take any other actions here.
      } else {
        // Handle registration failure (e.g., display an error message)
      }
    } catch (error) {
      // Handle any errors that occurred during the registration API call
      console.error('Registration error:', error);
      // Display an error message to the user or take any other actions here.
    }
  };
  return (
    <div className="login-page">
      <div className="form">
        <form className="login-form" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Course"
            value={course}
            onChange={(e) => setCourse(e.target.value)}
          />
          <input
            type="text"
            placeholder="College"
            value={college}
            onChange={(e) => setCollege(e.target.value)}
          />
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
          <button type="submit">Sign Up</button>
          <p className="message">
            Already registered? <a href="/">Sign In</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default Signup