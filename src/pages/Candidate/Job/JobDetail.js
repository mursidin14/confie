import React, { useEffect, useState } from 'react';
import BasicJobInformation from 'pages/Candidate/Job/BasicJobInformation';
import BasicDisclosure from 'components/Widgets/BasicDisclosure';
import ModalJobApplication from 'components/Modal/ModalJobApplication';
import { getJobVacancyDetail } from 'services/Profile/JobVacancy';
import { useParams } from 'react-router-dom';
import CandidateProvider from 'context/candidate-context';
export default function JobDetail() {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  const { idDetail } = useParams();
  useEffect(() => {
    const getJobVacancy = async () => {
      const response = await getJobVacancyDetail(idDetail);
      console.log(response.data.data)
      setItem(response.data.data);
      setLoading(false);
    };
    getJobVacancy();
  }, []);
  return (
    <CandidateProvider PageName={'Lowongan Kerja'}>
      {!loading && (
        <>
          <section className="w-full bg-white  p-8 text-left text-[#3F4254] shadow-mine">
            <h3 className="top-3 text-2xl lg:relative">{item.title}</h3>
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
                    Company about Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.{' '}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="mt-10 w-full  bg-white p-8 text-left text-[#3F4254] shadow-mine">
            <div className="w-full lg:w-[600px]">
              <p className=" text-sm">
                First, a disclaimer – the entire process of writing a blog post
                often takes more than a couple of hours, even if you can type
                eighty words as per minute and your writing skills are sharp.
              </p>
              <div className="mt-10">
                <ul>
                  <li className="border-b-2 border-black/10 py-3">
                    <BasicDisclosure
                      items={item.requimentskill.map((list) => list.name)}
                      title={'Requirments'}
                    ></BasicDisclosure>
                  </li>
                  <li className="border-b-2 border-black/10 py-3">
                    <BasicDisclosure
                      items={item.responsibilitys}
                      title={'What is your job role?'}
                    ></BasicDisclosure>
                  </li>
                  <li className="border-b-2 border-black/10 py-3">
                    <BasicDisclosure
                      items={item.benefits}
                      title={'Job Candidate Benefits'}
                    ></BasicDisclosure>
                  </li>
                  <li className="border-b-2 border-black/10 py-3 last:border-b-0">
                    <BasicDisclosure
                      items={item.qualifications}
                      title={'Application Terms'}
                    ></BasicDisclosure>
                  </li>
                </ul>
              </div>
            </div>
            <ModalJobApplication item={item}></ModalJobApplication>
          </section>
        </>
      )}
    </CandidateProvider>
  );
}
