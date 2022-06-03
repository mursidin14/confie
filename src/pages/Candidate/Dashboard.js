import React, { useState, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import PersonalCard from 'components/Dashboard/PersonalCard';
import ClassCard from 'components/Dashboard/ClassCard';
import TargetCard from 'components/Dashboard/TargetCard';
import ProfileService from 'services/Profile/ProfileService';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import PersonalPlanService from 'services/PersonalPlan/PersonalPlan';
import { useParams } from 'react-router-dom';

export default function Dashboard() {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response_profile = await ProfileService.getProfileData();
      const response_personal_plan =
        await PersonalPlanService.getPersonalPlanData();

      if (response_profile.data.meta.status == 'error') {
        window.location.href = '/';
      }
      setData({
        profile: response_profile.data.data,
        personal_plan: response_personal_plan.data.data,
      });
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <Layout userId={id} PageName={'Dashboard'}>
      {loading ? (
        <SkeletonCard />
      ) : (
        <PersonalCard id={id} data_profile={data.profile} />
      )}
      <div className="gap-5 lg:flex">
        {loading ? (
          <SkeletonCardSmall />
        ) : (
          <ClassCard id={id}  />
        )}
        {loading ? (
          <SkeletonCardSmall />
        ) : (
          <TargetCard userId={id} data_plan={data.profile} />
        )}
      </div>
    </Layout>
  );
}

function SkeletonCard() {
  return (
    <div className="rounded-md bg-white py-7 px-3 shadow-mine sm:px-8 ">
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
    <div className="rounded-md bg-white py-7 px-3 shadow-mine sm:px-8 mt-5 flex items-start flex-col gap-2">
      <Skeleton width={100} height={50} />
      <Skeleton width={200} height={150} />
    </div>
  );
}
