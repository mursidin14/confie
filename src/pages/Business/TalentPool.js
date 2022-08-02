import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import LayoutBusiness from 'components/Layout/LayoutBusiness';
import SearchTalent from 'components/SearchTalent';
import Pagination from 'components/Widgets/Pagination';
import { BusinessProvider, useBusinessContext } from 'context/business-context';
import AlertNotPremiumUser from 'components/Modal/AlertNotPremiumUser';
import useTalentPool from './useTalentPool';
import SkeletonCard from 'components/SkeletonCard';
import utils, { makeCapital } from 'utils/utils';
import { getFilteredTalentPool, getNextTalentPool } from 'services/Business/TalentPool/TalentPool';
export default function TalentPool() {
  const { id } = useParams();
  const { items, loading, pages } = useTalentPool();
  const [dataTalent, setDataTalent] = React.useState([]);
  const [page, setPage] = React.useState({});
  const [isFilter, setIsFilter] = React.useState(false);
  const [filter, setFilter] = useState({
    full_name: '',
    availability: '',
    skills: '',
    country: '',
  });
  const [isLoading, setIsLoading] = React.useState(false);
  const [current_page, setCurrentPage] = React.useState(1);
  React.useEffect(() => {
    setDataTalent(items);
    setPage(pages);
  }, [loading]);
  const handleFilter = async () => {
    setIsLoading(true);
    setIsFilter(true);
    const filteredItem = () => {
      for (let key in filter) {
        if (filter[key] === '') {
          delete filter[key];
        }
      }
      let filterName = '?';
      for (let key in filter) {
        if (key === 'skills') {
          filterName += `${key}[]=${filter[key]}&`;
        } else {
          filterName += `${key}=${filter[key]}&`;
        }
      }
      return filterName;
    };
    const filterItem = filteredItem();
    const response = await getFilteredTalentPool(filterItem);
    setDataTalent(response);
    setIsLoading(false);
  };
  const handleReset = () => {
    setIsFilter(false);
    setDataTalent(items);
  };
  const handleNext = async () => {
    setIsLoading(true);
    const response = await getNextTalentPool(current_page + 1);
    setDataTalent(response.items);
    setPage(response.response);
    setCurrentPage(current_page + 1);
    setIsLoading(false);
  };
  const handlePrevious = async () => {
    setIsLoading(true);
    const response = await getNextTalentPool(current_page - 1);
    setDataTalent(response.items);
    setPage(response.response);
    setCurrentPage(current_page - 1);
    setIsLoading(false);
  };
  return (
    <>
      {loading && (
        <>
          <main className="flex min-h-screen flex-col items-center justify-center">
            <img className="animate-pulse" src="/logo.png" alt="" />
          </main>
        </>
      )}
      {!loading && (
        <>
          <BusinessProvider>
            <LayoutBusiness userId={id} PageName="Talent Pool">
              <SearchTalent
                handleFilter={handleFilter}
                handleReset={handleReset}
                isFilter={isFilter}
                setFilter={setFilter}
                setIsFilter={setIsFilter}
                filter={filter}
              ></SearchTalent>
              {dataTalent.length === 0 && (
                <p className="mt-5 text-xs italic text-gray-400">
                  No users found!
                </p>
              )}
              {!isLoading && <FeedTalent items={dataTalent} />}
              <div className='flex items-center'>
                <button disabled={page?.current_page === 1} className={`${page?.current_page === 1 ? 'bg-gray-500 text-gray-300' : 'bg-orange text-white'}  py-2 px-3 rounded-l-md text-sm`} onClick={handlePrevious}>Previous</button>
                <button disabled={page?.current_page === page.last_page} className={`${page?.current_page === page.last_page ? 'bg-gray-500 text-gray-300' : 'bg-orange text-white'} py-2 px-3 rounded-r-md text-sm`} onClick={handleNext}>Next</button>
              </div>
            </LayoutBusiness>
            <AlertNotPremiumUser />
          </BusinessProvider>
        </>
      )}
      <></>
    </>

    // <UnderConstruction />
  );
}

