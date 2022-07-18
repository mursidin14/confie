import React from 'react';
import LayoutBusiness from 'components/Layout/LayoutBusiness';
import { useParams } from 'react-router-dom';
import { BusinessProvider } from 'context/business-context';
import AlertEmailNotVerifiedBusiness from 'components/Modal/AlertEmailNotVerifiedBusiness';
import TeamMemberCard from 'components/ProfileBusiness/TeamMemberCard';
export default function TeamMember() {
  const { id } = useParams();
 

  return (
    <BusinessProvider>
      <LayoutBusiness userId={id} PageName="Team Member">
        <TeamMemberCard />
        <AlertEmailNotVerifiedBusiness />
      </LayoutBusiness>
    </BusinessProvider>
  );
}



