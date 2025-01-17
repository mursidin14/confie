import React from 'react';
import LayoutBusiness from 'components/Layout/LayoutBusiness';
import ProgressBar from 'components/Widgets/ProgressBar';
import { useParams } from 'react-router-dom';
import { BusinessProvider, useBusinessContext } from 'context/business-context';
import utils, { getProfileCompletionBusiness, getYear } from 'utils/utils';
import EmailVerifiedCard from 'components/EmailVerifiedCard';
import BusinessProfileProvider, {
  useBusinessProfileContext,
} from 'context/business-profile-context';

export default function Index() {
  const { id } = useParams();

  let status_application = [
    {
      title: 'Lowongan Aktif',
      value: '3',
      icon: IconOne,
    },
    {
      title: 'Lowongan Selesai',
      value: '3',
      icon: IconTwo,
    },
    {
      title: 'Total Pelamar',
      value: '3',
      icon: IconThree,
    },
    {
      title: 'Team Member',
      value: '3',
      icon: IconFour,
    },
  ];
  return (
    <BusinessProfileProvider>
      <BusinessProvider>
        <LayoutBusiness userId={id} PageName="Dashboard">
          <PersonalCard id={id} />
          <StatusApplication items={status_application} />
          <StatusClass />
        </LayoutBusiness>
      </BusinessProvider>
    </BusinessProfileProvider>
  );
}

