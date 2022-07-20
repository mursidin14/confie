import React from 'react';
import PersonalCard from 'components/Dashboard/PersonalCard';
import ClassCard from 'components/Dashboard/ClassCard';
import TargetCard from 'components/Dashboard/TargetCard';
import EmailVerifiedCard from 'components/EmailVerifiedCard';
import Slider from 'components/Widgets/Slider';
import CandidateProvider, {
  useCandidateContext,
} from 'context/candidate-context';
import SkeletonCard from 'components/SkeletonCard';

export default function Dashboard() {
  return (
    <CandidateProvider
      PageName={'Dashboard'}
      slider
      needDashboard
    >
      <PersonalCardContainer />
      <div className='lg:my-28'></div>
      <Slider></Slider>
    </CandidateProvider>
  );
}

function PersonalCardContainer() {
  const { loading, dashboard, profile } = useCandidateContext();
  React.useEffect(() => {}, [loading]);
  return (
    <div className="my-4 mx-3 py-5 lg:mx-7">
      {!loading ? (
        <>
          {dashboard.email_verified_at ? <></> : <EmailVerifiedCard />}
          <PersonalCard data_profile={profile} />
          <div className="gap-5 lg:flex">
            <ClassCard />
            <TargetCard data_plan={dashboard.personaldevplan} />
          </div>
        </>
      ) : (
        <SkeletonCard />
      )}
    </div>
  );
}
