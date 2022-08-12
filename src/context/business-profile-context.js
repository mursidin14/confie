import ProfileService from 'services/Profile/ProfileService';
import ErrorModal from 'components/Widgets/ErrorModal';

const { createContext, useContext, useState, useEffect } = require('react');

const UserBusinessProfileContext = createContext({
  empty: true,
});

export const useBusinessProfileContext = () => {
  return useContext(UserBusinessProfileContext);
};

export default function BusinessProfileProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [businessProfile, setBusinessProfile] = useState({});
  useEffect(() => {
    const getProfileData = async () => {
      setIsLoading(true);
      const response = await ProfileService.getProfileData();
      if (response.status === 401) {
        setIsOpen(true);
      }
      setBusinessProfile(response.data.data);
      setIsLoading(false);
    };
    getProfileData();
  }, []);
  const businessProfileContextValue = {
    isLoading,
    businessProfile,
  };
  return (
    <UserBusinessProfileContext.Provider value={businessProfileContextValue}>
      {children}
      {
        <ErrorModal
          error_msg={['Unauthorized!']}
          isOpen={isOpen}
          closeModal={() => {
            localStorage.removeItem('metadata');
            localStorage.removeItem('user');
            localStorage.removeItem('userComplete');
            window.location.href = '/';
          }}
        ></ErrorModal>
      }
    </UserBusinessProfileContext.Provider>
  );
}
