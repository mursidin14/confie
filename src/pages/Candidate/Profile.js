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

export default function Profile() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response_profile = await ProfileService.getProfileData();
      setData({
        profile: response_profile.data.data,
      });
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
      {loading ? (
        <SkeletonCard />
      ) : (
        <AboutMeCard data_profile={data.profile}/>
      )}
      {loading ? (
        <SkeletonCard />
      ) : (
        <SkillCard data_skills={data.profile.skills}/>
      )}
      {loading ? (
        <SkeletonCard />
      ) : (
        <WorkExperienceCard data_profile={data.profile.experiences}/>
      )}
      {loading ? (
        <SkeletonCard />
      ) : (
        <InternExperienceCard data_profile={data.profile.internships}/>
      )}
      {loading ? (
        <SkeletonCard />
      ) : (
        <EducationCard data_profile={data.profile.educations}/>
      )}
      {loading ? (
        <SkeletonCard />
      ) : (
        <CertificationCard data_profile={data.profile.certificates}/>
      )}
    </Layout>
  );
}

function SkeletonCard() {
  return (
    <div className="rounded-md bg-white py-7 shadow-mine mt-4 first:mt-0 ">
      <div className="lg:flex hidden flex-col items-start justify-start gap-2 px-8">
        <Skeleton width={100} height={40} />
        <Skeleton width={750} height={200} />
      </div>
      <div className="lg:hidden flex flex-col items-start justify-start gap-2 px-8">
        <Skeleton width={100} height={40} />
        <Skeleton width={250} height={200} />
      </div>
    </div>
  );
}
