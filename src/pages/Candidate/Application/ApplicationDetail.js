import React from 'react';
import BasicJobInformation from 'pages/Candidate/Job/BasicJobInformation';
import useGetApplicationDetail from './useGetApplicationDetail';
import CandidateProvider from 'context/candidate-context';
export default function ApplicationDetail() {
  const { item, loading } = useGetApplicationDetail();

  return (
    <CandidateProvider PageName={'Lamaran Saya'}>
      {!loading && (
        <>
          <JobDetail item={item} />
          <StepApplication
            is_rejected={item.pivot.is_rejected}
            step={item.pivot.status}
          />
          <StepDescription />
        </>
      )}
    </CandidateProvider>
  );
}

function StepDescription() {
  return (
    <section className="w-full rounded-md bg-white p-8 text-left text-[#3F4254] shadow-mine">
      <h3 className="border-b border-solid pb-3 font-semibold">
        Seleksi Berkas
      </h3>
      <p className="mt-5 text-sm">
        Seleksi berkas is Lorem ipsum dolor sit amet, consectetur adipiscing
        elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat. Duis aute irure dolor in
        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
        qui officia deserunt mollit anim id est laborum.
      </p>
    </section>
  );
}

function StepApplication({ is_rejected, step }) {
  const accept_style = 'border-[#50CD89] bg-[#E8FFF3] text-[#50CD89]';
  const refuse_style = 'border-[#F1416C] bg-[#FFF5F8] text-[#F1416C]';
  const idle_style = 'border-[#7E8299] bg-[#F5F8FA] text-[#7E8299]';
  let steps = [
    {
      number: 1,
      title: 'Lamaran Diterima',
    },
    {
      number: 2,
      title: 'Seleksi Berkas',
    },
    {
      number: 3,
      title: 'Tes Online',
    },
    {
      number: 4,
      title: 'Wawancara',
    },
    {
      number: 5,
      title: 'SELESAI',
    },
  ];

  let status = {
    step: step,
    rejected: is_rejected,
  };
  return (
    <section className="my-6 flex w-full items-center justify-between gap-2 overflow-auto rounded-md bg-white p-8 text-left text-[#3F4254] shadow-mine">
      {steps.map((step, index) => (
        <div key={index}>
          <p
            className={`flex-1 rounded-md border p-3 text-center text-xs ${
              step.number <= status.step ? accept_style : idle_style
            } ${
              status.rejected && step.number <= status.step ? refuse_style : ''
            }`}
          >
            {step.title}
          </p>
          <svg
            className="last:hidden"
            width="51"
            height="12"
            viewBox="0 0 51 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50.5303 6.53033C50.8232 6.23744 50.8232 5.76256 50.5303 5.46967L45.7574 0.696699C45.4645 0.403806 44.9896 0.403806 44.6967 0.696699C44.4038 0.989593 44.4038 1.46447 44.6967 1.75736L48.9393 6L44.6967 10.2426C44.4038 10.5355 44.4038 11.0104 44.6967 11.3033C44.9896 11.5962 45.4645 11.5962 45.7574 11.3033L50.5303 6.53033ZM0 6.75H50V5.25H0V6.75Z"
              fill="#E5E5E5"
            />
          </svg>
        </div>
      ))}
    </section>
  );
}

function JobDetail({ item }) {
  return (
    <section className="w-full rounded-md bg-white p-8 text-left text-[#3F4254] shadow-mine">
      <h3 className="top-3 text-2xl lg:relative">Junior React Developer</h3>
      <div className="flex flex-col justify-between xl:flex-row">
        <BasicJobInformation item={item}></BasicJobInformation>
        <div className="top-4 mt-4 flex gap-4 lg:relative lg:mt-0 xl:justify-between">
          <div className="h-fit rounded-md bg-[#F5F8FA] p-4 ">
            <img className="md:w-fit" src="/job.png" alt="" />
          </div>
          <div className="w-[440px] text-left">
            <p className="mb-1 text-lg font-semibold">PT. Maju Jaya</p>
            <p className="text-sm">Jl. Alamat perusahaan pt jaya</p>
            <p className="my-1 text-sm">Berdiri sejak Mei 2012</p>
            <p className="text-sm leading-7">
              Company about Lorem ipsum dolor sit amet, consectetur adipiscing
              elit, sed do eiusmod tempor incididunt ut labore et dolore magna
              aliqua.{' '}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
