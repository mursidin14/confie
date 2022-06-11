import React, { useState, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import SearchJob from 'pages/Candidate/Job/SearchJob';
import Pagination from 'components/Widgets/Pagination';
import ProfileService from 'services/Profile/ProfileService';
import ModalError from 'components/Modal/ModalError';
import JobFeed from './JobFeed';

export default function Jobs() {
  const [items, setItems] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,
  ]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const [pagination, setPagination] = useState({
    sliceOne: 0,
    sliceTwo: 6,
  });
  const closeError = () => {
    window.location.href = '/dashboard';
  }
  useEffect(() => {
    async function fetchData() {
      const response_profile = await ProfileService.getProfileData();
      if (response_profile.data.meta.email_verified_at == null) {
        setError(true);
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  return (
    <>
      {!loading && !error && (
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
      {!loading && error && <ModalError error={error} closeModal={closeError} error_msg={`u haven't verify ur email`}></ModalError>}
    </>
  );
}
