import React, { Fragment, useState, useEffect } from 'react';
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
import { Dialog, Transition } from '@headlessui/react';

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
  const [notVerified, setNotVerified] = useState(false);
  useEffect(() => {
    const getJobVacancy = async () => {
      const response = await getAllJobVacancy();
      if (response.data.meta.code === 403) {
        setNotVerified(true);
      }
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
      {false && (
        <>
          <CandidateProvider PageName={'Lowongan Kerja'}>
            {loading && <SkeletonCard />}
            {!loading && !notVerified && (
              <>
                <SearchJob
                  handleFilter={handleFilter}
                  handleFilterChange={handleFilterChange}
                  handleResetFilter={resetFilter}
                  isFilter={isFilter}
                ></SearchJob>
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
          <Transition appear show={notVerified} as={Fragment}>
            <Dialog
              as="div"
              className="relative z-10 overflow-y-auto"
              onClose={() => {}}
            >
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0"
                enterTo="opacity-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <div className="fixed inset-0 bg-black bg-opacity-50" />
              </Transition.Child>

              <div className="fixed inset-0 overflow-y-auto">
                <div className="flex min-h-full items-center justify-center p-4 text-center">
                  <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                  >
                    <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                      <div>
                        <div className="flex items-center justify-center p-8">
                          <img src="/email_alert.png" alt="" />
                        </div>
                        <p className="mx-auto w-full text-center text-[#7E8299] lg:w-[400px]">
                          Your email hasn't verified!. Please verify your email
                          address before access this page.
                        </p>
                        <button
                          onClick={() => {
                            window.location.href = '/dashboard';
                          }}
                          className="mt-1 w-full text-center text-xs font-semibold outline-none"
                        >
                          <p>Back to home</p>
                        </button>
                      </div>
                    </Dialog.Panel>
                  </Transition.Child>
                </div>
              </div>
            </Dialog>
          </Transition>
        </>
      )}
      {true && <UnderConstruction />}
    </>
  );
}
