import React, { useState } from 'react';
import Layout from 'components/Layout/Layout';
import SearchJob from 'components/SearchJob';
import JobApplicationCard from 'components/JobApplicationCard';
import Pagination from 'components/Widgets/Pagination';
import { useParams } from "react-router-dom";

export default function Jobs() {
  const [first, setfirst] = useState([1,2,3,4])
  const { id } = useParams();

  return (
    <Layout userId={id} PageName={'Lowongan Kerja'}>
      <SearchJob></SearchJob>
      <section className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10'>
        {first.map((item, index) => (
          <JobApplicationCard key={index}></JobApplicationCard>
        ))}
      </section>
      <div className='flex justify-center mt-3'>
      <Pagination></Pagination>
      </div>
    </Layout>
  );
}
