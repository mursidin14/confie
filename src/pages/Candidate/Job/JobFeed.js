import React, { useState } from 'react';
import JobApplicationCard from 'pages/Candidate/Job/JobApplicationCard';
export default function JobFeed({ items }) {
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
          <JobApplicationCard key={index} item={item}></JobApplicationCard>
        ))}
      </section>
    </>
  );
}