function StatusClass() {
  return (
    <section className="my-7 flex flex-col justify-between gap-5 font-semibold lg:flex-row lg:gap-5">
      <div className="flex grow items-center justify-evenly rounded-md bg-white py-8 px-3 shadow-mine sm:px-8 lg:w-fit">
        <p className="text-3xl font-semibold">3</p>
        <p className="text-xl text-[#7E8299]">Kelas Aktif</p>
      </div>
      <div className="flex grow items-center justify-evenly rounded-md bg-white py-8 px-3 shadow-mine sm:px-8 lg:w-fit">
        <p className="text-3xl font-semibold">3</p>
        <p className="text-xl text-[#7E8299]">Kelas Selesai</p>
      </div>
    </section>
  );
}
function StatusApplication({ items }) {
  return (
    <section className="my-7 grid grid-cols-2 gap-6 font-semibold md:grid-cols-2 lg:grid-cols-4">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center space-y-10 rounded-md bg-white py-4 px-3 shadow-mine sm:px-8 lg:space-y-16"
        >
          <item.icon />
          <p className="text-3xl font-semibold">{item.value}</p>
          <p className="text-[#7E8299]">{item.title}</p>
        </div>
      ))}
    </section>
  );
}
function IconOne() {
  return (
    <svg
      width="30"
      height="32"
      viewBox="0 0 30 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.5833 14.9722C14.6389 14.9722 12.9861 13.4167 12.9861 11.4722C12.9861 10.7917 13.1806 10.2083 13.4722 9.625L16.5833 4.27778L16.2917 3.88889H2.58333C1.61111 3.88889 0.833334 4.76389 0.833334 5.73612V29.2639C0.833334 30.2361 1.61111 31.1111 2.58333 31.1111H22.3194C23.2917 31.1111 24.0694 30.2361 24.0694 29.2639V14.9722H16.5833Z"
        fill="#494B74"
      />
      <path
        d="M21.1528 1.06945L15.5139 10.6944C15.125 11.2778 15.3194 12.0556 15.8056 12.4444C16 12.6389 16.2917 12.6389 16.5833 12.6389H27.7639C28.4444 12.6389 29.0278 12.1528 29.0278 11.4722C29.0278 11.1806 28.9306 10.9861 28.8333 10.6944L23.2917 1.06945C22.9028 0.486112 22.2222 0.291667 21.5417 0.583334C21.3472 0.777778 21.25 0.972223 21.1528 1.06945Z"
        fill="#494B74"
      />
    </svg>
  );
}
function IconTwo() {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.875 1.09375C21.875 0.803669 21.7598 0.52547 21.5546 0.320352C21.3495 0.115234 21.0713 0 20.7812 0L14.2188 0C13.9287 0 13.6505 0.115234 13.4454 0.320352C13.2402 0.52547 13.125 0.803669 13.125 1.09375C13.125 1.38383 13.0098 1.66203 12.8046 1.86715C12.5995 2.07227 12.3213 2.1875 12.0312 2.1875C11.7412 2.1875 11.463 2.30273 11.2579 2.50785C11.0527 2.71297 10.9375 2.99117 10.9375 3.28125V4.375C10.9375 4.66508 11.0527 4.94328 11.2579 5.1484C11.463 5.35352 11.7412 5.46875 12.0312 5.46875H22.9688C23.2588 5.46875 23.537 5.35352 23.7421 5.1484C23.9473 4.94328 24.0625 4.66508 24.0625 4.375V3.28125C24.0625 2.99117 23.9473 2.71297 23.7421 2.50785C23.537 2.30273 23.2588 2.1875 22.9688 2.1875C22.6787 2.1875 22.4005 2.07227 22.1954 1.86715C21.9902 1.66203 21.875 1.38383 21.875 1.09375Z"
        fill="#494B74"
      />
      <path
        d="M8.93594 2.1875H7.65625C6.78601 2.1875 5.95141 2.5332 5.33606 3.14856C4.7207 3.76391 4.375 4.59851 4.375 5.46875V31.7188C4.375 32.589 4.7207 33.4236 5.33606 34.0389C5.95141 34.6543 6.78601 35 7.65625 35H27.3438C28.214 35 29.0486 34.6543 29.6639 34.0389C30.2793 33.4236 30.625 32.589 30.625 31.7188V5.46875C30.625 4.59851 30.2793 3.76391 29.6639 3.14856C29.0486 2.5332 28.214 2.1875 27.3438 2.1875H26.0641C26.1844 2.52875 26.25 2.89844 26.25 3.28125V4.375C26.25 5.24524 25.9043 6.07984 25.2889 6.69519C24.6736 7.31055 23.839 7.65625 22.9688 7.65625H12.0312C11.161 7.65625 10.3264 7.31055 9.71106 6.69519C9.0957 6.07984 8.75 5.24524 8.75 4.375V3.28125C8.75 2.89844 8.81563 2.52875 8.93594 2.1875ZM23.7431 17.1806L17.1806 23.7431C17.079 23.845 16.9583 23.9258 16.8254 23.9809C16.6926 24.0361 16.5501 24.0645 16.4062 24.0645C16.2624 24.0645 16.1199 24.0361 15.9871 23.9809C15.8542 23.9258 15.7335 23.845 15.6319 23.7431L12.3506 20.4619C12.2489 20.3602 12.1683 20.2395 12.1132 20.1066C12.0582 19.9737 12.0299 19.8313 12.0299 19.6875C12.0299 19.5437 12.0582 19.4013 12.1132 19.2684C12.1683 19.1355 12.2489 19.0148 12.3506 18.9131C12.556 18.7077 12.8346 18.5924 13.125 18.5924C13.2688 18.5924 13.4112 18.6207 13.5441 18.6757C13.677 18.7308 13.7977 18.8114 13.8994 18.9131L16.4062 21.4222L22.1944 15.6319C22.3998 15.4265 22.6783 15.3111 22.9688 15.3111C23.2592 15.3111 23.5377 15.4265 23.7431 15.6319C23.9485 15.8373 24.0639 16.1158 24.0639 16.4062C24.0639 16.6967 23.9485 16.9752 23.7431 17.1806Z"
        fill="#494B74"
      />
    </svg>
  );
}
function IconThree() {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11.6667 15.6917H10.8208C9.66658 15.6499 8.51605 15.8459 7.44067 16.2674C6.36529 16.6888 5.388 17.3268 4.56945 18.1417L4.33612 18.4139V26.4639H8.30279V21.8944L8.83751 21.2917L9.08056 21.0097C10.3463 19.7094 11.9222 18.7525 13.6597 18.2292C12.7898 17.5672 12.1037 16.6937 11.6667 15.6917Z"
        fill="#494B74"
      />
      <path
        d="M30.4695 18.1125C29.6509 17.2976 28.6736 16.6596 27.5982 16.2382C26.5229 15.8167 25.3723 15.6208 24.2181 15.6625C23.864 15.6635 23.5103 15.683 23.1583 15.7208C22.7132 16.6609 22.0458 17.4784 21.2139 18.1028C23.0689 18.616 24.7493 19.6242 26.075 21.0194L26.3181 21.2917L26.8431 21.8944V26.4736H30.6736V18.3847L30.4695 18.1125Z"
        fill="#494B74"
      />
      <path
        d="M10.7917 13.7958H11.093C10.953 12.5934 11.164 11.3762 11.7005 10.2911C12.237 9.20592 13.0762 8.29927 14.1167 7.68055C13.7395 7.10437 13.2192 6.636 12.6066 6.32134C11.9941 6.00667 11.3103 5.85647 10.6222 5.88547C9.93419 5.91446 9.26547 6.12165 8.68156 6.48674C8.09765 6.85183 7.61857 7.36231 7.29122 7.96819C6.96388 8.57406 6.79949 9.25457 6.81417 9.94306C6.82884 10.6316 7.02207 11.3044 7.37493 11.8958C7.7278 12.4872 8.22819 12.9768 8.82713 13.3167C9.42607 13.6566 10.103 13.8351 10.7917 13.8347V13.7958Z"
        fill="#494B74"
      />
      <path
        d="M23.7514 13.0667C23.7632 13.2901 23.7632 13.514 23.7514 13.7375C23.9379 13.7671 24.1264 13.7833 24.3153 13.7861H24.5C25.1856 13.7496 25.8501 13.5361 26.4287 13.1665C27.0074 12.7969 27.4804 12.2838 27.8019 11.6771C28.1234 11.0704 28.2823 10.3908 28.2631 9.70446C28.244 9.01813 28.0474 8.34845 27.6926 7.76062C27.3378 7.1728 26.8369 6.68685 26.2385 6.3501C25.6402 6.01334 24.9649 5.83726 24.2783 5.83899C23.5917 5.84071 22.9172 6.02019 22.3206 6.35995C21.7239 6.69971 21.2254 7.18817 20.8736 7.77778C21.7535 8.3523 22.4771 9.13627 22.9794 10.0594C23.4816 10.9824 23.7469 12.0158 23.7514 13.0667Z"
        fill="#494B74"
      />
      <path
        d="M17.3736 17.4222C19.7737 17.4222 21.7194 15.4765 21.7194 13.0764C21.7194 10.6762 19.7737 8.73055 17.3736 8.73055C14.9735 8.73055 13.0278 10.6762 13.0278 13.0764C13.0278 15.4765 14.9735 17.4222 17.3736 17.4222Z"
        fill="#494B74"
      />
      <path
        d="M17.6069 19.7361C16.3373 19.6849 15.0703 19.891 13.8824 20.3421C12.6945 20.7932 11.6101 21.48 10.6944 22.3611L10.4514 22.6333V28.7875C10.4552 28.988 10.4984 29.1857 10.5787 29.3695C10.6589 29.5532 10.7745 29.7193 10.919 29.8584C11.0635 29.9974 11.2339 30.1066 11.4206 30.1798C11.6072 30.2529 11.8065 30.2886 12.0069 30.2847H23.1778C23.3782 30.2886 23.5775 30.2529 23.7642 30.1798C23.9508 30.1066 24.1213 29.9974 24.2657 29.8584C24.4102 29.7193 24.5258 29.5532 24.6061 29.3695C24.6863 29.1857 24.7295 28.988 24.7333 28.7875V22.6528L24.5 22.3611C23.5903 21.4773 22.5097 20.7886 21.3244 20.3372C20.1391 19.8858 18.8741 19.6813 17.6069 19.7361Z"
        fill="#494B74"
      />
    </svg>
  );
}
function IconFour() {
  return (
    <svg
      width="35"
      height="35"
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.875 16.0417H32.0834V18.9583H21.875V16.0417ZM23.3334 21.875H32.0834V24.7917H23.3334V21.875ZM20.4167 10.2083H32.0834V13.125H20.4167V10.2083ZM5.83335 27.7083H20.4167V26.25C20.4167 22.2294 17.1456 18.9583 13.125 18.9583H10.2084C6.18773 18.9583 2.91669 22.2294 2.91669 26.25V27.7083H5.83335ZM11.6667 17.5C14.5761 17.5 16.7709 15.3052 16.7709 12.3958C16.7709 9.48646 14.5761 7.29166 11.6667 7.29166C8.75731 7.29166 6.56252 9.48646 6.56252 12.3958C6.56252 15.3052 8.75731 17.5 11.6667 17.5Z"
        fill="#494B74"
      />
    </svg>
  );
}

