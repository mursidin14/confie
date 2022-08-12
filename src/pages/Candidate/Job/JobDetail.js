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
            <h3 className="top-3 text-2xl lg:relative">{item.title}</h3>
            <div className="flex flex-col justify-between xl:flex-row">
              <BasicJobInformation item={item}></BasicJobInformation>
              <DescriptionCompany item={item.users} />
            </div>
          </section>
          <section className="mt-10 w-full  bg-white p-8 text-left text-[#3F4254] shadow-mine">
            <div className="w-full lg:w-[600px]">
              <p className=" text-sm">
                {item.description}
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

function DescriptionCompany({
  item: { full_name, address, cityname, provincename, date_of_birth, about, url_photo_profile, slug},
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
			className="mb-1 text-lg hover:underline font-semibold text-blue-400"
		>
			{full_name.toUpperCase()}
		</a>
        <p className="text-sm">- {`${address} ${utils.makeCapital(
          cityname,
        )}, ${utils.makeCapital(provincename)}`}</p>
        <p className="my-1 text-sm">- Berdiri sejak tahun {date_of_birth.slice(0,4)}</p>
        <p className="text-sm leading-7">- {about}</p>
      </div>
    </div>
  );
}
