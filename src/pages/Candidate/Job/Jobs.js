import React, { useState, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import SearchJob from 'pages/Candidate/Job/SearchJob';
import Pagination from 'components/Widgets/Pagination';
import JobFeed from './JobFeed';
import UnderConstruction from 'pages/UnderConstruction';

export default function Jobs() {
  const [items, setItems] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  ]);
  const [pagination, setPagination] = useState({
    sliceOne: 0,
    sliceTwo: 6,
  });
  return (
    <>
      {false && (
        <Layout PageName={'Lowongan Kerja'}>
          <SearchJob></SearchJob>
          <JobFeed
            items={items.slice(pagination.sliceOne, pagination.sliceTwo)}
          ></JobFeed>
          <div className="mt-3 flex justify-center">
            <Pagination
              length={items.length}
              pagination={pagination}
              setPagination={setPagination}
              howMany={6}
            ></Pagination>
          </div>
        </Layout>
      )}
      {true && (
          <>
            <UnderConstruction></UnderConstruction>
          </>
      )}
    </>
  );
}