function PersonalCard({ id }) {
  const context = useBusinessContext();
  const { business } = context;

  return (
    <>
      {business.email_verified_at ? <></> : <EmailVerifiedCard />}
      <section className="rounded-md bg-white py-7 px-3 shadow-mine sm:px-8 ">
        <div className="flex items-center gap-3">
          <div className="block md:hidden">
            <img
              className="h-28 w-28 object-cover "
              src={
                business.url_photo_profile
                  ? `${process.env.REACT_APP_API_URL}/${business.url_photo_profile}`
                  : '/company_default.png'
              }
              alt=""
            />
          </div>
          <div className="flex items-center gap-1 md:hidden lg:gap-3">
            <h3 className="text-left text-base font-semibold sm:text-xl">
              {utils.makeCapital(business.full_name)}
            </h3>
            <svg
              className="h-5 w-5"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.60164 1.65525C10.6061 -0.294527 13.3939 -0.294527 14.3984 1.65525C15.002 2.82684 16.3636 3.39087 17.6189 2.98924C19.7079 2.32085 21.6791 4.29206 21.0108 6.38106C20.6091 7.63631 21.1731 8.99802 22.3448 9.60162C24.2945 10.6061 24.2945 13.3939 22.3448 14.3984C21.1731 15.002 20.6091 16.3637 21.0108 17.6189C21.6791 19.7079 19.7079 21.6791 17.6189 21.0107C16.3638 20.6091 15.002 21.1731 14.3984 22.3447C13.3939 24.2945 10.6061 24.2945 9.60164 22.3447C8.99804 21.1731 7.63633 20.6091 6.38108 21.0107C4.29208 21.6791 2.32086 19.7079 2.98925 17.6189C3.39089 16.3637 2.82685 15.002 1.65526 14.3984C-0.294512 13.3939 -0.294512 10.6061 1.65526 9.60162C2.82685 8.99802 3.39089 7.63631 2.98925 6.38106C2.32086 4.29206 4.29208 2.32085 6.38108 2.98924C7.63633 3.39087 8.99804 2.82684 9.60164 1.65525Z"
                fill="#FE9A00"
              />
              <path
                d="M15.5704 8.48787C15.8258 8.1873 16.2214 8.17312 16.5219 8.42861C16.8225 8.6841 16.7786 9.08041 16.5231 9.381L11.8288 15.3198C11.5693 15.6251 11.1095 15.6573 10.81 15.391L7.5957 12.5339C7.30085 12.2718 7.2743 11.8204 7.53639 11.5255C7.79847 11.2306 8.24996 11.2041 8.54479 11.4661L11.2133 13.8381L15.5704 8.48787Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="flex items-start gap-5 lg:items-stretch">
          <div className="hidden items-center md:flex">
            <img
              className="rounded-md object-cover md:h-40 md:w-48"
              src={
                business.url_photo_profile
                  ? `${process.env.REACT_APP_API_URL}/${business.url_photo_profile}`
                  : '/company_default.png'
              }
              alt=""
            />
          </div>
          <div className="w-full">
            <div className="h-full justify-between lg:flex">
              <div>
                <div className="hidden items-center gap-2 md:flex lg:gap-3">
                  <h3 className="text-left text-lg font-semibold sm:text-xl">
                    {utils.makeCapital(business.full_name)}
                  </h3>
                  <svg
                    className="h-5 w-5"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9.60164 1.65525C10.6061 -0.294527 13.3939 -0.294527 14.3984 1.65525C15.002 2.82684 16.3636 3.39087 17.6189 2.98924C19.7079 2.32085 21.6791 4.29206 21.0108 6.38106C20.6091 7.63631 21.1731 8.99802 22.3448 9.60162C24.2945 10.6061 24.2945 13.3939 22.3448 14.3984C21.1731 15.002 20.6091 16.3637 21.0108 17.6189C21.6791 19.7079 19.7079 21.6791 17.6189 21.0107C16.3638 20.6091 15.002 21.1731 14.3984 22.3447C13.3939 24.2945 10.6061 24.2945 9.60164 22.3447C8.99804 21.1731 7.63633 20.6091 6.38108 21.0107C4.29208 21.6791 2.32086 19.7079 2.98925 17.6189C3.39089 16.3637 2.82685 15.002 1.65526 14.3984C-0.294512 13.3939 -0.294512 10.6061 1.65526 9.60162C2.82685 8.99802 3.39089 7.63631 2.98925 6.38106C2.32086 4.29206 4.29208 2.32085 6.38108 2.98924C7.63633 3.39087 8.99804 2.82684 9.60164 1.65525Z"
                      fill="#FE9A00"
                    />
                    <path
                      d="M15.5704 8.48787C15.8258 8.1873 16.2214 8.17312 16.5219 8.42861C16.8225 8.6841 16.7786 9.08041 16.5231 9.381L11.8288 15.3198C11.5693 15.6251 11.1095 15.6573 10.81 15.391L7.5957 12.5339C7.30085 12.2718 7.2743 11.8204 7.53639 11.5255C7.79847 11.2306 8.24996 11.2041 8.54479 11.4661L11.2133 13.8381L15.5704 8.48787Z"
                      fill="white"
                    />
                  </svg>
                </div>
                <CompanyInformation />
              </div>
              <div className="flex h-full w-full flex-col justify-between lg:items-end">
                <div className="hidden md:block">
                  <ButtonDashboard />
                </div>
                <div className="hidden w-full md:block ">
                  <ProfileCompletion profile={business} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="block md:hidden">
          <ProfileCompletion profile={business}/>
        </div>
        <div className="block md:hidden">
          <ButtonDashboard />
        </div>
      </section>
    </>
  );
}

