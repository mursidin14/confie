import React, { useState } from 'react';
import LayoutBusiness from 'components/Layout/LayoutBusiness';
import { useParams } from 'react-router-dom';
import InputForm from 'components/Widgets/InputForm';
import BasicCard from 'components/Widgets/BasicCard';
import { BusinessProvider } from 'context/business-context';
import { addJobVacancy } from 'services/Business/JobVacancy/JobVacancy';
import utils from 'utils/utils';
import SkillRequirmentBusiness from 'components/SkillRequirmentBusiness';
import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
export default function OpenJobVacancy() {
  const { id } = useParams();
  const [jobVacancy, setJobVacancy] = useState({
    skills: [],
    qualifications: [],
    benefits: [],
    responsibilitys: [],
    is_published: false,
  });
  const [error, setError] = useState([]);
  const [modalSuccess, setModalSuccess] = useState(false);
  const inputs = [
    {
      name: 'title',
      label: 'Nama Posisi',
      type: 'text',
      required: true,
    },
    {
      name: 'location',
      label: 'Lokasi Kerja',
      type: 'text',
      required: true,
    },
    // {
    //   name: 'min_experience',
    //   label: 'Min. Pengalaman',
    //   type: 'number',
    //   min: 0,
    //   required: true,
    // },
    // {
    //   name: 'max_experience',
    //   label: 'Max. Pengalaman',
    //   type: 'number',
    //   min: 0,
    //   required: true,
    // },
  ];
  const handleChange = (e) => {
    setJobVacancy({ ...jobVacancy, [e.target.name]: e.target.value });
  };
  const handleSubmit = async () => {
    jobVacancy['registration_end_date'] = utils.timeEpoch(
      jobVacancy['registration_end_date'],
    );
    const response = await addJobVacancy(jobVacancy);
    if (response.data.meta.status === 'error') {
      let errors = [];
      let error = response.data.data;
      for (let key in error) {
        errors.push(error[key][0]);
      }
      setError(errors);
      return;
    }
    setModalSuccess(true);
  };
  return (
    <BusinessProvider>
      <LayoutBusiness userId={id} PageName="Lowongan Kerja">
        <BasicCard>
          <div className="flex items-center justify-between px-8">
            <h3 className="text-base font-semibold ">Buka Lowongan Kerja</h3>
          </div>
          <hr className=" my-2 w-full border-b-[1px] border-[#3F4254]/10" />
          <div className="px-8 text-left">
            {inputs.map((input, index) => (
              <InputForm
                key={index}
                label={'Nama Posisi'}
                type={'text'}
                data={jobVacancy}
                handleChange={handleChange}
                {...input}
              />
            ))}
            <div className=" items-center lg:flex">
              <div className="w-5/12">
                <label
                  className={`text-xs font-medium text-[#3F4254] lg:text-base `}
                >
                  Pengalaman Kerja
                </label>
              </div>
              <div className="lg:w-7/12 ">
                <div className="my-2 items-center justify-between gap-3 sm:flex lg:my-5 ">
                    <input
                      className="input-form my-2 lg:my-3 lg:py-6 placeholder:text-sm"
                      type="number"
                      min="0"
                      placeholder="Min. Pengalaman"
                      name="min_experience"
                      value={jobVacancy.min_experience ?? ''}
                      onChange={(e) => {
                        setJobVacancy({
                          ...jobVacancy,
                          min_experience: e.target.value,
                        });
                      }}
                    />
                  <p className="text-xs">sampai</p>
                    <input
                      className="input-form my-2 lg:my-3 lg:py-6 placeholder:text-sm"
                      type="number"
                      min="0"
                      placeholder="Max. Pengalaman"
                      name="max_experience"
                      value={jobVacancy.max_experience ?? ''}
                      onChange={(e) => {
                        setJobVacancy({
                          ...jobVacancy,
                          max_experience: e.target.value,
                        });
                      }}
                    />
                </div>
              </div>
            </div>
            {/* <div className=" items-center lg:flex">
              <div className="w-5/12">
                <label
                  className={`text-xs font-medium text-[#3F4254] lg:text-base `}
                >
                  Lokasi Kerja
                </label>
              </div>
              <div className="lg:w-7/12">
                <JobPlaceInput></JobPlaceInput>
              </div>
            </div> */}
            <div className=" items-center lg:flex">
              <div className="w-5/12">
                <label
                  className={`text-xs font-medium text-[#3F4254] lg:text-base `}
                >
                  Jenis Pekerjaan
                </label>
              </div>
              <div className="lg:w-7/12 ">
                <div className="my-2 flex items-center lg:my-5 lg:py-3">
                  <input
                    className="mr-2"
                    type="radio"
                    id="part"
                    name="jobtype"
                    value="full_time"
                    defaultChecked
                    onChange={() => {
                      setJobVacancy({ ...jobVacancy, jobtype: 'full_time' });
                    }}
                  />
                  <label
                    className="mr-5 text-sm font-semibold text-black"
                    htmlFor="part"
                  >
                    Full Time
                  </label>
                  <input
                    className="mr-2"
                    type="radio"
                    id="full"
                    name="jobtype"
                    value="part_time"
                    onChange={() => {
                      setJobVacancy({ ...jobVacancy, jobtype: 'part_time' });
                    }}
                  />
                  <label
                    className="mr-5 text-sm font-semibold text-black"
                    htmlFor="full"
                  >
                    Part Time
                  </label>
                </div>
              </div>
            </div>
            <div className=" items-center lg:flex">
              <div className="w-5/12">
                <label
                  className={`text-xs font-medium text-[#3F4254] lg:text-base `}
                >
                  Perkiraan Gaji
                </label>
              </div>
              <div className="lg:w-7/12 ">
                <div className="my-2 items-center justify-between gap-2 sm:flex lg:my-5 ">
                  <div className="flex items-center rounded-md border-2 border-[#F5F8FA] bg-[#F5F8FA] focus-within:border-black">
                    <div className="flex items-center justify-center rounded-l-md bg-[#DCE5EB] p-3">
                      <svg
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.006 10L3.85 6.192H2.926V10H0.966V0.228H4.634C5.39 0.228 6.034 0.363333 6.566 0.634C7.098 0.895333 7.49467 1.25467 7.756 1.712C8.02667 2.16 8.162 2.664 8.162 3.224C8.162 3.868 7.97533 4.45133 7.602 4.974C7.22867 5.48733 6.67333 5.842 5.936 6.038L8.274 10H6.006ZM2.926 4.722H4.564C5.096 4.722 5.49267 4.596 5.754 4.344C6.01533 4.08267 6.146 3.72333 6.146 3.266C6.146 2.818 6.01533 2.47267 5.754 2.23C5.49267 1.978 5.096 1.852 4.564 1.852H2.926V4.722ZM11.8948 3.364C12.1468 3.00933 12.4921 2.71533 12.9308 2.482C13.3788 2.23933 13.8874 2.118 14.4568 2.118C15.1194 2.118 15.7168 2.28133 16.2488 2.608C16.7901 2.93467 17.2148 3.40133 17.5228 4.008C17.8401 4.60533 17.9988 5.30067 17.9988 6.094C17.9988 6.88733 17.8401 7.592 17.5228 8.208C17.2148 8.81467 16.7901 9.286 16.2488 9.622C15.7168 9.958 15.1194 10.126 14.4568 10.126C13.8874 10.126 13.3834 10.0093 12.9448 9.776C12.5154 9.54267 12.1654 9.24867 11.8948 8.894V13.696H9.93475V2.244H11.8948V3.364ZM15.9968 6.094C15.9968 5.62733 15.8988 5.226 15.7028 4.89C15.5161 4.54467 15.2641 4.28333 14.9468 4.106C14.6388 3.92867 14.3028 3.84 13.9388 3.84C13.5841 3.84 13.2481 3.93333 12.9308 4.12C12.6228 4.29733 12.3708 4.55867 12.1748 4.904C11.9881 5.24933 11.8948 5.65533 11.8948 6.122C11.8948 6.58867 11.9881 6.99467 12.1748 7.34C12.3708 7.68533 12.6228 7.95133 12.9308 8.138C13.2481 8.31533 13.5841 8.404 13.9388 8.404C14.3028 8.404 14.6388 8.31067 14.9468 8.124C15.2641 7.93733 15.5161 7.67133 15.7028 7.326C15.8988 6.98067 15.9968 6.57 15.9968 6.094Z"
                          fill="#A1A5B7"
                        />
                      </svg>
                    </div>
                    <input
                      className="ml-2 bg-[#F5F8FA] text-sm focus:outline-none"
                      type="number"
                      min="0"
                      placeholder="Minimun Salary..."
                      name="min_salary"
                      value={jobVacancy.min_salary ?? ''}
                      onChange={(e) => {
                        setJobVacancy({
                          ...jobVacancy,
                          min_salary: e.target.value,
                        });
                      }}
                    />
                  </div>
                  <p className="text-xs">sampai</p>
                  <div className="flex items-center rounded-md border-2 border-[#F5F8FA] bg-[#F5F8FA] focus-within:border-black">
                    <div className="flex items-center justify-center rounded-l-md bg-[#DCE5EB]  p-3">
                      <svg
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M6.006 10L3.85 6.192H2.926V10H0.966V0.228H4.634C5.39 0.228 6.034 0.363333 6.566 0.634C7.098 0.895333 7.49467 1.25467 7.756 1.712C8.02667 2.16 8.162 2.664 8.162 3.224C8.162 3.868 7.97533 4.45133 7.602 4.974C7.22867 5.48733 6.67333 5.842 5.936 6.038L8.274 10H6.006ZM2.926 4.722H4.564C5.096 4.722 5.49267 4.596 5.754 4.344C6.01533 4.08267 6.146 3.72333 6.146 3.266C6.146 2.818 6.01533 2.47267 5.754 2.23C5.49267 1.978 5.096 1.852 4.564 1.852H2.926V4.722ZM11.8948 3.364C12.1468 3.00933 12.4921 2.71533 12.9308 2.482C13.3788 2.23933 13.8874 2.118 14.4568 2.118C15.1194 2.118 15.7168 2.28133 16.2488 2.608C16.7901 2.93467 17.2148 3.40133 17.5228 4.008C17.8401 4.60533 17.9988 5.30067 17.9988 6.094C17.9988 6.88733 17.8401 7.592 17.5228 8.208C17.2148 8.81467 16.7901 9.286 16.2488 9.622C15.7168 9.958 15.1194 10.126 14.4568 10.126C13.8874 10.126 13.3834 10.0093 12.9448 9.776C12.5154 9.54267 12.1654 9.24867 11.8948 8.894V13.696H9.93475V2.244H11.8948V3.364ZM15.9968 6.094C15.9968 5.62733 15.8988 5.226 15.7028 4.89C15.5161 4.54467 15.2641 4.28333 14.9468 4.106C14.6388 3.92867 14.3028 3.84 13.9388 3.84C13.5841 3.84 13.2481 3.93333 12.9308 4.12C12.6228 4.29733 12.3708 4.55867 12.1748 4.904C11.9881 5.24933 11.8948 5.65533 11.8948 6.122C11.8948 6.58867 11.9881 6.99467 12.1748 7.34C12.3708 7.68533 12.6228 7.95133 12.9308 8.138C13.2481 8.31533 13.5841 8.404 13.9388 8.404C14.3028 8.404 14.6388 8.31067 14.9468 8.124C15.2641 7.93733 15.5161 7.67133 15.7028 7.326C15.8988 6.98067 15.9968 6.57 15.9968 6.094Z"
                          fill="#A1A5B7"
                        />
                      </svg>
                    </div>
                    <input
                      className="ml-2 bg-[#F5F8FA] text-sm focus:outline-none"
                      type="number"
                      min="0"
                      placeholder="Max Salary..."
                      name="max_salary"
                      value={jobVacancy.max_salary ?? ''}
                      onChange={(e) => {
                        setJobVacancy({
                          ...jobVacancy,
                          max_salary: e.target.value,
                        });
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" items-center lg:flex">
              <div className="w-5/12">
                <label
                  className={`text-xs font-medium text-[#3F4254] lg:text-base `}
                >
                  Batas Pendaftaran
                </label>
              </div>
              <div className="lg:w-7/12 ">
                <div className="my-2 flex items-center justify-between gap-2 lg:my-5 ">
                  <div className="flex w-full items-center rounded-md border-2 border-[#F5F8FA] bg-[#F5F8FA] pr-3 focus-within:border-black">
                    <div className="flex items-center justify-center rounded-l-md bg-[#DCE5EB] p-3">
                      <svg
                        width="16"
                        height="14"
                        viewBox="0 0 20 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5.673 0C5.85865 0 6.0367 0.0737498 6.16797 0.205025C6.29925 0.336301 6.373 0.514348 6.373 0.7V2.009H13.89V0.709C13.89 0.523348 13.9637 0.345301 14.095 0.214025C14.2263 0.0827498 14.4043 0.009 14.59 0.009C14.7757 0.009 14.9537 0.0827498 15.085 0.214025C15.2162 0.345301 15.29 0.523348 15.29 0.709V2.009H18C18.5303 2.009 19.0388 2.21958 19.4139 2.59443C19.7889 2.96929 19.9997 3.47774 20 4.008V18.001C19.9997 18.5313 19.7889 19.0397 19.4139 19.4146C19.0388 19.7894 18.5303 20 18 20H2C1.46974 20 0.961184 19.7894 0.58614 19.4146C0.211096 19.0397 0.00026513 18.5313 0 18.001L0 4.008C0.00026513 3.47774 0.211096 2.96929 0.58614 2.59443C0.961184 2.21958 1.46974 2.009 2 2.009H4.973V0.699C4.97327 0.513522 5.04713 0.335731 5.17838 0.204672C5.30963 0.0736123 5.48752 -1.89263e-07 5.673 0V0ZM1.4 7.742V18.001C1.4 18.0798 1.41552 18.1578 1.44567 18.2306C1.47583 18.3034 1.52002 18.3695 1.57574 18.4253C1.63145 18.481 1.69759 18.5252 1.77039 18.5553C1.84319 18.5855 1.92121 18.601 2 18.601H18C18.0788 18.601 18.1568 18.5855 18.2296 18.5553C18.3024 18.5252 18.3685 18.481 18.4243 18.4253C18.48 18.3695 18.5242 18.3034 18.5543 18.2306C18.5845 18.1578 18.6 18.0798 18.6 18.001V7.756L1.4 7.742ZM6.667 14.619V16.285H5V14.619H6.667ZM10.833 14.619V16.285H9.167V14.619H10.833ZM15 14.619V16.285H13.333V14.619H15ZM6.667 10.642V12.308H5V10.642H6.667ZM10.833 10.642V12.308H9.167V10.642H10.833ZM15 10.642V12.308H13.333V10.642H15ZM4.973 3.408H2C1.92121 3.408 1.84319 3.42352 1.77039 3.45367C1.69759 3.48382 1.63145 3.52802 1.57574 3.58374C1.52002 3.63945 1.47583 3.70559 1.44567 3.77839C1.41552 3.85119 1.4 3.92921 1.4 4.008V6.343L18.6 6.357V4.008C18.6 3.92921 18.5845 3.85119 18.5543 3.77839C18.5242 3.70559 18.48 3.63945 18.4243 3.58374C18.3685 3.52802 18.3024 3.48382 18.2296 3.45367C18.1568 3.42352 18.0788 3.408 18 3.408H15.29V4.337C15.29 4.52265 15.2162 4.7007 15.085 4.83197C14.9537 4.96325 14.7757 5.037 14.59 5.037C14.4043 5.037 14.2263 4.96325 14.095 4.83197C13.9637 4.7007 13.89 4.52265 13.89 4.337V3.408H6.373V4.328C6.373 4.51365 6.29925 4.6917 6.16797 4.82297C6.0367 4.95425 5.85865 5.028 5.673 5.028C5.48735 5.028 5.3093 4.95425 5.17803 4.82297C5.04675 4.6917 4.973 4.51365 4.973 4.328V3.408Z"
                          fill="#A1A5B7"
                        />
                      </svg>
                    </div>
                    <input
                      className="ml-2 w-full bg-[#F5F8FA] text-sm focus:outline-none"
                      type="date"
                      name="registration_end_date"
                      value={jobVacancy.registration_end_date ?? ''}
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className=" items-center lg:flex">
              <div className="w-5/12">
                <label
                  className={`text-xs font-medium text-[#3F4254] lg:text-base `}
                >
                  Skill Yang Dibutuhkan
                </label>
              </div>
              <div className="lg:w-7/12 ">
                <div className="my-2 flex items-center justify-between gap-2 lg:my-5 ">
                  <SkillRequirmentBusiness
                    data={jobVacancy}
                    onChange={setJobVacancy}
                  />
                </div>
              </div>
            </div>
            <InputList
              label={'Syarat/Kualifikasi'}
              data={jobVacancy}
              name={'qualifications'}
              onChange={setJobVacancy}
            />
            <InputList
              label={'Akomodasi dan Keuantungan'}
              data={jobVacancy}
              name={'benefits'}
              onChange={setJobVacancy}
            />
            <InputList
              label={'Tugas dan Tanggung Jawab'}
              data={jobVacancy}
              name={'responsibilitys'}
              onChange={setJobVacancy}
            />
            <div className=" items-center lg:flex">
              <div className="w-5/12">
                <label
                  className={`text-xs font-medium text-[#3F4254] lg:text-base `}
                >
                  Deskripsi Pekerjaan
                </label>
              </div>
              <div className="lg:w-7/12 ">
                <textarea
                  name="description"
                  className="h-[150px] w-full rounded-md bg-[#F5F8FA] p-3 text-sm"
                  value={jobVacancy.description ?? ''}
                  onChange={handleChange}
                ></textarea>
              </div>
            </div>
            <section className=" text-left text-sm text-red-500">
              {error.map((err, index) => (
                <p key={index}>{err}</p>
              ))}
            </section>
            <div className="mt-4 flex justify-end gap-4 ">
              <button
                onClick={() => {
                  setJobVacancy({
                    ...jobVacancy,
                    is_published: 0,
                  });
                  handleSubmit();
                }}
                className="rounded-md bg-[#F5F8FA] px-4 py-2 text-sm"
              >
                Arsipkan
              </button>
              <button
                onClick={() => {
                  setJobVacancy({
                    ...jobVacancy,
                    is_published: 1,
                  });
                  handleSubmit();
                }}
                className="rounded-md bg-[#FE9A00] px-4 py-2 text-sm text-white"
              >
                Simpan
              </button>
            </div>
          </div>
        </BasicCard>
      </LayoutBusiness>
      <Transition appear show={modalSuccess} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 overflow-y-auto"
          onClose={() => {
            setModalSuccess(false);
            window.location.href = '/business/job';
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-50" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <div>
                    <div className="flex items-center justify-center p-8">
                      <svg
                        width="100"
                        height="100"
                        viewBox="0 0 100 100"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M50 93.75C38.3968 93.75 27.2688 89.1406 19.0641 80.9359C10.8594 72.7312 6.25 61.6032 6.25 50C6.25 38.3968 10.8594 27.2688 19.0641 19.0641C27.2688 10.8594 38.3968 6.25 50 6.25C61.6032 6.25 72.7312 10.8594 80.9359 19.0641C89.1406 27.2688 93.75 38.3968 93.75 50C93.75 61.6032 89.1406 72.7312 80.9359 80.9359C72.7312 89.1406 61.6032 93.75 50 93.75ZM50 100C63.2608 100 75.9785 94.7322 85.3553 85.3553C94.7322 75.9785 100 63.2608 100 50C100 36.7392 94.7322 24.0215 85.3553 14.6447C75.9785 5.26784 63.2608 0 50 0C36.7392 0 24.0215 5.26784 14.6447 14.6447C5.26784 24.0215 0 36.7392 0 50C0 63.2608 5.26784 75.9785 14.6447 85.3553C24.0215 94.7322 36.7392 100 50 100Z"
                          fill="#50CD89"
                        />
                        <path
                          d="M68.5624 31.0625C68.5179 31.1057 68.4761 31.1516 68.4374 31.2L46.7312 58.8563L33.6499 45.7688C32.7613 44.9408 31.586 44.49 30.3717 44.5115C29.1573 44.5329 27.9986 45.0248 27.1398 45.8837C26.281 46.7425 25.789 47.9011 25.7676 49.1155C25.7461 50.3299 26.1969 51.5052 27.0249 52.3938L43.5624 68.9375C44.0079 69.3822 44.5384 69.7327 45.1223 69.9679C45.7062 70.2031 46.3315 70.3183 46.9608 70.3067C47.5902 70.295 48.2108 70.1567 48.7855 69.9C49.3603 69.6433 49.8774 69.2735 50.3062 68.8125L75.2562 37.625C76.1057 36.7334 76.5702 35.5431 76.5492 34.3117C76.5283 33.0803 76.0235 31.9066 75.144 31.0444C74.2645 30.1822 73.0811 29.7007 71.8495 29.7041C70.6179 29.7075 69.4371 30.1955 68.5624 31.0625Z"
                          fill="#50CD89"
                        />
                      </svg>
                    </div>
                    <p className="mx-auto w-full text-center text-[#7E8299] lg:w-[400px]">
                      Lowongan kerja berhasil ditambahkan!
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </BusinessProvider>
  );
}

// function InputTag({ data, handleOnChange }) {
//   const [tags, setTags] = useState([]);
//   const removeTags = (indexToRemove) => {
//     setTags([...tags.filter((_, index) => index !== indexToRemove)]);
//     handleOnChange({
//       ...data,
//       skills: [...tags],
//     });
//   };
//   const addTags = (event) => {
//     if (event.target.value !== '') {
//       setTags([...tags, event.target.value]);
//       handleOnChange({
//         ...data,
//         skills: [...tags],
//       });
//       event.target.value = '';
//     }
//   };
//   return (
//     <div className="flex h-fit w-full flex-wrap rounded-md border-2 border-transparent bg-soft-gray py-5 px-3 focus-within:border-black">
//       <ul className="flex flex-wrap">
//         {tags.map((tag, index) => (
//           <li
//             className="m-2 flex items-center gap-3 rounded-md bg-[#A1A5B7] px-3 py-1 text-white"
//             key={index}
//           >
//             <span>{tag}</span>
//             <button className="" onClick={() => removeTags(index)}>
//               x
//             </button>
//           </li>
//         ))}
//       </ul>
//       <input
//         name="skill"
//         onKeyUp={(event) => (event.key === 'Enter' ? addTags(event) : null)}
//         className="bg-soft-gray px-3 text-sm focus:border-0 focus:outline-none"
//         type="text"
//       />
//     </div>
//   );
// }

function InputList({ label, data, name, onChange }) {
  const [input, setInput] = useState('');
  const [list, setList] = useState([]);
  const addList = () => {
    if (input !== '') {
      setList([...list, input]);
      onChange({
        ...data,
        [name]: [...data[name], input],
      });
      setInput('');
    }
  };

  function deleteList(item) {
    const indexItem = list.indexOf(item);
    setList([...list.filter((_, index) => index !== indexItem)]);
  }

  return (
    <div className="my-2 lg:my-5 lg:flex">
      <div className="w-5/12">
        <label className={`text-xs font-medium text-[#3F4254] lg:text-base `}>
          {label}
        </label>
      </div>
      <div className="lg:w-7/12">
        {list.map((item, index) => (
          <div
            key={index}
            className="my-2 flex items-center justify-between gap-2 first:mb-2 first:mt-0 lg:my-5"
          >
            <div
              className="w-full rounded-md bg-soft-gray px-5 py-[0.65rem]"
              name="listRequirment"
            >
              <p className="text-sm">{item}</p>
            </div>

            <button
              className={`rounded-md bg-[#FFF5F8] px-3 py-[0.65rem]`}
              onClick={() => {
                deleteList(item);
              }}
            >
              <svg
                width="18"
                height="19"
                viewBox="0 0 18 19"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.65 3.3999C10.65 2.9623 10.4762 2.54261 10.1667 2.23318C9.85729 1.92374 9.43761 1.7499 9 1.7499C8.56239 1.7499 8.14271 1.92374 7.83327 2.23318C7.52384 2.54261 7.35 2.9623 7.35 3.3999H6.25C6.25 2.67056 6.53973 1.97108 7.05546 1.45536C7.57118 0.939634 8.27065 0.649902 9 0.649902C9.72935 0.649902 10.4288 0.939634 10.9445 1.45536C11.4603 1.97108 11.75 2.67056 11.75 3.3999H16.7C16.8459 3.3999 16.9858 3.45785 17.0889 3.56099C17.1921 3.66414 17.25 3.80403 17.25 3.9499C17.25 4.09577 17.1921 4.23567 17.0889 4.33881C16.9858 4.44196 16.8459 4.4999 16.7 4.4999H16.0906L14.665 16.8529C14.6029 17.389 14.3459 17.8837 13.9429 18.2427C13.5399 18.6016 13.019 18.8 12.4793 18.7999H5.5207C4.98098 18.8 4.46007 18.6016 4.05706 18.2427C3.65405 17.8837 3.39707 17.389 3.335 16.8529L1.9083 4.4999H1.3C1.17127 4.49995 1.04661 4.45483 0.947715 4.37242C0.848824 4.29001 0.781971 4.17553 0.7588 4.0489L0.75 3.9499C0.75 3.80403 0.807946 3.66414 0.911091 3.56099C1.01424 3.45785 1.15413 3.3999 1.3 3.3999H10.65ZM14.9818 4.4999H3.0171L4.4273 16.7264C4.45834 16.9946 4.58692 17.2419 4.78854 17.4215C4.99016 17.601 5.25075 17.7001 5.5207 17.6999H12.4793C12.7491 17.6998 13.0094 17.6006 13.2108 17.4211C13.4122 17.2416 13.5406 16.9944 13.5716 16.7264L14.9818 4.4999ZM7.35 7.2499C7.6195 7.2499 7.845 7.4204 7.8912 7.6448L7.9 7.7317V14.4692C7.9 14.7343 7.6536 14.9499 7.35 14.9499C7.0805 14.9499 6.855 14.7794 6.8088 14.555L6.8 14.4681V7.7328C6.8 7.4666 7.0464 7.251 7.35 7.251V7.2499ZM10.65 7.2499C10.9195 7.2499 11.145 7.4204 11.1912 7.6448L11.2 7.7317V14.4692C11.2 14.7343 10.9536 14.9499 10.65 14.9499C10.3805 14.9499 10.155 14.7794 10.1088 14.555L10.1 14.4681V7.7328C10.1 7.4666 10.3464 7.251 10.65 7.251V7.2499Z"
                  fill="#F1416C"
                />
              </svg>
            </button>
          </div>
        ))}
        <div className="my-2 flex items-center justify-between gap-2 first:mb-2 first:mt-0 lg:my-5 ">
          <input
            className="input-form text-sm"
            onChange={(e) => {
              setInput(e.target.value);
            }}
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                addList();
              }
            }}
            name="listRequirment"
            // onKeyDown={(e) => {
            //   if (e.key === 'Enter') {
            //     addList();
            //   }
            // }}
            value={input}
          />
          <button className={`rounded-md bg-[#E8FFF3] p-3`} onClick={addList}>
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8.9375 7.0625V0.5H7.0625V7.0625H0.5V8.9375H7.0625V15.5H8.9375V8.9375H15.5V7.0625H8.9375Z"
                fill="#50CD89"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
