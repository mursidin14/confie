import { getCurrentUser } from 'services/Auth/AuthService';
import { getJobVacancy } from 'services/Business/JobVacancy/JobVacancy';
const { createContext, useContext, useEffect, useState } = require('react');

export const BusinessContext = createContext({
  empty: true,
});

export const useBusinessContext = () => {
  return useContext(BusinessContext);
}

export function BusinessProvider({ children }) {
  const [jobVacancy, setJobVacancy] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getAllJobVacany = async () => {
      const response = await getJobVacancy();
      setJobVacancy(response.data.data.data);
    };
    getAllJobVacany();
    setLoading(false);
  }, []);
  const businessContextValue = {
    business: getCurrentUser(),
    jobVacancy,
    loading,
  };
  return (
    <BusinessContext.Provider value={businessContextValue}>
      {children}
    </BusinessContext.Provider>
  );
}
