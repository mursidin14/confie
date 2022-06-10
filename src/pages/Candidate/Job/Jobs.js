import React, { useState } from 'react';
import Layout from 'components/Layout/Layout';
import SearchJob from 'components/SearchJob';
import JobApplicationCard from 'components/JobApplicationCard';
import Pagination from 'components/Widgets/Pagination';
import { useParams } from "react-router-dom";

export default function Jobs() {
  const [items, setItems] = useState([1,2,3,4,5,6,7,8,9,10,11,12,13]);
  const [pagination, setPagination] = useState({
    sliceOne: 0,
    sliceTwo: 4
  });
  const { id } = useParams();

  return (
    <Layout userId={id} PageName={'Lowongan Kerja'}>
      <SearchJob></SearchJob>
      <section className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-5 mt-10'>
        {items.slice(pagination.sliceOne, pagination.sliceTwo).map((item, index) => (
          <JobApplicationCard item={item} key={index}></JobApplicationCard>
        ))}
      </section>
      <div className='flex justify-center mt-3'>
      <Pagination length={items.length} pagination={pagination} setPagination={setPagination}></Pagination>
      </div>
    </Layout>
  );
}
