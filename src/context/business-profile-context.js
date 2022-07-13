import ProfileService from 'services/Profile/ProfileService';

const { createContext, useContext, useState, useEffect } = require('react');

const UserBusinessProfileContext = createContext({
  empty: true,
});

export const useBusinessProfileContext = () => {
  return useContext(UserBusinessProfileContext);
};

export default function BusinessProfileProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [businessProfile, setBusinessProfile] = useState({});
  useEffect(() => {
    const getProfileData = async () => {
      setIsLoading(true);
      const response = await ProfileService.getProfileData();
      setBusinessProfile(response.data.data);
      setIsLoading(false);
    }
    getProfileData();
  }, []);
  const businessProfileContextValue = {
    isLoading,
    businessProfile
  };
  return (
    <UserBusinessProfileContext.Provider value={businessProfileContextValue}>
      {children}
    </UserBusinessProfileContext.Provider>
  );
}
