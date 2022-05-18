import React, { useState } from 'react'
import JobApplicationCard from 'components/JobApplicationCard';
export default function JobFeed() {
  const [first, setfirst] = useState([1,2,3,4])
  return (
    <section className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10'>
        {first.map((item, index) => (
          <JobApplicationCard key={index}></JobApplicationCard>
        ))}
    </section>
  )
}
