import React, { useState, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import PersonalCard from 'components/Dashboard/PersonalCard';
import ClassCard from 'components/Dashboard/ClassCard';
import TargetCard from 'components/Dashboard/TargetCard';
import ProfileService from 'services/Profile/ProfileService';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import PersonalPlanService from 'services/PersonalPlan/PersonalPlan';

export default function Dashboard() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response_profile = await ProfileService.getProfileData();
      const response_personal_plan =
        await PersonalPlanService.getPersonalPlanData();
      setData({
        profile: response_profile.data.data,
        personal_plan: response_personal_plan?.data?.data,
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
        <article className="rounded-md bg-[#FFF6E7] py-7 px-3 shadow-mine sm:px-8 flex items-center gap-5 mb-5">
          <svg
            className="w-12 h-12"
            width="29"
            height="17"
            viewBox="0 0 29 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.3"
              d="M26.875 16.75H2.125C1.3 16.75 0.75 16.2 0.75 15.375V1.625C0.75 0.8 1.3 0.25 2.125 0.25H26.875C27.7 0.25 28.25 0.8 28.25 1.625V15.375C28.25 16.2 27.7 16.75 26.875 16.75Z"
              fill="#FE9A00"
            />
            <path
              d="M13.6751 10.5625C14.2251 10.975 14.9126 10.975 15.3251 10.5625L27.7001 0.662568C27.4251 0.387568 27.1501 0.25 26.7376 0.25H2.12508C1.71258 0.25 1.4376 0.387568 1.1626 0.662568L13.6751 10.5625Z"
              fill="#FE9A00"
            />
          </svg>
          <div className='text-left'>
            <h3 className='text-lg font-semibold text-black'>Email anda belum terverifikasi!</h3>
            <p className='text-sm'>Silahkan klik tombol atau link verifikasi pada email yang dikirimkan oleh confie.id ke email anda. Apabila anda tidak menerima email apapun, silahkan periksa atau ganti email anda pada <a href="/setting" className='text-[#7588CD] italic font-semibold'>Account Setting</a> atau kirim ulang email verifikasi <a href="" className='text-[#7588CD] italic font-semibold'>klik disini</a></p>
          </div>
        </article>
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
