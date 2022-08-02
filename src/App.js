import './App.css';
import Login from 'pages/Login';
import Register from 'pages/Register/RegisterForm';
import Forgot from 'pages/Forgot';

import Dashboard from 'pages/Candidate/Dashboard';
import ResumeComplete from 'pages/Candidate/ResumeComplete';
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
import CarrerMap from 'pages/Candidate/CarrerGuide/CarrerMap';
import ExplorationCarrer from 'pages/Candidate/CarrerGuide/ExplorationCarrer';
import FAQ from 'pages/Candidate/Help/FAQ';
import Billing from 'pages/Candidate/Help/Billing';
import AccountSettingBusiness from 'pages/Candidate/AccountSettingBusiness ';
import UpdateJobVacancy from 'pages/Business/UpdateJoVacancy';
import Home from 'pages/Home';
import Notification from 'pages/Candidate/Notification';
import NotificationBusiness from 'pages/Business/NotificationBusiness';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        <Route path="/reset-password" element={<NewPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/cv/preview" element={<ResumeComplete />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/:id" element={<ProfileCandidate />} />
        <Route path="/setting" element={<AccountSetting />} />
        <Route path="/pdp" element={<PersonalDevelopment />} />
        <Route path="/pdp/detail/:idDetail" element={<PersonalDevelopmentDetail />} />
        <Route path="/guide/map" element={<CarrerMap />} />
        <Route path="/guide/exploration" element={<ExplorationCarrer />} />
        <Route path="/lowongan" element={<Jobs />}/>
        <Route path="/lowongan/detail-job/:idDetail" element={<JobDetail />} />
        <Route path="/lamaran/" element={<Application />} />
        <Route path="/lamaran/detail/:id" element={<ApplicationDetail />} />
        <Route path="/kelas" element={<Class />} />
        <Route path="/kelas/detailKelas/detail" element={<ClassDetail />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/billing" element={<Billing />} />
        
        <Route path="/business" element={<Business />} />
        <Route path="/business/profile" element={<BusinessProfile />} />
        <Route path="/business/team" element={<TeamMember />} />
        <Route path="/business/job" element={<JobVacancy />} />
        <Route path="/business/job/create" element={<OpenJobVacancy />} />
        <Route path="/business/job/detail/:idJob" element={<JobVacancyDetail />} />
        <Route path="/business/job/update/:idJob" element={<UpdateJobVacancy />} />
        <Route path='/setting-business' element={<AccountSettingBusiness />} />
        <Route path="/business/talent" element={<TalentPool />} />
        <Route path="/company/:id" element={<CompanyDetail />} />
        
        <Route path="/notifications" element={<Notification />} />
        <Route path="/notifications-business" element={<NotificationBusiness />} />
        <Route path='/under' element={<UnderConstruction />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
