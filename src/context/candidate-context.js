import Layout from 'components/Layout/Layout';
import ErrorModal from 'components/Widgets/ErrorModal';
import { createContext, useContext, useEffect, useState } from 'react';
import DashboardService from 'services/Dashboard/Dashboard';
import PersonalPlanService from 'services/PersonalPlan/PersonalPlan';
import ProfileService from 'services/Profile/ProfileService';

const CandidateContext = createContext({
  empty: true,
});

export const useCandidateContext = () => {
  return useContext(CandidateContext);
};

export default function CandidateProvider({
  children,
  needDashboard,
  needPlan,
  PageName,
  slider,
}) {
  const [loading, setLoading] = useState(true);
  const [dashboard, setDashboard] = useState({});
  const [profile, setProfile] = useState({});
  const [plan, setPlan] = useState({});
  const [isOpen, setIsOpen] = useState(false);
  function closeModal() {
    setIsOpen(false);
    window.location.href = '/';
  }

  useEffect(() => {
    const getAllData = async () => {
      const responseProfile = await ProfileService.getProfileData();
      if(responseProfile.status === 401) {
        setIsOpen(true);
        return
      }
      setProfile(responseProfile.data.data)
      if (needDashboard) {
          const responseDashboard = await DashboardService.getDashboardData();
          setDashboard(responseDashboard.data)
      }
      if (needPlan) {
          const responsePlan = await PersonalPlanService.getPersonalPlanData();
          setPlan(responsePlan.data.data)
      }
      setLoading(false);
    };
    getAllData();
  }, []);

  const candidateContextValue = {
    loading,
    dashboard,
    profile,
    plan,
  };
  return (
    <CandidateContext.Provider value={candidateContextValue}>
      <Layout PageName={PageName} slider={slider}>
        {children}
      </Layout>
      <ErrorModal
        error_msg={['Unauthorized!']}
        isOpen={isOpen}
        closeModal={closeModal}
      ></ErrorModal>
    </CandidateContext.Provider>
  );
}