function ProfileCompletion() {
  const { businessProfile } = useBusinessProfileContext();
  return (
    <div className="mt-3 w-full ">
      <div className="flex justify-between text-xs sm:text-base">
        <p className="mb-2 text-left  text-[#B5B5C3]">Profile Completion</p>
        {businessProfile['id'] && (
          <p>{getProfileCompletionBusiness(businessProfile)}%</p>
        )}
      </div>
      {businessProfile['id'] && (
        <ProgressBar
          progressPercentage={getProfileCompletionBusiness(businessProfile)}
        />
      )}
    </div>
  );
}

function ButtonDashboard() {
  const { business } = useBusinessContext();
  return (
    <>
      <div className="my-3 flex w-full">
        <div className="flex w-full items-center justify-between gap-3 sm:justify-start">
          <a
            className="secondary-btn center border-[1px] px-2 py-3 text-xs md:w-fit "
            href={`/company/${business.slug}`}
          >
            Halaman Profile
          </a>

          <a
            className="primary-btn center  border-[1px] px-2 py-3 text-xs md:w-fit "
            href="/business/job"
          >
            <p>Buka Lowongan</p>
          </a>
        </div>
      </div>
    </>
  );
}

function CompanyInformation() {
  const context = useBusinessContext();
  const { business } = context;
  return (
    <div className="mt-4 space-y-2">
      <div className="flex gap-3">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10 1.25C8.1773 1.25215 6.42986 1.97717 5.14102 3.26602C3.85217 4.55486 3.12715 6.3023 3.125 8.125C3.12282 9.61452 3.60936 11.0636 4.51 12.25C4.51 12.25 4.6975 12.4969 4.72812 12.5325L10 18.75L15.2744 12.5294C15.3019 12.4963 15.49 12.25 15.49 12.25L15.4906 12.2481C16.3908 11.0623 16.8771 9.61383 16.875 8.125C16.8728 6.3023 16.1478 4.55486 14.859 3.26602C13.5701 1.97717 11.8227 1.25215 10 1.25V1.25ZM10 10.625C9.50555 10.625 9.0222 10.4784 8.61107 10.2037C8.19995 9.92897 7.87952 9.53852 7.6903 9.08171C7.50108 8.62489 7.45157 8.12223 7.54804 7.63727C7.6445 7.15232 7.8826 6.70686 8.23223 6.35723C8.58186 6.0076 9.02732 5.7695 9.51227 5.67304C9.99723 5.57657 10.4999 5.62608 10.9567 5.8153C11.4135 6.00452 11.804 6.32495 12.0787 6.73607C12.3534 7.1472 12.5 7.63055 12.5 8.125C12.4992 8.78779 12.2355 9.42319 11.7669 9.89185C11.2982 10.3605 10.6628 10.6242 10 10.625V10.625Z"
            fill="#A1A5B7"
          />
        </svg>

        <p className="w-fit text-left text-xs text-[#B5B5C3] sm:text-sm md:w-[400px]">
          {`${business.address} ${utils.makeCapital(
            business.city_name,
          )}, ${utils.makeCapital(business.province_name)}`}
        </p>
      </div>
      <div className="flex items-center gap-3">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.8333 3.33333H4.16666C3.50362 3.33333 2.86774 3.59672 2.3989 4.06557C1.93006 4.53441 1.66666 5.17029 1.66666 5.83333V14.1667C1.66666 14.8297 1.93006 15.4656 2.3989 15.9344C2.86774 16.4033 3.50362 16.6667 4.16666 16.6667H15.8333C16.4964 16.6667 17.1323 16.4033 17.6011 15.9344C18.0699 15.4656 18.3333 14.8297 18.3333 14.1667V5.83333C18.3333 5.17029 18.0699 4.53441 17.6011 4.06557C17.1323 3.59672 16.4964 3.33333 15.8333 3.33333ZM15.8333 5L10.4167 8.725C10.29 8.79814 10.1463 8.83665 10 8.83665C9.85372 8.83665 9.71001 8.79814 9.58333 8.725L4.16666 5H15.8333Z"
            fill="#A1A5B7"
          />
        </svg>

        <p className="text-xs text-[#B5B5C3] sm:text-sm">{business.email}</p>
      </div>
      <div className="flex items-center gap-3">
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 9.16667C16.2417 9.16667 17.3917 9.55833 18.3333 10.2167V6.66667C18.3333 5.74167 17.5917 5 16.6667 5H13.3333V3.33333C13.3333 2.40833 12.5917 1.66667 11.6667 1.66667H8.33333C7.40833 1.66667 6.66666 2.40833 6.66666 3.33333V5H3.33333C2.40833 5 1.675 5.74167 1.675 6.66667L1.66666 15.8333C1.66666 16.7583 2.40833 17.5 3.33333 17.5H9.73333C9.31053 16.6113 9.11964 15.6299 9.17845 14.6475C9.23726 13.6651 9.54385 12.7136 10.0696 11.8816C10.5954 11.0497 11.3233 10.3644 12.1854 9.88965C13.0475 9.41492 14.0158 9.1662 15 9.16667ZM8.33333 3.33333H11.6667V5H8.33333V3.33333Z"
            fill="#A1A5B7"
          />
          <path
            d="M15 10.8333C12.7 10.8333 10.8333 12.7 10.8333 15C10.8333 17.3 12.7 19.1667 15 19.1667C17.3 19.1667 19.1667 17.3 19.1667 15C19.1667 12.7 17.3 10.8333 15 10.8333ZM16.375 16.9583L14.5833 15.1667V12.5H15.4167V14.825L16.9583 16.3667L16.375 16.9583Z"
            fill="#A1A5B7"
          />
        </svg>

        <p className="text-xs text-[#B5B5C3] sm:text-sm">
          Berdiri Sejak Tahun {getYear(business.date_of_birth)}
        </p>
      </div>
    </div>
  );
}
