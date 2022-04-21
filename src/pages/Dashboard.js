import React, { useState } from 'react';
import Layout from 'components/Layout';
import PersonalCard from 'components/PersonalCard';
import ClassCard from 'components/ClassCard';
import TargetCard from 'components/TargetCard';
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
