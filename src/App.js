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
import PrivateRoute from 'route/PrivateRoute';
import ProtectedRoute from 'route/ProtectedRoute';

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
        <Route path="/company/:id" element={<CompanyDetail />} />
        <Route path="/:id" element={<ProfileCandidate />} />

        {/* <Route path="/dashboard" element={<Dashboard />} />
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
        <Route path="/billing" element={<Billing />} /> */}

        {/* Route for personal */}
        <Route
          path="/dashboard"
          element={<PrivateRoute children={<Dashboard />} role="personal" />}
        />
        <Route
          path="/cv/preview"
          element={
            <PrivateRoute children={<ResumeComplete />} role="personal" />
          }
        />
        <Route
          path="/profile"
          element={<PrivateRoute children={<Profile />} role="personal" />}
        />
        <Route
          path="/setting"
          element={
            <PrivateRoute children={<AccountSetting />} role="personal" />
          }
        />
        <Route
          path="/pdp"
          element={
            <PrivateRoute children={<PersonalDevelopment />} role="personal" />
          }
        />
        <Route
          path="/pdp/detail/:idDetail"
          element={
            <PrivateRoute
              children={<PersonalDevelopmentDetail />}
              role="personal"
            />
          }
        />
        <Route
          path="/guide/map"
          element={<PrivateRoute children={<CarrerMap />} role="personal" />}
        />
        <Route
          path="/guide/exploration"
          element={
            <PrivateRoute children={<ExplorationCarrer />} role="personal" />
          }
        />
        <Route
          path="/lowongan"
          element={<PrivateRoute children={<Jobs />} role="personal" />}
        />
        <Route
          path="/lowongan/detail-job/:idDetail"
          element={<PrivateRoute children={<JobDetail />} role="personal" />}
        />
        <Route
          path="/lamaran/"
          element={<PrivateRoute children={<Application />} role="personal" />}
        />
        <Route
          path="/lamaran/detail/:id"
          element={
            <PrivateRoute children={<ApplicationDetail />} role="personal" />
          }
        />
        <Route
          path="/kelas"
          element={<PrivateRoute children={<Class />} role="personal" />}
        />
        <Route
          path="/kelas/detailKelas/detail"
          element={<PrivateRoute children={<ClassDetail />} role="personal" />}
        />
        <Route
          path="/faq"
          element={<PrivateRoute children={<FAQ />} role="personal" />}
        />
        <Route
          path="/billing"
          element={<PrivateRoute children={<Billing />} role="personal" />}
        />

        {/* <Route path="/business" element={<Business />} />
        <Route path="/business/profile" element={<BusinessProfile />} />
        <Route path="/business/team" element={<TeamMember />} />
        <Route path="/business/job" element={<JobVacancy />} />
        <Route path="/business/job/create" element={<OpenJobVacancy />} />
        <Route path="/business/job/detail/:idJob" element={<JobVacancyDetail />} />
        <Route path="/business/job/update/:idJob" element={<UpdateJobVacancy />} />
        <Route path='/setting-business' element={<AccountSettingBusiness />} />
        <Route path="/business/talent" element={<TalentPool />} />
        <Route path="/company/:id" element={<CompanyDetail />} /> */}

        {/* Route for business */}
        <Route
          path="/business"
          element={<PrivateRoute children={<Business />} role="business" />}
        />
        <Route
          path="/business/profile"
          element={
            <PrivateRoute children={<BusinessProfile />} role="business" />
          }
        />
        <Route
          path="/business/team"
          element={<PrivateRoute children={<TeamMember />} role="business" />}
        />
        <Route
          path="/business/job"
          element={<PrivateRoute children={<JobVacancy />} role="business" />}
        />
        <Route
          path="/business/job/create"
          element={
            <PrivateRoute children={<OpenJobVacancy />} role="business" />
          }
        />
        <Route
          path="/business/job/detail/:idJob"
          element={
            <PrivateRoute children={<JobVacancyDetail />} role="business" />
          }
        />
        <Route
          path="/business/job/update/:idJob"
          element={
            <PrivateRoute children={<UpdateJobVacancy />} role="business" />
          }
        />
        <Route
          path="/setting-business"
          element={
            <PrivateRoute
              children={<AccountSettingBusiness />}
              role="business"
            />
          }
        />
        <Route
          path="/business/talent"
          element={<PrivateRoute children={<TalentPool />} role="business" />}
        />

        {/* Route for all users 
        <Route path="/notifications" element={<Notification />} />
        <Route path="/notifications-business" element={<NotificationBusiness />} />
        <Route path='/under' element={<UnderConstruction />} /> */}

        <Route
          path="/notifications"
          element={<ProtectedRoute children={<Notification />} />}
        />
        <Route
          path="/business/notifications"
          element={<ProtectedRoute children={<NotificationBusiness />} />}
        />
        <Route
          path="/under"
          element={<ProtectedRoute children={<UnderConstruction />} />}
        />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
