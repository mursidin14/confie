import React from 'react';
import Status from './Status';
import Pdf from 'react-to-pdf';
import CurriculumVitae from 'components/CurriculumVitae';
import utils from 'utils/utils';


export default function PersonalCard({data_profile, id, loading}) {
  return (
    <div className="rounded-md bg-white py-7 px-3 shadow-mine sm:px-8 ">
      <div className="flex items-start gap-3 lg:items-stretch">
        <img
          className="w-28 rounded-md object-cover md:w-48"
          src="/person.png"
          alt=""
        />
        <div className="w-full">
          <div className="items-center justify-between lg:flex">
            <div>
              <div className="flex items-center gap-2 lg:gap-3">
                <h3 className="text-left sm:text-xl text-lg font-semibold">
                  {data_profile.full_name ? utils.makeCapital(data_profile.full_name) : ''}
                </h3>
                <svg
                  className="h-5 w-5"
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.6016 4.6552C13.6061 2.70543 16.3939 2.70543 17.3984 4.6552C18.002 5.82679 19.3636 6.39083 20.6189 5.98919C22.7079 5.3208 24.6791 7.29201 24.0108 9.38101C23.6091 10.6363 24.1731 11.998 25.3448 12.6016C27.2945 13.6061 27.2945 16.3938 25.3448 17.3983C24.1731 18.002 23.6091 19.3637 24.0108 20.6188C24.6791 22.7078 22.7079 24.6791 20.6189 24.0107C19.3638 23.6091 18.002 24.1731 17.3984 25.3447C16.3939 27.2945 13.6061 27.2945 12.6016 25.3447C11.998 24.1731 10.6363 23.6091 9.38108 24.0107C7.29208 24.6791 5.32086 22.7078 5.98925 20.6188C6.39089 19.3637 5.82685 18.002 4.65526 17.3983C2.70549 16.3938 2.70549 13.6061 4.65526 12.6016C5.82685 11.998 6.39089 10.6363 5.98925 9.38101C5.32086 7.29201 7.29208 5.3208 9.38108 5.98919C10.6363 6.39083 11.998 5.82679 12.6016 4.6552Z"
                    fill="#00A3FF"
                  />
                  <path
                    d="M18.5704 11.4878C18.8258 11.1873 19.2214 11.1731 19.5219 11.4286C19.8225 11.6841 19.7786 12.0804 19.5231 12.381L14.8288 18.3197C14.5693 18.6251 14.1095 18.6572 13.81 18.391L10.5957 15.5338C10.3009 15.2717 10.2743 14.8203 10.5364 14.5255C10.7985 14.2306 11.25 14.2041 11.5448 14.4661L14.2133 16.8381L18.5704 11.4878Z"
                    fill="white"
                  />
                </svg>
              </div>
              <EmploymentStatus />
            </div>
            <div className="hidden md:block">
              <ButtonDashboard id={id} />
            </div>
          </div>
          <JobStatus />
          <div className="hidden md:block">
            <Status data={data_profile}/>
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <Status data={data_profile} />
      </div>
      <div className="block md:hidden">
        <ButtonDashboard id={id} data={data_profile} />
      </div>
    </div>
  );
}

function ButtonDashboard({id, data_profile}) {
  const cv = React.createRef();

  return (
    <>
      <div className='absolute -top-[3000px]' ref={cv}>
        <CurriculumVitae data={data_profile}></CurriculumVitae>
      </div>
      <div className="my-3 flex w-full">
      <div className="flex items-center sm:justify-start justify-between w-full gap-3">
      <Pdf targetRef={cv} filename="cv.pdf">
        {({ toPdf }) => (
          <button
            onClick={toPdf}
            className="secondary-btn center border-[1px] px-2 py-3 text-xs md:w-fit "
            href=""

          >
            Download CV
          </button>
        )}
      </Pdf>
        
        <a className="primary-btn center  border-[1px] px-2 py-3 text-xs md:w-fit " href={`/profile/${id}`}>
          <p>Edit Profile</p>
        </a>
      </div>
    </div>
    </>
  );
}

function EmploymentStatus({}) {
  return (
    <p className="my-2 w-fit rounded-md bg-[#50CD89]/20 px-2 py-1 text-[10px] text-[#50CD89]">
      Bekerja
    </p>
  );
}

function JobStatus({}) {
  return (
    <div className="">
      <div className="mb-3 flex items-center gap-3">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M17.3333 9.00002C17.3333 13.5834 13.5833 17.3334 8.99999 17.3334C4.41666 17.3334 0.666656 13.5834 0.666656 9.00002C0.666656 4.41669 4.41666 0.666687 8.99999 0.666687C13.5833 0.666687 17.3333 4.41669 17.3333 9.00002ZM8.99999 4.83335C7.58332 4.83335 6.49999 5.91669 6.49999 7.33335C6.49999 8.75002 7.58332 9.83335 8.99999 9.83335C10.4167 9.83335 11.5 8.75002 11.5 7.33335C11.5 5.91669 10.4167 4.83335 8.99999 4.83335Z"
            fill="#4B5783"
          />
          <path
            d="M9 17.3333C11.1667 17.3333 13.1667 16.5 14.5833 15.1667C13.9167 13.0833 11.6667 11.5 9 11.5C6.33333 11.5 4.08332 13.0833 3.41666 15.1667C4.83332 16.5 6.83333 17.3333 9 17.3333Z"
            fill="#4B5783"
          />
        </svg>

        <p className="text-xs text-[#B5B5C3] sm:text-sm">Backend Developer</p>
      </div>
      <div className="mt flex items-center gap-3">
        <svg
          width="18"
          height="15"
          viewBox="0 0 18 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M15.6667 10.5H2.33332C1.41666 10.5 0.666656 9.75 0.666656 8.83333V3.83333C0.666656 3.33333 0.99999 3 1.49999 3H16.5C17 3 17.3333 3.33333 17.3333 3.83333V8.83333C17.3333 9.75 16.5833 10.5 15.6667 10.5ZM9.83332 8H8.16666C7.74999 8 7.33332 8.33333 7.33332 8.83333V11.3333C7.33332 11.75 7.66666 12.1667 8.16666 12.1667H9.83332C10.3333 12.1667 10.6667 11.8333 10.6667 11.3333V8.83333C10.6667 8.33333 10.3333 8 9.83332 8Z"
            fill="#4B5783"
          />
          <path
            d="M10.6667 3V2.16667H7.33333V3H5.66667V2.16667C5.66667 1.25 6.41667 0.5 7.33333 0.5H10.6667C11.5833 0.5 12.3333 1.25 12.3333 2.16667V3H10.6667ZM15.6667 10.5H10.6667V11.3333C10.6667 11.8333 10.25 12.1667 9.83333 12.1667H8.16667C7.75 12.1667 7.33333 11.8333 7.33333 11.3333V10.5H2.33333C2 10.5 1.75 10.4167 1.5 10.25V13C1.5 13.9167 2.25 14.6667 3.16667 14.6667H14.8333C15.75 14.6667 16.5 13.9167 16.5 13V10.25C16.25 10.4167 16 10.5 15.6667 10.5Z"
            fill="#4B5783"
          />
        </svg>

        <p className="text-xs text-[#B5B5C3] sm:text-sm">Upana Studio</p>
      </div>
    </div>
  );
}
