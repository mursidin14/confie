import React, { useState } from 'react';
import Layout from 'components/Layout/Layout';
import PersonalCard from 'components/Dashboard/PersonalCard';
import ClassCard from 'components/Dashboard/ClassCard';
import TargetCard from 'components/Dashboard/TargetCard';
import { useParams } from "react-router-dom";

export default function Dashboard() {
  const { id } = useParams();
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
