import React, { useState } from 'react'
import JobApplicationCard from 'pages/Candidate/Job/JobApplicationCard';
export default function JobFeed({items}) {
  return (
    <section className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10'>
        {items.map((item, index) => (
          <JobApplicationCard key={index} item={item}></JobApplicationCard>
        ))}
    </section>
  )
}
