import React, { useState } from 'react';
import Layout from 'components/Layout/Layout';
import PersonalCard from 'components/Dashboard/PersonalCard';
import ClassCard from 'components/Dashboard/ClassCard';
import TargetCard from 'components/Dashboard/TargetCard';
export default function Dashboard() {
  return (
    <Layout PageName={"Dashboard"}>
      <PersonalCard />
      <div className="gap-5 lg:flex">
        <ClassCard />
        <TargetCard />
      </div>
    </Layout>
  );
}
