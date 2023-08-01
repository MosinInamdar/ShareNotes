import React, { useState } from 'react';
import './styles.css';
import Navbar from './components/Login/Navbar';
import { BrowserRouter, Route, Routes, Navigate, useNavigate } from 'react-router-dom';
import Signup from './components/Login/Signup';
import Login from './components/Login/Login';
import Sidebar from './components/sidebar';
import Dashboard from './pages/Dashboard';
import Mydownloads from './pages/Mydownloads';
import Myuploads from './pages/Myuploads';
import Profile from './pages/Profile';
import UploadNotes from './pages/Uploadnotes';



function PrivateRoute({ element, path }) {
  // Check if the user is authenticated (you might have your own authentication logic here)
  const isAuthenticated = localStorage.getItem('authenticated') === 'true';

  // If the user is authenticated or the current path is the dashboard, allow rendering of the component
  if (isAuthenticated || path === '/dashboard') {
    return element;
  } else {
    // If the user is not authenticated and not accessing the Dashboard, redirect to the login page
    return <Navigate to="/" replace />;
  }
}


function DashboardLayout({ children }) {
  // You can include any additional layout components or styles here
  return (
    <div>
      <Sidebar />
      <div>{children}</div>
    </div>
  );
}

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  // Function to handle successful login
  const handleLogin = () => {
    // Perform your login logic here and set isLoggedIn to true if successful.
    // For example, you can make an API call to check the user's credentials.
    // For demonstration purposes, we are directly setting isLoggedIn to true here.
    localStorage.setItem('authenticated', 'true');
    setLoggedIn(true);
  };

  // Function to handle successful logout
  const handleLogout = () => {
    // Perform your logout logic here and set isLoggedIn to false.
    // For demonstration purposes, we are directly setting isLoggedIn to false here.
    localStorage.removeItem('authenticated');
    setLoggedIn(false);
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar isLoggedIn={isLoggedIn} onLogout={handleLogout} />
        <Routes>
          <Route path="/" element={<Login onLogin={handleLogin} />} />
          <Route path="/Signup" element={<Signup />} />
          <Route
            path="/dashboard"
            element={
              <DashboardLayout>
                <PrivateRoute element={<Dashboard />} />
              </DashboardLayout>
            }
          />
          <Route
            path="/myDownloads"
            element={
              <DashboardLayout>
                <PrivateRoute element={<Mydownloads />} />
              </DashboardLayout>
            }
          />
          <Route
            path="/Myuploads"
            element={
              <DashboardLayout>
                <PrivateRoute element={<Myuploads />} />
              </DashboardLayout>
            }
          />
          <Route
            path="/profile"
            element={
              <DashboardLayout>
                <PrivateRoute element={<Profile />} />
              </DashboardLayout>
            }
          />
          <Route
            path="/uploadnotes"
            element={
              <DashboardLayout>
                <PrivateRoute element={<UploadNotes />} />
              </DashboardLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;