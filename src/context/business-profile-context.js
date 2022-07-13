const { createContext, useContext, useState, useEffect } = require('react');

const UserBusinessProfileContext = createContext({
  empty: true,
});

export const useBusinessProfileContext = () => {
  return useContext(UserBusinessProfileContext);
};

export default function BusinessProfileProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {}, []);
  const businessProfileContextValue = {
    isLoading,
    businessProfile: {},
  };
  return (
    <UserBusinessProfileContext.Provider value={businessProfileContextValue}>
      {children}
    </UserBusinessProfileContext.Provider>
  );
}
