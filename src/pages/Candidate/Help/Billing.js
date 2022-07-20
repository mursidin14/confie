import CandidateProvider from 'context/candidate-context';
import UnderConstruction from 'pages/UnderConstruction';
import React from 'react';

export default function Billing() {
  return (
    <>
      {false && (
        <CandidateProvider PageName={'Help'}>
          <div>Billing</div>
        </CandidateProvider>
      )}
      {true && <UnderConstruction />}
    </>
  );
}
