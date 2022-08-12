import React, { useEffect, useState } from 'react';
import BasicJobInformation from 'pages/Candidate/Job/BasicJobInformation';
import BasicDisclosure from 'components/Widgets/BasicDisclosure';
import ModalJobApplication from 'components/Modal/ModalJobApplication';
import { getJobVacancyDetail } from 'services/Profile/JobVacancy';
import { useParams } from 'react-router-dom';
import CandidateProvider from 'context/candidate-context';
import utils from 'utils/utils';
export default function JobDetail() {
  const [loading, setLoading] = useState(true);
  const [item, setItem] = useState([]);
  const { idDetail } = useParams();
  useEffect(() => {
    const getJobVacancy = async () => {
      const response = await getJobVacancyDetail(idDetail);
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
          {item.is_applied && (
              <section className='bg-[#FFF6E8] px-5 py-3 rounded-md border-[#F5A623] border-solid border'>
                <p className='text-lg font-semibold mb-2'>Informasi Penting</p>
                <div className='flex items-center gap-3'>
                <svg className='fill-[#F5A623]' width="1em" height="1em" fill="currentColor" viewBox="0 0 100 100"><path d="M50,0 C55.3100255,0 60.6197121,2.96755488 62.979422,7.71598379 L62.979422,7.71598379 L97.7875176,68.8517075 C100.737494,73.6001364 100.737494,79.5355873 97.7875176,84.2840162 C95.4274686,89.032104 90.7077096,92 84.8080956,92 L84.8080956,92 L15.1919044,92 C9.88187889,92 4.57219238,89.0324451 2.21248239,84.2840162 C-0.73749413,79.5355873 -0.73749413,73.6001364 2.21248239,68.8517075 L2.21248239,68.8517075 L37.020578,7.71598379 C39.9705545,2.96789598 44.6903135,0 50,0 Z M50,17 C46.4004137,17 44,19.8694251 44,22.6740999 L44,56.3259001 C44,59.1300377 46.3997242,62 50,62 C53.5995863,62 56,59.1305749 56,56.3259001 L56,22.6740999 C56,19.8694251 53.5995863,17 50,17 Z M50,82 C53.3137085,82 56,79.3137085 56,76 C56,72.6862915 53.3137085,70 50,70 C46.6862915,70 44,72.6862915 44,76 C44,79.3137085 46.6862915,82 50,82 Z"></path></svg>
                  <p className='text-sm'>Kamu sudah melamar pekerjaan ini. Silakan cek lamaran untuk pantau <a className='hover:underline text-blue-500' href={`/lamaran/detail/${item.id}`}>statusnya</a>.</p>
                </div>
              </section>
            )}
            <h3 className="top-3 text-2xl lg:relative">{item.title}</h3>
            <div className="flex flex-col justify-between xl:flex-row">
              <BasicJobInformation item={item}></BasicJobInformation>
              <DescriptionCompany item={item.users} />
            </div>
          </section>
          <section className="mt-10 w-full  bg-white p-8 text-left text-[#3F4254] shadow-mine">
            <div className="w-full lg:w-[600px]">
              <p className=" text-sm">{item.description}</p>
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
            {item.is_applied && (
              <>
                <button
                  type="button"
                  disabled
                  className="rounded-md bg-[#C6C6C6] text-white mt-10 w-fit px-5 py-3 text-sm"
                >
                  Lamar Posisi
                </button>
              </>
            )}
            {!item.is_applied && (
              <>
                <ModalJobApplication item={item}></ModalJobApplication>
              </>
            )}
          </section>
        </>
      )}
    </CandidateProvider>
  );
}

function DescriptionCompany({
  item: {
    full_name,
    address,
    cityname,
    provincename,
    date_of_birth,
    about,
    url_photo_profile,
    slug,
  },
}) {
  return (
    <div className="top-4 mt-4 flex gap-4 lg:relative lg:mt-0 xl:justify-between">
      <div className="h-fit rounded-md bg-[#F5F8FA] p-4 ">
        {url_photo_profile === null && (
          <img className="w-10" src={`/company_default.png`} alt="" />
        )}
        {url_photo_profile !== null && (
          <img
            className="w-10"
            src={`${process.env.REACT_APP_API_URL}/${url_photo_profile}`}
            alt=""
          />
        )}
      </div>
      <div className="w-[440px] text-left">
        <a
          href={`/company/${slug}`}
          className="mb-1 text-lg font-semibold text-blue-400 hover:underline"
        >
          {full_name.toUpperCase()}
        </a>
        <p className="text-sm">
          -{' '}
          {`${address} ${utils.makeCapital(cityname)}, ${utils.makeCapital(
            provincename,
          )}`}
        </p>
        <p className="my-1 text-sm">
          - Berdiri sejak tahun {date_of_birth.slice(0, 4)}
        </p>
        <p className="text-sm leading-7">- {about}</p>
      </div>
    </div>
  );
}
