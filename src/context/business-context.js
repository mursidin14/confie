import { getCurrentUser } from 'services/Auth/AuthService';
const { createContext, useContext } = require('react');

export const BusinessContext = createContext({
  empty: true,
});

export const useBusinessContext = () => {
  return useContext(BusinessContext);
}

export function BusinessProvider({ children }) {
  const businessContextValue = {
    business: getCurrentUser(),
  };
  return (
    <BusinessContext.Provider value={businessContextValue}>
      {children}
    </BusinessContext.Provider>
  );
}
