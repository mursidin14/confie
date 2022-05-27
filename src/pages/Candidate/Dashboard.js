import React, { useState, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import PersonalCard from 'components/Dashboard/PersonalCard';
import ClassCard from 'components/Dashboard/ClassCard';
import TargetCard from 'components/Dashboard/TargetCard';
import DashboardService from 'services/Dashboard/Dashboard';
import ProfileService from 'services/Profile/ProfileService';
import { useParams } from "react-router-dom";

export default function Dashboard() {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
        const response = await DashboardService.getDashboardData();
        const response_profile = await ProfileService.getProfileData();
        const response_online_profile = await ProfileService.getOnlineProfileData();
        console.log(response)
        console.log(response_profile)
        console.log(response_online_profile)
    }
    fetchData();
  }, [])
  
  return (
    <Layout userId={id} PageName={"Dashboard"}>
      <PersonalCard />
      <div className="gap-5 lg:flex">
        <ClassCard />
        <TargetCard userId={id}/>
      </div>
    </Layout>
  );
}
