import React, { useState, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import PersonalCard from 'components/Dashboard/PersonalCard';
import ClassCard from 'components/Dashboard/ClassCard';
import TargetCard from 'components/Dashboard/TargetCard';
import DashboardService from 'services/Dashboard/Dashboard';
import { useParams } from "react-router-dom";

export default function Dashboard() {
  const { id } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
        const response = await DashboardService.getDashboardData();
        console.log(response)
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
