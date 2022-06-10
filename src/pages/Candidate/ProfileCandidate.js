import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileService from 'services/Profile/ProfileService';
import BasicInformation from './OnlineProfile/BasicInformation';
import EmploymentStatus from './OnlineProfile/EmploymentStatus';
import SkillInfomation from './OnlineProfile/SkillInformation';
import CertificationInformation from './OnlineProfile/CertificationInformation';
import EducationHistory from './OnlineProfile/EducationHistory';
import WorkExperience from './OnlineProfile/WorkExperience';
import IntershipExperience from './OnlineProfile/IntershipExperience';
import AboutMe from './OnlineProfile/AboutMe';
import utils from 'utils/utils';
export default function ProfileCandidate() {
  const { id } = useParams();
  const [notFound, setNotFound] = useState(false);
  const [dataProfile, setDataProfile] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response_profile = await ProfileService.getOnlineProfileData(id);
      if (response_profile.data.meta.status == 'error') {
        setNotFound(true);
        return;
      }
      setDataProfile(response_profile.data.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <>
      {loading && <>
        <main className='flex min-h-screen flex-col items-center justify-center'>
          <img className='animate-pulse' src="/logo.png" alt=""/>
        </main>
      </>}
      {notFound && (
        <main className="flex min-h-screen flex-col items-center justify-center">
          <p className="mb-5 text-9xl font-bold">😓</p>
          <p className="font-semibold">Profile Not Found!</p>
        </main>
      )}
      {!loading && (
        <main className="flex shadow-mine md:mx-auto md:w-fit lg:p-5">
          <section className="bg-dark-blue py-10 px-3 text-white sm:px-7 ">
            <div className="">
              <img
                className="mx-auto w-16 rounded-full sm:w-24 lg:w-32"
                src="/person.png"
                alt=""
              />
              <div className="mt-5 flex items-center justify-center gap-1 sm:gap-3">
                <p className="text-sm sm:text-lg">
                  {utils.makeCapital(dataProfile.full_name)}
                </p>
                <svg
                  className="h-5 w-5"
                  width="28"
                  height="28"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8023 2.2071C14.1416 -0.392601 17.8586 -0.392601 19.1979 2.2071C20.0028 3.76922 21.8183 4.52127 23.4919 3.98575C26.2773 3.09457 28.9056 5.72285 28.0144 8.50818C27.4789 10.1818 28.2309 11.9975 29.7931 12.8023C32.3928 14.1416 32.3928 17.8586 29.7931 19.1979C28.2309 20.0028 27.4789 21.8184 28.0144 23.4919C28.9056 26.2773 26.2773 28.9056 23.4919 28.0144C21.8184 27.4789 20.0028 28.2309 19.1979 29.7931C17.8586 32.3928 14.1416 32.3928 12.8023 29.7931C11.9975 28.2309 10.1818 27.4789 8.50818 28.0144C5.72285 28.9056 3.09457 26.2773 3.98575 23.4919C4.52127 21.8184 3.76922 20.0028 2.2071 19.1979C-0.392601 17.8586 -0.392601 14.1416 2.2071 12.8023C3.76922 11.9975 4.52127 10.1818 3.98575 8.50818C3.09457 5.72285 5.72285 3.09457 8.50818 3.98575C10.1818 4.52127 11.9975 3.76922 12.8023 2.2071Z"
                    fill="#00A3FF"
                  />
                  <path
                    d="M20.7607 11.3173C21.1012 10.9165 21.6287 10.8976 22.0293 11.2383C22.4302 11.5789 22.3717 12.1073 22.031 12.5081L15.7718 20.4265C15.4258 20.8336 14.8128 20.8765 14.4135 20.5215L10.1278 16.712C9.73464 16.3625 9.69924 15.7606 10.0487 15.3675C10.3981 14.9743 11.0001 14.939 11.3932 15.2883L14.9512 18.451L20.7607 11.3173Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="mt-1 text-center text-xs sm:text-sm">
                Teknik Informatika
              </p>
            </div>
            <EmploymentStatus />
            <BasicInformation data={dataProfile} />
            <SkillInfomation data={dataProfile.skills} />
            <CertificationInformation data={dataProfile.certificates} />
          </section>
          <section className="grow text-[#7E8299] lg:w-[500px]">
            <AboutMe data={dataProfile.about}></AboutMe>
            <WorkExperience data={dataProfile.experiences}></WorkExperience>
            <IntershipExperience
              data={dataProfile.internships}
            ></IntershipExperience>
            <EducationHistory data={dataProfile.educations}></EducationHistory>
          </section>
        </main>
      )}
    </>
  );
}
