import './App.css';
import Login from 'pages/Login';
import Register from 'pages/Register/RegisterForm';
import Dashboard from 'pages/Candidate/Dashboard';
import Profile from 'pages/Candidate/Profile';
import ProfileCandidate from 'pages/Candidate/ProfileCandidate';
import PersonalDevelopment from 'pages/Candidate/DevelopmentPlan/PersonalDevelopment';
import PersonalDevelopmentDetail from 'pages/Candidate/DevelopmentPlan/PersonalDevelopmentDetail';
import Jobs from 'pages/Candidate/Job/Jobs';
import JobDetail from 'pages/Candidate/Job/JobDetail';
import Application from 'pages/Candidate/Application/Application';
import ApplicationDetail from 'pages/Candidate/Application/ApplicationDetail';

import Business from 'pages/Business/Index';
import BusinessProfile from 'pages/Business/Profile';
import CompanyDetail from 'pages/Business/CompanyDetail';


import NotFound from 'pages/NotFound';
import { Routes, Route, Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/:id" element={<ProfileCandidate />} />
        <Route path="/pdp/:id" element={<PersonalDevelopment />} />
        <Route path="/pdp/:id/detail/:idDetail" element={<PersonalDevelopmentDetail />} />
        <Route path="/lowongan/:id" element={<Jobs />}/>
        <Route path="/lowongan/:id/detailJob/:idDetail" element={<JobDetail />} />
        <Route path="/lamaran/:id" element={<Application />} />
        <Route path="/detailApplication" element={<ApplicationDetail />} />

        <Route path="/business/:id" element={<Business />} />
        <Route path="/business/profile/:id" element={<BusinessProfile />} />
        <Route path="/company/:id" element={<CompanyDetail />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
