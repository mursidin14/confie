import LayoutBusiness from 'components/Layout/LayoutBusiness';
import BasicProfileBusiness from 'components/ProfileBusiness/BasicProfileBusiness';
import AboutCompany from 'components/ProfileBusiness/AboutCompany';
import InformationCompany from 'components/ProfileBusiness/InformationCompany';
import { useParams } from 'react-router-dom';
import GalleryCompany from 'components/ProfileBusiness/GalleryCompany';
import BusinessProfileProvider from 'context/business-profile-context';
import { BusinessProvider } from 'context/business-context';
export default function Profile() {
  const { id } = useParams();
  return (
    <BusinessProfileProvider>
      <BusinessProvider>
        <LayoutBusiness userId={id} PageName={'Profile Perusahaan'}>
          <BasicProfileBusiness />
          <AboutCompany></AboutCompany>
          <InformationCompany></InformationCompany>
          <GalleryCompany>
          </GalleryCompany>
        </LayoutBusiness>
      </BusinessProvider>
    </BusinessProfileProvider>
  );
}


