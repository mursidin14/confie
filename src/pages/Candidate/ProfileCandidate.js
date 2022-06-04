import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProfileService from 'services/Profile/ProfileService';
import utils from 'utils/utils';
export default function ProfileCandidate() {
  const { id } = useParams();
  const [dataProfile, setDataProfile] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    async function fetchData() {
      const response_profile = await ProfileService.getOnlineProfileData(id);
      setDataProfile(response_profile.data.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  return (
    <main className="flex shadow-mine md:mx-auto md:w-fit lg:p-5">
      {loading && <div>Loading..</div>}
      {!loading && (
        <>
          <section className="bg-dark-blue py-10 px-3 text-white sm:px-7 ">
            <div className="">
              <img
                className="mx-auto w-16 rounded-full sm:w-24 lg:w-32"
                src="/person.png"
                alt=""
              />
              <div className="mt-5 flex items-center justify-center gap-1 sm:gap-3">
                <p className="text-sm sm:text-lg">
                  {utils.makeCapital(dataProfile.full_name)}
                </p>
                <svg
                  className="h-5 w-5"
                  width="28"
                  height="28"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.8023 2.2071C14.1416 -0.392601 17.8586 -0.392601 19.1979 2.2071C20.0028 3.76922 21.8183 4.52127 23.4919 3.98575C26.2773 3.09457 28.9056 5.72285 28.0144 8.50818C27.4789 10.1818 28.2309 11.9975 29.7931 12.8023C32.3928 14.1416 32.3928 17.8586 29.7931 19.1979C28.2309 20.0028 27.4789 21.8184 28.0144 23.4919C28.9056 26.2773 26.2773 28.9056 23.4919 28.0144C21.8184 27.4789 20.0028 28.2309 19.1979 29.7931C17.8586 32.3928 14.1416 32.3928 12.8023 29.7931C11.9975 28.2309 10.1818 27.4789 8.50818 28.0144C5.72285 28.9056 3.09457 26.2773 3.98575 23.4919C4.52127 21.8184 3.76922 20.0028 2.2071 19.1979C-0.392601 17.8586 -0.392601 14.1416 2.2071 12.8023C3.76922 11.9975 4.52127 10.1818 3.98575 8.50818C3.09457 5.72285 5.72285 3.09457 8.50818 3.98575C10.1818 4.52127 11.9975 3.76922 12.8023 2.2071Z"
                    fill="#00A3FF"
                  />
                  <path
                    d="M20.7607 11.3173C21.1012 10.9165 21.6287 10.8976 22.0293 11.2383C22.4302 11.5789 22.3717 12.1073 22.031 12.5081L15.7718 20.4265C15.4258 20.8336 14.8128 20.8765 14.4135 20.5215L10.1278 16.712C9.73464 16.3625 9.69924 15.7606 10.0487 15.3675C10.3981 14.9743 11.0001 14.939 11.3932 15.2883L14.9512 18.451L20.7607 11.3173Z"
                    fill="white"
                  />
                </svg>
              </div>
              <p className="mt-1 text-center text-xs sm:text-sm">
                Teknik Informatika
              </p>
            </div>
            <EmploymentStatus />
            <BasicInformation data={dataProfile} />
            <SkillInfomation data={dataProfile.skills} />
            <CertificationInformation data={dataProfile.certificates} />
          </section>
          <section className="w-fit text-[#7E8299] lg:w-[500px]">
            <AboutMe data={dataProfile.about}></AboutMe>
            <WorkExperience data={dataProfile.experiences}></WorkExperience>
            <IntershipExperience
              data={dataProfile.interships}
            ></IntershipExperience>
            <EducationHistory data={dataProfile.educations}></EducationHistory>
          </section>
        </>
      )}
    </main>
  );
}
function EmploymentStatus({}) {
  return (
    <p className="my-3 mx-auto w-fit rounded-sm bg-[#E8FFF3] px-2 py-1 text-[10px] text-xs text-[#50CD89] sm:px-5 sm:text-sm">
      Bekerja
    </p>
  );
}

function BasicInformation({ data }) {
  return (
    <section className="mt-10 space-y-5 text-xs sm:text-sm">
      <div className="flex items-center gap-2 sm:gap-5">
        <svg
          className="h-4 w-3"
          width="22"
          height="30"
          viewBox="0 0 22 30"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9.64219 29.25C6.65156 25.4883 0 16.3711 0 11.25C0 5.03672 4.92479 0 11 0C17.0729 0 22 5.03672 22 11.25C22 16.3711 15.2969 25.4883 12.3578 29.25C11.6531 30.1465 10.3469 30.1465 9.64219 29.25ZM11 15C13.0224 15 14.6667 13.3184 14.6667 11.25C14.6667 9.18164 13.0224 7.5 11 7.5C8.9776 7.5 7.33333 9.18164 7.33333 11.25C7.33333 13.3184 8.9776 15 11 15Z"
            fill="white"
          />
        </svg>
        <p>{data.city_name}</p>
      </div>
      <div className="flex items-center gap-2 sm:gap-5">
        <svg
          className="h-4 w-4"
          width="22"
          height="22"
          viewBox="0 0 22 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.5182 15.4525L16.3382 13.6325C16.5833 13.3904 16.8935 13.2247 17.231 13.1555C17.5685 13.0863 17.9188 13.1165 18.2395 13.2425L20.4576 14.1282C20.7816 14.2597 21.0595 14.4842 21.2561 14.7734C21.4527 15.0625 21.5594 15.4035 21.5626 15.7532V19.8157C21.5607 20.0535 21.5107 20.2886 21.4156 20.5066C21.3205 20.7247 21.1822 20.9212 21.0091 21.0844C20.836 21.2476 20.6317 21.3741 20.4085 21.4563C20.1852 21.5385 19.9477 21.5746 19.7101 21.5625C4.16695 20.5957 1.0307 7.43316 0.437578 2.39566C0.410045 2.14828 0.435201 1.89788 0.511392 1.66092C0.587583 1.42397 0.713082 1.20583 0.879633 1.02086C1.04618 0.835885 1.25001 0.688275 1.47771 0.587735C1.7054 0.487195 1.9518 0.436006 2.2007 0.437533H6.12508C6.47527 0.43857 6.81715 0.54435 7.10674 0.74127C7.39632 0.938189 7.62038 1.21724 7.75008 1.54253L8.6357 3.76066C8.76591 4.08003 8.79913 4.43068 8.73121 4.76882C8.66329 5.10696 8.49725 5.41759 8.25383 5.66191L6.43383 7.48191C6.43383 7.48191 7.48195 14.575 14.5182 15.4525Z"
            fill="white"
          />
        </svg>

        <p>{data.phone_number}</p>
      </div>
      <div className="flex items-center gap-2 sm:gap-5">
        <svg
          className="h-4 w-4"
          width="8"
          height="7"
          viewBox="0 0 8 7"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1 2.68695C1 2.57083 1.06043 2.46308 1.15952 2.40252L4 0.666672L6.84047 2.40252C6.93957 2.46308 7 2.57083 7 2.68695V6.00001C7 6.18411 6.85077 6.33334 6.66667 6.33334H1.33333C1.14924 6.33334 1 6.18411 1 6.00001V2.68695Z"
            stroke="white"
            stroke-width="0.666667"
          />
          <path
            d="M1 2.83334L4 4.66668L7 2.83334"
            stroke="white"
            stroke-width="0.666667"
            stroke-linecap="round"
          />
        </svg>

        <p>{data.email}</p>
      </div>
      <div className="flex items-center gap-2 sm:gap-5">
        <svg
          className="h-4 w-4"
          width="27"
          height="27"
          viewBox="0 0 27 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M24.2334 0.899902H2.76015C1.73325 0.899902 0.899902 1.71365 0.899902 2.7157V24.2817C0.899902 25.2851 1.73325 26.0999 2.76015 26.0999H24.2334C25.261 26.0999 26.0999 25.2851 26.0999 24.2817V2.7157C26.0999 1.71365 25.261 0.899902 24.2334 0.899902ZM8.3738 22.3738H4.6344V10.3482H8.3738V22.3738ZM6.5041 8.70385C6.21948 8.70385 5.93764 8.64777 5.6747 8.5388C5.41175 8.42984 5.17286 8.27013 4.97166 8.06881C4.77046 7.86748 4.61091 7.62848 4.50212 7.36547C4.39332 7.10245 4.33742 6.82058 4.3376 6.53595C4.3376 5.96141 4.56584 5.41039 4.9721 5.00413C5.37837 4.59786 5.92938 4.36963 6.50393 4.36963C7.07847 4.36963 7.62949 4.59786 8.03575 5.00413C8.44202 5.41039 8.67025 5.96141 8.67025 6.53595C8.67025 7.11061 8.44209 7.66176 8.03591 8.06827C7.62973 8.47478 7.07876 8.70339 6.5041 8.70385V8.70385ZM22.3724 22.3738H18.639V16.526C18.639 15.1309 18.6117 13.3372 16.6961 13.3372C14.7508 13.3372 14.4544 14.8565 14.4544 16.4249V22.3742H10.7181V10.3482H14.3039V11.9904H14.355C14.8541 11.0454 16.0735 10.0482 17.8921 10.0482C21.6742 10.0482 22.3728 12.5381 22.3728 15.7774V22.3738H22.3724Z"
            fill="white"
          />
        </svg>

        <p>{data.url_linkedin ? data.url_linkedin : ''}</p>
      </div>
    </section>
  );
}

function SkillInfomation({ data }) {
  return (
    <section className="mt-20">
      <p className="mb-2 text-left  text-sm font-semibold sm:mb-6 sm:text-xl">
        Skills
      </p>
      <div className="space-y-1 text-left text-xs sm:space-y-3 sm:text-sm">
        {data.map((skill, index) => (
          <p key={index}>{skill}</p>
        ))}
      </div>
    </section>
  );
}

function CertificationInformation({ data }) {
  const certificates = data;
  return (
    <section className="mt-10 sm:mt-20">
      <p className="mb-2 text-left text-sm font-semibold sm:mb-6 sm:text-xl">
        Award & Certification
      </p>
      <div className="space-y-1 pr-10 text-left text-xs sm:w-[240px] sm:space-y-3 sm:text-sm">
        {certificates.map((certificate, index) => (
          <div key={index}>
            <p>
              {certificate.name} {utils.getMonthYear(certificate.year)}
            </p>
            <div className="flex items-center gap-4">
              <hr className="w-2 border-b-[0.5px] border-white" />
              <p className="mt-1 text-xs">{certificate.agency}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

function AboutMe({ data }) {
  return (
    <article className="mt-10">
      <InformationTitle title={'About Me'} />
      <p className="my-6 w-fit px-3 text-left text-xs sm:pl-8 md:w-[500px] md:text-sm">
        {data}
      </p>
    </article>
  );
}

function WorkExperience({ data }) {
  let works = data;
  return (
    <article>
      <InformationTitle title={'Work Experience'} />
      <div className="px-3 sm:pl-8">
        {works.map((work, index) => (
          <div key={index} className="my-8 w-fit text-left text-xs md:text-sm">
            <p className="text-base text-[#3F4254] sm:text-xl">
              {work.position}
            </p>
            <p className="my-1 text-[#3F4254]">{work.agency} {utils.getMonthYear(work.start_date)}</p>
            <p>
              {work.description}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

function IntershipExperience({data}) {
  let interns = data
  return (
    <article>
      <InformationTitle title={'Intern Experience'} />
      <div className="px-3 sm:pl-8">
      {interns.map((intern, index) => (
          <div key={index} className="my-8 w-fit text-left text-xs md:text-sm">
            <p className="text-base text-[#3F4254] sm:text-xl">
              {intern.position}
            </p>
            <p className="my-1 text-[#3F4254]">{intern.agency} {utils.getMonthYear(intern.start_date)}</p>
            <p>
              {intern.description}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

function EducationHistory({data}) {
  let educations = data
  return (
    <article>
      <InformationTitle title={'Education History'} />
      <div className="px-3 sm:pl-8">
      {educations.map((education, index) => (
          <div key={index} className="my-8 w-fit text-left text-xs md:text-sm">
            <p className="text-base text-[#3F4254] sm:text-xl">
              {education.major}
            </p>
            <p className="my-1 text-[#3F4254]">{education.school} {utils.getMonthYear(education.start_date)}</p>
            <p>
              {education.description}
            </p>
          </div>
        ))}
      </div>
    </article>
  );
}

function InformationTitle({ title }) {
  return (
    <div className="bg-[#7E8299] py-4">
      <p className="pl-8 text-left text-sm font-semibold text-white md:text-xl">
        {title}
      </p>
    </div>
  );
}
