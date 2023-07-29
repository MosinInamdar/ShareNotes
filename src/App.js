import React from "react";
import "./styles.css";
import Navbar from "./components/Login/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Signup from "./components/Login/Signup";
import Login from "./components/Login/Login";
import Dashboard from "./pages/Dashboard.jsx";
import Mydownloads from "./pages/Mydownloads.jsx";
import Myuploads from "./pages/Myuploads";
import Profile from "./pages/Profile";
import UploadNotes from "./pages/Uploadnotes";
import Sidebar from "./components/sidebar";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Sidebar>
        <Routes>
            <Route exact path="/" element={<Dashboard />}/>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/myDownloads" element={<Mydownloads />} />
            <Route path="/Myuploads" element={<Myuploads />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/uploadnotes" element={<UploadNotes />} />
          </Routes>
          </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
