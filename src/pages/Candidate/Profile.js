import React, { useState, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import PersonalInfomationCard from 'components/Profile/PersonalInfomationCard';
import AboutMeCard from 'components/Profile/AboutMeCard';
import SkillCard from 'components/Profile/SkillCard';
import WorkExperienceCard from 'components/Profile/WorkExperienceCard';
import InternExperienceCard from 'components/Profile/InternExperienceCard';
import EducationCard from 'components/Profile/EducationCard';
import CertificationCard from 'components/Profile/CertificationCard';
import ProfileService from 'services/Profile/ProfileService';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import OrganizationCard from 'components/Profile/OrganizationCard';
import AddSection from 'components/Modal/AddSection';
import { isEmpty } from 'utils/utils';

export default function Profile() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = 'Profile';
    async function fetchData() {
      const response_profile = await ProfileService.getProfileData();
      setData({
        profile: response_profile.data.data,
      });
      localStorage.setItem("user", JSON.stringify(response_profile.data.data));
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Layout PageName={'Profile'}>
      {loading ? (
        <SkeletonCard />
      ) : (
        <PersonalInfomationCard data_profile={data.profile} />
      )}
      {loading ? <SkeletonCard /> : <AboutMeCard data_profile={data.profile} />}
      {loading ? (
        <SkeletonCard />
      ) : (
        <SkillCard data_skills={data.profile.skills} />
      )}
      {loading ? (
        <SkeletonCard />
      ) : (
        <>
          {data.profile.experiences.length > 0 ? (
            <WorkExperienceCard data_profile={data.profile.experiences} />
          ) : null}
        </>
      )}
      {loading ? (
        <SkeletonCard />
      ) : (
        <>
          {data.profile.internships.length > 0 ? (
            <InternExperienceCard data_profile={data.profile.internships} />
          ) : null}
        </>
      )}
      {loading ? (
        <SkeletonCard />
      ) : (
        <>
          {data.profile.educations.length > 0 ? (
            <EducationCard data_profile={data.profile.educations} />
          ) : null}
        </>
      )}
      {loading ? (
        <SkeletonCard />
      ) : (
        <>
          {data.profile.volunteers.length > 0 ? (
            <OrganizationCard data_profile={data.profile.volunteers} />
          ) : null}
        </>
      )}
      {loading ? (
        <SkeletonCard />
      ) : (
        <>
          {data.profile.certificates.length > 0 ? (
            <CertificationCard data_profile={data.profile.certificates} />
          ) : null}
        </>
      )}
      {loading ? (
        <SkeletonCard />
      ) : (
        <>
         <div className='flex items-center justify-center'>
          {isEmpty([data.profile.certificates, data.profile.experiences, data.profile.internships, data.profile.certificates, data.profile.educations]) ? 
            <AddSection action={'Add Section'} experiences={data.profile.experiences} educations={data.profile.educations} internships={data.profile.internships} volunteers={data.profile.volunteers} awards={data.profile.certificates}></AddSection>
          : <>
          <p className='text-xs text-gray-400 mt-5 '>No more section to add</p></>}
          </div>
        </>
      )}
      
    </Layout>
  );
}

function SkeletonCard() {
  return (
    <div className="mt-4 rounded-md bg-white py-7 shadow-mine first:mt-0 ">
      <div className="hidden flex-col items-start justify-start gap-2 px-8 lg:flex">
        <Skeleton width={100} height={40} />
        <Skeleton width={750} height={200} />
      </div>
      <div className="flex flex-col items-start justify-start gap-2 px-8 lg:hidden">
        <Skeleton width={100} height={40} />
        <Skeleton width={250} height={200} />
      </div>
    </div>
  );
}
