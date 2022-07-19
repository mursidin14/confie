import React, { useState, useEffect } from 'react';
import Layout from 'components/Layout/Layout';
import SearchJob from 'pages/Candidate/Job/SearchJob';
import Pagination from 'components/Widgets/Pagination';
import JobFeed from './JobFeed';
import UnderConstruction from 'pages/UnderConstruction';
import {
  getAllJobVacancy,
  getFilteredJobVacancy,
} from 'services/Profile/JobVacancy';
import SkeletonCard from 'components/SkeletonCard';
import CandidateProvider from 'context/candidate-context';

export default function Jobs() {
  const [isFilter, setisFilter] = useState(false);
  const [filter, setFilter] = useState({
    position: '',
  });
  const [pagination, setPagination] = useState({
    sliceOne: 0,
    sliceTwo: 6,
  });
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);
  useEffect(() => {
    const getJobVacancy = async () => {
      const response = await getAllJobVacancy();
      setItems(response.data.data.data);
      setLoading(false);
    };
    getJobVacancy();
  }, []);
  const resetFilter = async () => {
    setisFilter(false);
    setFilter({
      position: '',
    });
    setPagination({
      sliceOne: 0,
      sliceTwo: 6,
    });
    const response = await getAllJobVacancy();
    setItems(response.data.data.data);
  };
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter({ ...filter, [name]: value });
  };
  const handleFilter = async () => {
    setisFilter(true);
    setLoading(true);
    const { data } = await getFilteredJobVacancy(filter);
    setItems(data.data.data);
    setLoading(false);
  };
  return (
    <>
      <CandidateProvider PageName={'Lowongan Kerja'}>
      {loading && <SkeletonCard />}
      {!loading && (
            <>
              <SearchJob handleFilter={handleFilter} handleFilterChange={handleFilterChange} handleResetFilter={resetFilter} isFilter={isFilter}></SearchJob>
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
            </>
          )}
      </CandidateProvider>
      
    </>
  );
}

  