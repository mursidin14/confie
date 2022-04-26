import './App.css';
import Login from 'pages/Login';
import Register from 'pages/Register/RegisterForm';
import Dashboard from 'pages/Dashboard';
import Profile from 'pages/Profile';
import PersonalDevelopment from 'pages/PersonalDevelopment';

import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/pdp/:id" element={<PersonalDevelopment />} />
      </Routes>
    </div>
  );
}

export default App;
