import React from 'react';
import Layout from 'components/Layout/Layout';
import BasicJobInformation from 'pages/Candidate/Job/BasicJobInformation';
import BasicDisclosure from 'components/Widgets/BasicDisclosure';
import ModalJobApplication from 'components/Modal/ModalJobApplication';
export default function JobDetail() {
  return (
    <Layout userId={'1'} PageName={'Lowongan Kerja'}>
      <section className="w-full bg-white  p-8 text-left text-[#3F4254] shadow-mine">
        <h3 className="lg:relative top-3 text-2xl">Junior React Developer</h3>
        <div className='flex flex-col justify-between xl:flex-row'>
          <BasicJobInformation></BasicJobInformation>
          <div className="flex xl:justify-between gap-4 lg:relative top-4 mt-4 lg:mt-0">
            <div className="h-fit rounded-md bg-[#F5F8FA] p-4 ">
              <img className='md:w-fit' src="/job.png" alt="" />
            </div>
            <div className="text-left w-[440px]">
              <p className="font-semibold text-lg mb-1">PT. Maju Jaya</p>
              <p className="text-sm">Jl. Alamat perusahaan pt jaya</p>
              <p className="text-sm my-1">Berdiri sejak Mei 2012</p>
              <p className="text-sm leading-7">Company about Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-white  p-8 text-left text-[#3F4254] shadow-mine mt-10">
        <div className='lg:w-[600px] w-full'>
          <p className=' text-sm'>First, a disclaimer – the entire process of writing a blog post often takes more than a couple of hours, even if you can type eighty words as per minute and your writing skills are sharp.</p>
          <div className='mt-10'>
            <ul>
              <li className='border-b-2 border-black/10 py-3'>
              <BasicDisclosure title={"Requirments"}></BasicDisclosure>
              </li>
              <li className='border-b-2 border-black/10 py-3'>
              <BasicDisclosure title={"What is your job role?"}></BasicDisclosure>
              </li>
              <li className='border-b-2 border-black/10 py-3'>
              <BasicDisclosure title={"Job Candidate Benefits"}></BasicDisclosure>
              </li>
              <li className='border-b-2 border-black/10 last:border-b-0 py-3'>
              <BasicDisclosure title={"Application Terms"}></BasicDisclosure>
              </li>
            </ul>
          </div>
        </div>
        <ModalJobApplication></ModalJobApplication>
      </section>
    </Layout>
  );
}