function FeedTalent({ items }) {
  const { business } = useBusinessContext();
  const isNotPremium = business.premium_until === null;
  return (
    <>
      {!isNotPremium && (
        <>
          <section className="mt-7 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, index) => (
              <TalentCard key={index} item={item} />
            ))}
          </section>
        </>
      )}
    </>
  );
}

function TalentCard({ item }) {
  const getJob = (exp) => {
    if (exp.length === 0) {
      return '-';
    }
    const current_job = exp.filter((item) => item.is_current === true);
    if (current_job.length === 0) {
      return '-';
    } else {
      return current_job[0].position;
    }
  };

  return (
    <div className="my-3 flex flex-col items-center justify-between gap-3 rounded-md bg-white py-7 shadow-mine">
      <div className="flex flex-col items-center justify-between gap-1">
        <img
          className="h-20 w-20 rounded-full object-cover"
          src={`${
            item.url_photo_profile
              ? `${process.env.REACT_APP_API_URL}/${item.url_photo_profile}`
              : item.gender === 'L'
              ? '/male.jpg'
              : '/female.jpg'
          }`}
          alt=""
        />
        <p className="text-lg font-semibold">{makeCapital(item.full_name)}</p>
        <p className="relative bottom-2 text-sm text-[#7E8299]">
          {getJob(item.experiences)}
        </p>
        <div className="relative bottom-2 flex items-center justify-center gap-2">
          <svg
            className="fill-[#FFA054]"
            width="7"
            height="7"
            viewBox="0 0 7 7"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="3.5" cy="3.5" r="3.5" />
          </svg>
          <p className="text-xs text-[#7E8299] ">
            {utils.isWork(item.experiences) ? 'Bekerja' : 'Belum Bekerja'}
          </p>
        </div>
        <SkillContainer skills={item.skills} />
      </div>
      <a
        className="flex items-center justify-center gap-2 rounded-md bg-[#F5F8FA] px-4 py-3 text-xs"
        href={`/${item.slug}`}
      >
        <svg
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.6"
            fillRule="evenodd"
            clipRule="evenodd"
            d="M4.69535 6.10256C3.54276 6.10256 2.6084 5.18417 2.6084 4.05128C2.6084 2.91839 3.54276 2 4.69535 2C5.84795 2 6.78231 2.91839 6.78231 4.05128C6.78231 5.18417 5.84795 6.10256 4.69535 6.10256ZM9.91236 6.10258C9.62422 6.10258 9.39062 5.86899 9.39062 5.58084V4.56409H8.33891C8.05568 4.56409 7.82609 4.3345 7.82609 4.05127C7.82609 3.76805 8.05568 3.53845 8.33891 3.53845H9.39062V2.52175C9.39062 2.2336 9.62422 2.00001 9.91236 2.00001C10.2005 2.00001 10.4341 2.2336 10.4341 2.52175V3.53845H11.4872C11.7704 3.53845 12 3.76805 12 4.05127C12 4.3345 11.7704 4.56409 11.4872 4.56409H10.4341V5.58084C10.4341 5.86899 10.2005 6.10258 9.91236 6.10258Z"
            fill="#A1A5B7"
          />
          <path
            d="M0.000334197 10.8612C0.199107 8.65838 2.1856 7.53845 4.60684 7.53845C7.06216 7.53845 9.07943 8.59685 9.2297 10.8615C9.23569 10.9517 9.2297 11.2308 8.84446 11.2308C6.94417 11.2308 4.12037 11.2308 0.373078 11.2308C0.244468 11.2308 -0.0104932 10.9812 0.000334197 10.8612Z"
            fill="#A1A5B7"
          />
        </svg>
        <span className="text-[#A1A5B7]">Lihat Profile</span>
      </a>
    </div>
  );
}

function SkillContainer({ skills }) {
  return (
    <div className="flex flex-wrap items-center gap-2 px-5 text-xs">
      {skills.map((skill) => (
        <span className="rounded-full bg-[#FFAD89] px-7 py-1 text-white">
          {makeCapital(skill.name)}
        </span>
      ))}
    </div>
  );
}
