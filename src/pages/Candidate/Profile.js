import React,{useState, useEffect} from 'react';
import Layout from 'components/Layout/Layout';
import PersonalInfomationCard from 'components/Profile/PersonalInfomationCard';
import AboutMeCard from 'components/Profile/AboutMeCard';
import SkillCard from 'components/Profile/SkillCard';
import WorkExperienceCard from 'components/Profile/WorkExperienceCard';
import InternExperienceCard from 'components/Profile/InternExperienceCard';
import EducationCard from 'components/Profile/EducationCard';
import CertificationCard from 'components/Profile/CertificationCard';
import ProfileService from 'services/Profile/ProfileService';
import { useParams } from "react-router-dom";
export default function Profile() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response_profile = await ProfileService.getProfileData();
      // const response_dashboard = await DashboardService.getDashboardData();
      // const response_online_profile = await ProfileService.getOnlineProfileData();
      setData(response_profile.data.data);
      setLoading(false);
    }
    fetchData();
  }, []);
  return (
    <Layout userId={id} PageName={'Profile'}>
      <PersonalInfomationCard data_profile={data}/>
      <AboutMeCard/>
      <SkillCard/>
      <WorkExperienceCard/>
      <InternExperienceCard/>
      <EducationCard/>
      <CertificationCard/>
    </Layout>
  );
}





