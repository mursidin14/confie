import React from 'react';
import Layout from 'components/Layout/Layout';
import PersonalInfomationCard from 'components/Profile/PersonalInfomationCard';
import AboutMeCard from 'components/Profile/AboutMeCard';
import SkillCard from 'components/Profile/SkillCard';
import WorkExperienceCard from 'components/Profile/WorkExperienceCard';
import InternExperienceCard from 'components/Profile/InternExperienceCard';
import EducationCard from 'components/Profile/EducationCard';
import CertificationCard from 'components/Profile/CertificationCard';
export default function Profile() {

  return (
    <Layout PageName={'Profile'}>
      <PersonalInfomationCard/>
      <AboutMeCard/>
      <SkillCard/>
      <WorkExperienceCard/>
      <InternExperienceCard/>
      <EducationCard/>
      <CertificationCard/>
    </Layout>
  );
}





