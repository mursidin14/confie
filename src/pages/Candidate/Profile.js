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

import { useParams } from 'react-router-dom';
export default function Profile() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response_profile = await ProfileService.getProfileData();
      const response_skill = await ProfileService.getSkill();
      const response_job_experience = await ProfileService.getJobExpreience();
      const response_intern_experience = await ProfileService.getIntershipExperience();
      const response_education = await ProfileService.getEducation();
      const response_certificate = await ProfileService.getCertificate();
      setData({
        profile: response_profile.data.data,
        skill: response_skill.data,
        job_experience: response_job_experience.data,
        intern_experience: response_intern_experience.data,
        education: response_education.data,
        certificate: response_certificate.data,
      });
      setLoading(false);
    }
    fetchData();
  }, []);
  return (
    <Layout userId={id} PageName={'Profile'}>
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
      <SkillCard />
      <WorkExperienceCard />
      <InternExperienceCard />
      <EducationCard />
      <CertificationCard />
    </Layout>
  );
}

function SkeletonCard() {
  return (
    <div className="rounded-md bg-white py-7 shadow-mine mt-4 first:mt-0 ">
      <div className="flex flex-col items-start justify-start gap-2 px-8">
        <Skeleton width={100} height={40} />
        <Skeleton width={300} height={200} />
      </div>
    </div>
  );
}
