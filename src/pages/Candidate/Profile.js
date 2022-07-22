import React from 'react';
import Layout from 'components/Layout/Layout';
import PersonalInfomationCard from 'components/Profile/PersonalInfomationCard';
import AboutMeCard from 'components/Profile/AboutMeCard';
import SkillCard from 'components/Profile/SkillCard';
import WorkExperienceCard from 'components/Profile/WorkExperienceCard';
import InternExperienceCard from 'components/Profile/InternExperienceCard';
import EducationCard from 'components/Profile/EducationCard';
import CertificationCard from 'components/Profile/CertificationCard';
import 'react-loading-skeleton/dist/skeleton.css';
import OrganizationCard from 'components/Profile/OrganizationCard';
import AddSection from 'components/Modal/AddSection';
import { isEmpty } from 'utils/utils';
import PaperCard from 'components/Profile/PaperCard';
import CurriculumVitaeModel from 'components/Profile/CurriculumVitaeModel';
import CandidateProvider, {
  useCandidateContext,
} from 'context/candidate-context';
import SkeletonCard from 'components/SkeletonCard';

export default function Profile() {
  return (
    <CandidateProvider PageName={'Profile'}>
      <ProfileContainer />
    </CandidateProvider>
  );
}

function ProfileContainer() {
  const { loading, profile } = useCandidateContext();
  return (
    <section>
      {loading ? (
        <SkeletonCard />
      ) : (
        <>
          <CurriculumVitaeModel />
          <PersonalInfomationCard data_profile={profile} />
          <AboutMeCard data_profile={profile} />
          <SkillCard data_skills={profile.skills} />
          <>
            {profile.experiences.length > 0 ? (
              <WorkExperienceCard data_profile={profile.experiences} />
            ) : null}
          </>
          <>
            {profile.internships.length > 0 ? (
              <InternExperienceCard data_profile={profile.internships} />
            ) : null}
          </>
          <>
            {profile.educations.length > 0 ? (
              <EducationCard data_profile={profile.educations} />
            ) : null}
          </>
          <>
            {profile.volunteers.length > 0 ? (
              <OrganizationCard data_profile={profile.volunteers} />
            ) : null}
          </>
          <>
            {profile.certificates.length > 0 ? (
              <CertificationCard data_profile={profile.certificates} />
            ) : null}
          </>
          <>
            {profile.papers.length > 0 ? (
              <PaperCard data_profile={profile.papers} />
            ) : null}
          </>
          <>
            <div className="flex items-center justify-center">
              {isEmpty([
                profile.certificates,
                profile.experiences,
                profile.internships,
                profile.educations,
                profile.volunteers,
                profile.papers,
              ]) ? (
                <AddSection
                  action={'Add Section'}
                  experiences={profile.experiences}
                  educations={profile.educations}
                  internships={profile.internships}
                  volunteers={profile.volunteers}
                  awards={profile.certificates}
                ></AddSection>
              ) : (
                <>
                  <p className="mt-5 text-xs text-gray-400 ">
                    No more section to add
                  </p>
                </>
              )}
            </div>
          </>
        </>
      )}
    </section>
  );
}
