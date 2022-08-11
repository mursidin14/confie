import React, { useState } from 'react';
import JobApplicationCard from 'pages/Candidate/Job/JobApplicationCard';
import { getPublicJobVacancy } from 'services/Profile/JobVacancy';
export default function JobFeedPublic({ idCompany }) {
  const [items, setItems] = useState([]);
  React.useEffect(() => {
    const getJob = async () => {
      if (idCompany !== undefined) {
        const response = await getPublicJobVacancy(idCompany);
        setItems(response.data.data.data);
      }
    };
    getJob();
  }, [idCompany]);
  return (
    <>
      {items.length === 0 && (
        <div className="mt-6">
          <p className="text-xs italic text-gray-500">
            Sorry, There's No Job Vacancy
          </p>
        </div>
      )}
      <section className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((item, index) => (
          <JobApplicationCard
            isPublic
            key={index}
            item={item}
          ></JobApplicationCard>
        ))}
      </section>
    </>
  );
}
