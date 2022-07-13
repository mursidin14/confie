import LayoutBusiness from 'components/Layout/LayoutBusiness';
import BasicProfileBusiness from 'components/ProfileBusiness/BasicProfileBusiness';
import AboutCompany from 'components/ProfileBusiness/AboutCompany';
import InformationCompany from 'components/ProfileBusiness/InformationCompany';
import { useParams } from 'react-router-dom';
import GalleryCompany from 'components/ProfileBusiness/GalleryCompany';
import BusinessProfileProvider from 'context/business-profile-context';
import { BusinessProvider } from 'context/business-context';
import Skeleton from 'react-loading-skeleton';
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
            <div className="image-upload">
              <label className="cursor-pointer" for="file-input">
                <div className="flex h-full w-fit flex-col items-center justify-center gap-5 rounded-md bg-[#A1A5B7] p-10 text-white">
                  <svg
                    width="63"
                    height="63"
                    viewBox="0 0 63 63"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect
                      x="27.5071"
                      width="7.98592"
                      height="63"
                      rx="3.99296"
                      fill="white"
                    />
                    <rect
                      x="63"
                      y="27.5071"
                      width="7.98592"
                      height="63"
                      rx="3.99296"
                      transform="rotate(90 63 27.5071)"
                      fill="white"
                    />
                  </svg>

                  <p>Tambah Gambar</p>
                </div>
              </label>
              <input id="file-input" type="file" />
            </div>
          </GalleryCompany>
        </LayoutBusiness>
      </BusinessProvider>
    </BusinessProfileProvider>
  );
}


