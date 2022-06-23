import React, { useState, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import PersonalCard from 'components/Dashboard/PersonalCard';
import ClassCard from 'components/Dashboard/ClassCard';
import TargetCard from 'components/Dashboard/TargetCard';
import ProfileService from 'services/Profile/ProfileService';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import PersonalPlanService from 'services/PersonalPlan/PersonalPlan';
import EmailVerifiedCard from 'components/EmailVerifiedCard';

export default function Dashboard() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    document.title = 'Dashboard';
    async function fetchData() {
      const response_profile = await ProfileService.getProfileData();
      const response_personal_plan = await PersonalPlanService.getPersonalPlanData();
      
      setData({
        profile: response_profile.data.data,
        personal_plan: response_personal_plan.data.data,
      });
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Layout PageName={'Dashboard'}>
      {loading ? (
        <SkeletonCard />
      ) : (
        <>
          {data.profile.email_verified_at === true ? (
            <></>
          ) : (
            <EmailVerifiedCard/>
          )}
        </>
      )}
      {loading ? (
        <SkeletonCard />
      ) : (
        <PersonalCard data_profile={data.profile} />
      )}
      <div className="gap-5 lg:flex">
        {loading ? <SkeletonCardSmall /> : <ClassCard />}
        {loading ? (
          <SkeletonCardSmall />
        ) : (
          <TargetCard data_plan={data.personal_plan} />
        )}
      </div>
    </Layout>
  );
}

function SkeletonCard() {
  return (
    <div className="my-3 rounded-md bg-white py-7 px-3 shadow-mine sm:px-8">
      <div className="flex items-start gap-3 lg:items-stretch">
        <Skeleton width={200} height={150} />
        <div className="hidden flex-col justify-between sm:flex">
          <Skeleton width={200} height={20} />
          <Skeleton width={200} height={100} />
          <Skeleton width={200} height={50} />
        </div>
        <div className="flex flex-col justify-between sm:hidden">
          <Skeleton width={100} height={20} />
          <Skeleton width={100} height={100} />
          <Skeleton width={100} height={50} />
        </div>
      </div>
    </div>
  );
}
function SkeletonCardSmall() {
  return (
    <div className="mt-5 w-full rounded-md bg-white py-7 px-3 shadow-mine sm:px-8">
      <div className="hidden flex-col items-start gap-2 lg:flex">
        <Skeleton width={100} height={50} />
        <Skeleton width={420} height={100} />
      </div>
      <div className="flex flex-col items-start gap-2 lg:hidden">
        <Skeleton width={100} height={50} />
        <Skeleton width={200} height={100} />
      </div>
    </div>
  );
}
