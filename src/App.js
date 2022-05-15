import './App.css';
import Login from 'pages/Login';
import Register from 'pages/Register/RegisterForm';
import Dashboard from 'pages/Dashboard';
import Profile from 'pages/Profile';
import ProfileCandidate from 'pages/ProfileCandidate';
import PersonalDevelopment from 'pages/DevelopmentPlan/PersonalDevelopment';
import PersonalDevelopmentDetail from 'pages/DevelopmentPlan/PersonalDevelopmentDetail';
import CurriculumVitae from 'components/CurriculumVitae';
import Jobs from 'pages/Job/Jobs';
import JobDetail from 'pages/Job/JobDetail';
import Application from 'pages/Application/Application';
import ApplicationDetail from 'pages/Application/ApplicationDetail';
import NotFound from 'pages/NotFound';
import { Routes, Route, Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
        <Route path="/cv" element={<CurriculumVitae />} />
        <Route path="/profile/:id" element={<Profile />} />
        <Route path="/:id" element={<ProfileCandidate />} />
        <Route path="/pdp/:id" element={<PersonalDevelopment />} />
        <Route path="/pdp/:id/detail/:idDetail" element={<PersonalDevelopmentDetail />} />
        <Route path="/lowongan/:id" element={<Jobs />}/>
        <Route path="/lowongan/:id/detailJob/:idDetail" element={<JobDetail />} />
        <Route path="/lamaran/:id" element={<Application />} />
        <Route path="/detailApplication" element={<ApplicationDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
