import './App.css';
import Login from 'pages/Login';
import Register from 'pages/Register/RegisterForm';
import Forgot from 'pages/Forgot';

import Dashboard from 'pages/Candidate/Dashboard';
import Profile from 'pages/Candidate/Profile';
import ProfileCandidate from 'pages/Candidate/ProfileCandidate';
import AccountSetting from 'pages/Candidate/AccountSetting';
import PersonalDevelopment from 'pages/Candidate/DevelopmentPlan/PersonalDevelopment';
import PersonalDevelopmentDetail from 'pages/Candidate/DevelopmentPlan/PersonalDevelopmentDetail';
import Jobs from 'pages/Candidate/Job/Jobs';
import JobDetail from 'pages/Candidate/Job/JobDetail';
import Application from 'pages/Candidate/Application/Application';
import ApplicationDetail from 'pages/Candidate/Application/ApplicationDetail';
import Class from 'pages/Candidate/Class/Class';
import ClassDetail from 'pages/Candidate/Class/ClassDetail';

import Business from 'pages/Business/Index';
import BusinessProfile from 'pages/Business/Profile';
import CompanyDetail from 'pages/Business/CompanyDetail';
import TeamMember from 'pages/Business/TeamMember';
import JobVacancy from 'pages/Business/JobVacancy';
import OpenJobVacancy from 'pages/Business/OpenJobVacancy';
import JobVacancyDetail from 'pages/Business/JobVacancyDetail';
import TalentPool from 'pages/Business/TalentPool';

import NotFound from 'pages/NotFound';
import UnderConstruction from 'pages/UnderConstruction';
import NewPassword from 'pages/NewPassword';
import VerifyEmail from 'pages/VerifyEmail';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/new_password" element={<NewPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />

        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/:id" element={<ProfileCandidate />} />
        <Route path="/setting" element={<AccountSetting />} />
        <Route path="/pdp" element={<PersonalDevelopment />} />
        <Route path="/pdp/detail/:idDetail" element={<PersonalDevelopmentDetail />} />
        <Route path="/lowongan" element={<Jobs />}/>
        <Route path="/lowongan/detailJob/:idDetail" element={<JobDetail />} />
        <Route path="/lamaran/" element={<Application />} />
        <Route path="/detailApplication" element={<ApplicationDetail />} />
        <Route path="/kelas" element={<Class />} />
        <Route path="/kelas/detailKelas/detail" element={<ClassDetail />} />

        <Route path="/business/:id" element={<Business />} />
        <Route path="/business/profile/:id" element={<BusinessProfile />} />
        <Route path="/business/team/:id" element={<TeamMember />} />
        <Route path="/business/job/:id" element={<JobVacancy />} />
        <Route path="/business/:id/job/create" element={<OpenJobVacancy />} />
        <Route path="/business/:id/job/detail/:idJob" element={<JobVacancyDetail />} />
        <Route path="/business/talent/:id" element={<TalentPool />} />
        <Route path="/company/:id" element={<CompanyDetail />} />

        <Route path='/under' element={<UnderConstruction />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
