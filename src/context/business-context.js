import { getCurrentUser } from 'services/Auth/AuthService';
import { getJobVacancy } from 'services/Business/JobVacancy/JobVacancy';
import { getTeamMember } from 'services/Business/TeamMember/TeamMember';
const { createContext, useContext, useEffect, useState } = require('react');

export const BusinessContext = createContext({
  empty: true,
});

export const useBusinessContext = () => {
  return useContext(BusinessContext);
}

export function BusinessProvider({ children }) {
  const [jobVacancy, setJobVacancy] = useState([]);
  const [teamMember, setTeamMember] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getAllJobVacany = async () => {
      const response = await getJobVacancy();
      const teamMember = await getTeamMember()
      setTeamMember(teamMember.data.data);
      setJobVacancy(response.data.data.data);
    };
    getAllJobVacany();
    setLoading(false);
  }, []);
  const businessContextValue = {
    business: getCurrentUser(),
    jobVacancy,
    teamMember,
    loading,
  };
  return (
    <BusinessContext.Provider value={businessContextValue}>
      {children}
      
    </BusinessContext.Provider>
  );
}
