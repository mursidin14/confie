import CandidateProvider from 'context/candidate-context'
import React from 'react'

export default function Billing() {
  return (
    <CandidateProvider PageName={'Help'}>
      <div>Billing</div>
      </CandidateProvider>
  )
}
