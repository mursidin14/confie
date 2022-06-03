import React, { useEffect, useState } from 'react';
import Layout from 'components/Layout/Layout';
import ProgressBar from 'components/Widgets/ProgressBar';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';
import { useParams } from 'react-router-dom';
import ModalMilestone from 'components/Modal/ModalMilestone';
import PersonalPlanService from 'services/PersonalPlan/PersonalPlan';

export default function PersonalDevelopmentDetail() {
  const [targetMilestone, setTargetMilestone] = useState([]);
  const [target, setTarget] = useState({});
  const [progress, setProgress] = useState(0);
  const { id, idDetail } = useParams();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getTargetDetail() {
      // let response = await fetch(
      //   `https://6267fd9b01dab900f1c82b3d.mockapi.io/target/${idDetail}/target_milestone`
      // );
      // let data = await response.json();
      // let res = await fetch(
      //   `https://6267fd9b01dab900f1c82b3d.mockapi.io/target/${idDetail}`
      // );
      // let dataTarget = await res.json();
      // setTarget(dataTarget);
      // setProgress(dataTarget.progress);
      // setTargetMilestone(data);

      const response = await PersonalPlanService.getDetailPersonalPlanData(
        idDetail
      );
      setTarget(response.data.data);
      setTargetMilestone(response.data.data.milestone);
      setLoading(false);
    }

    getTargetDetail();
  }, []);

  function handleClick() {
    setModal(!modal);
  }
  function handleChange(e) {
    let target_checkbox = document.querySelectorAll('.target_checkbox').length;
    let checkbox_checked = document.querySelectorAll(
      '.target_checkbox:checked'
    ).length;
    let percentage = (checkbox_checked / target_checkbox) * 100;
    setProgress(percentage);
    // async function updateTarget() {
    //     let res = await fetch(`https://6267fd9b01dab900f1c82b3d.mockapi.io/target/${idDetail}`, {
    //         method: 'PUT',
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             ...target,
    //             progress: percentage
    //         })
    //     })
    // }
    // updateTarget();
  }
  return (
    <Layout userId={id} PageName={'Personal Development Plan'}>
      <div className="lg:relative">
        <div className="mt-4 rounded-md bg-white py-5 text-left shadow-md ">
          <div className="flex items-center justify-between px-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#181C32]">
                {target.title || <Skeleton width={100} />}
              </h3>
              <div className="flex items-center gap-3 py-3">
                <svg
                  className="h-5 w-5"
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.3"
                    d="M16.5 17.333H1.49996C0.999959 17.333 0.666626 16.9997 0.666626 16.4997V3.16634C0.666626 2.66634 0.999959 2.33301 1.49996 2.33301H16.5C17 2.33301 17.3333 2.66634 17.3333 3.16634V16.4997C17.3333 16.9997 17 17.333 16.5 17.333Z"
                    fill="#A1A5B7"
                  />
                  <path
                    d="M3.99996 4.00033C3.49996 4.00033 3.16663 3.66699 3.16663 3.16699V1.50033C3.16663 1.00033 3.49996 0.666992 3.99996 0.666992C4.49996 0.666992 4.83329 1.00033 4.83329 1.50033V3.16699C4.83329 3.66699 4.49996 4.00033 3.99996 4.00033ZM8.16663 3.16699V1.50033C8.16663 1.00033 7.83329 0.666992 7.33329 0.666992C6.83329 0.666992 6.49996 1.00033 6.49996 1.50033V3.16699C6.49996 3.66699 6.83329 4.00033 7.33329 4.00033C7.83329 4.00033 8.16663 3.66699 8.16663 3.16699ZM11.5 3.16699V1.50033C11.5 1.00033 11.1666 0.666992 10.6666 0.666992C10.1666 0.666992 9.83329 1.00033 9.83329 1.50033V3.16699C9.83329 3.66699 10.1666 4.00033 10.6666 4.00033C11.1666 4.00033 11.5 3.66699 11.5 3.16699ZM14.8333 3.16699V1.50033C14.8333 1.00033 14.5 0.666992 14 0.666992C13.5 0.666992 13.1666 1.00033 13.1666 1.50033V3.16699C13.1666 3.66699 13.5 4.00033 14 4.00033C14.5 4.00033 14.8333 3.66699 14.8333 3.16699Z"
                    fill="#A1A5B7"
                  />
                  <path
                    d="M6.33337 9.91663C6.6667 9.91663 6.9167 9.8333 7.08337 9.66663C7.25003 9.49997 7.4167 9.24997 7.4167 8.91663C7.4167 8.66663 7.33337 8.41663 7.1667 8.24997C7.00003 8.0833 6.75003 7.99997 6.50003 7.99997C6.33337 7.99997 6.16669 7.99997 6.00002 8.0833C5.83336 8.16663 5.75003 8.24997 5.6667 8.3333C5.58337 8.41663 5.50003 8.49997 5.4167 8.66663C5.33337 8.8333 5.25003 8.91663 5.25003 9.0833C5.25003 9.16663 5.1667 9.16663 5.08337 9.24997C5.00003 9.3333 4.91669 9.3333 4.75002 9.3333C4.58336 9.3333 4.50003 9.24997 4.4167 9.16663C4.33337 9.0833 4.25003 8.91663 4.25003 8.74997C4.25003 8.5833 4.33337 8.41663 4.4167 8.24997C4.50003 8.0833 4.6667 7.91663 4.83337 7.74997C5.00003 7.5833 5.25002 7.41663 5.58336 7.3333C5.91669 7.24999 6.16671 7.16666 6.58337 7.16666C6.91671 7.16666 7.16671 7.24999 7.4167 7.3333C7.6667 7.41663 7.9167 7.5833 8.08336 7.66663C8.25003 7.74997 8.4167 7.99997 8.50003 8.24997C8.58336 8.49997 8.6667 8.66663 8.6667 8.91663C8.6667 9.24997 8.58337 9.49997 8.4167 9.74997C8.25003 9.99997 8.08337 10.25 7.83337 10.4166C8.08337 10.5833 8.33336 10.75 8.50003 10.9166C8.6667 11.0833 8.83336 11.25 8.9167 11.5C9.00003 11.75 9.08337 11.9166 9.08337 12.1666C9.08337 12.5 9.00003 12.75 8.9167 13C8.83336 13.25 8.58337 13.5 8.4167 13.75C8.25003 14 7.9167 14.1666 7.58337 14.25C7.25003 14.3333 6.9167 14.4166 6.50003 14.4166C6.08337 14.4166 5.75003 14.3333 5.4167 14.1666C5.08337 14 4.83337 13.8333 4.6667 13.6666C4.50003 13.5 4.33337 13.25 4.25003 13C4.1667 12.75 4.08337 12.5833 4.08337 12.4166C4.08337 12.25 4.1667 12.0833 4.25003 12C4.33337 11.9166 4.50003 11.8333 4.6667 11.8333C4.75003 11.8333 4.83337 11.8333 4.91671 11.9166C5.00004 12 5.08337 12 5.08337 12.0833C5.25003 12.5 5.4167 12.8333 5.6667 13.0833C5.9167 13.3333 6.1667 13.4166 6.50003 13.4166C6.6667 13.4166 6.9167 13.3333 7.08337 13.25C7.25003 13.1666 7.4167 13 7.58337 12.8333C7.75003 12.6666 7.75003 12.4166 7.75003 12.1666C7.75003 11.75 7.6667 11.5 7.4167 11.25C7.16671 11 6.91671 10.9166 6.58337 10.9166C6.50004 10.9166 6.4167 10.9166 6.25003 10.9166C6.08337 10.9166 6.00002 10.9166 6.00002 10.9166C5.83336 10.9166 5.66669 10.8333 5.58336 10.75C5.50002 10.6666 5.4167 10.5 5.4167 10.4166C5.4167 10.25 5.50002 10.1666 5.58336 9.99997C5.66669 9.8333 5.83337 9.8333 6.08337 9.8333H6.33337V9.91663ZM11.75 13.5833V9.16663C10.9167 9.8333 10.3334 10.0833 10.0834 10.0833C9.9167 10.0833 9.83336 9.99997 9.75003 9.91663C9.6667 9.8333 9.58336 9.66663 9.58336 9.49997C9.58336 9.3333 9.6667 9.24997 9.75003 9.16663C9.83336 9.0833 10 8.99997 10.3334 8.8333C10.75 8.66663 11.0834 8.41663 11.25 8.24997C11.4167 8.0833 11.6667 7.8333 11.9167 7.5833C12.1667 7.3333 12.25 7.16666 12.25 7.08332C12.25 6.99999 12.4167 7 12.5834 7C12.75 7 12.9167 7.08332 13 7.16666C13.0834 7.24999 13.1667 7.49997 13.1667 7.74997V13.3333C13.1667 14 12.9167 14.3333 12.5 14.3333C12.3334 14.3333 12.1667 14.25 12 14.1666C11.8334 14.0833 11.75 13.8333 11.75 13.5833Z"
                    fill="#A1A5B7"
                  />
                </svg>

                <p className="text-sm text-[#B5B5C3]">
                  {target.start_date ? (
                    formatDate(target.start_date * 1000)
                  ) : (
                    <Skeleton width={100} />
                  )}
                </p>
              </div>
            </div>
            <div className="w-5/12">
              <div className="flex items-center justify-between">
                <p className="text-[#181C32]">Progress</p>
                <p className="pb-3 text-sm text-[#181C32]">{progress}%</p>
              </div>
              <ProgressBar progressPercentage={progress}></ProgressBar>
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-md bg-white pt-7 pb-2  text-left shadow-md ">
          <div className="flex items-center justify-between px-8">
            <h3 className="text-base font-semibold ">Milestone</h3>
            <ModalMilestone idDetail={idDetail}></ModalMilestone>
          </div>
          <hr className="mt-2 w-full border-b-[1px] border-[#3F4254]/10" />
          {loading && <p className="py-3 text-center text-sm">Loading...</p>}
          {targetMilestone.map(({ target_title, quarter, id }, index) => (
            <>
              {quarter == '1' && (
                <>
                  <div className="w-full bg-[#F5F8FA] py-5 px-10">
                    <p className="font-bold text-[#A1A5B7]">
                      Quarter {quarter}
                    </p>
                  </div>
                  <MilestoneTarget
                    target_milestone={target_title}
                    quarter={quarter}
                    id={id}
                    idDetail={idDetail}
                    handleChange={handleChange}
                  />
                </>
              )}
              {quarter == '2' && (
                <>
                  <div className="w-full bg-[#F5F8FA] py-5 px-10">
                    <p className="font-bold text-[#A1A5B7]">
                      Quarter {quarter}
                    </p>
                  </div>
                  <MilestoneTarget
                    target_milestone={target_title}
                    quarter={quarter}
                    id={id}
                    idDetail={idDetail}
                    handleChange={handleChange}
                  />
                </>
              )}
              {quarter == '3' && (
                <>
                  <div className="w-full bg-[#F5F8FA] py-5 px-10">
                    <p className="font-bold text-[#A1A5B7]">
                      Quarter {quarter}
                    </p>
                  </div>
                  <MilestoneTarget
                    target_milestone={target_title}
                    quarter={quarter}
                    id={id}
                    idDetail={idDetail}
                    handleChange={handleChange}
                  />
                </>
              )}
              {quarter == '4' && (
                <>
                  <div className="w-full bg-[#F5F8FA] py-5 px-10">
                    <p className="font-bold text-[#A1A5B7]">
                      Quarter {quarter}
                    </p>
                  </div>
                  <MilestoneTarget
                    target_milestone={target_title}
                    quarter={quarter}
                    id={id}
                    idDetail={idDetail}
                    handleChange={handleChange}
                  />
                </>
              )}
            </>
          ))}
        </div>
      </div>
    </Layout>
  );
}

function MilestoneTarget({
  target_milestone,
  quarter,
  idDetail,
  id,
  handleChange,
}) {
  return (
    <>
      <div className="flex items-center justify-between gap-3 py-5 px-10">
        <div className="flex items-center gap-3">
          <input
            className="target_checkbox"
            name={target_milestone}
            type="checkbox"
            onChange={handleChange}
          />
          <p>{target_milestone}</p>
        </div>
        <div className="flex justify-center gap-2">
          <a>
            <svg
              className="w-11"
              width="34"
              height="34"
              viewBox="0 0 34 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4.225C0 1.8916 1.8916 0 4.225 0H29.775C32.1084 0 34 1.8916 34 4.225V29.775C34 32.1084 32.1084 34 29.775 34H4.225C1.8916 34 0 32.1084 0 29.775V4.225Z"
                fill="#FFF8DD"
              />
              <path
                opacity="0.3"
                d="M25.05 14.2649L23.4307 15.8833L19.1137 11.5663L20.7322 9.94705C21.0186 9.66076 21.4069 9.5 21.8119 9.5C22.2168 9.5 22.6051 9.66076 22.8915 9.94705L25.05 12.1056C25.3363 12.3919 25.4971 12.7803 25.4971 13.1852C25.4971 13.5901 25.3363 13.9785 25.05 14.2649ZM11.7652 24.4491L16.4152 22.8988L12.0982 18.5818L10.548 23.2318C10.4911 23.4016 10.4828 23.5841 10.5239 23.7584C10.565 23.9328 10.654 24.0922 10.7808 24.2187C10.9077 24.3451 11.0673 24.4337 11.2417 24.4744C11.4162 24.5152 11.5985 24.5064 11.7682 24.4491H11.7652Z"
                fill="#FE9A00"
              />
              <path
                d="M13.1805 23.975L11.769 24.446C11.5995 24.5024 11.4175 24.5106 11.2436 24.4695C11.0697 24.4284 10.9106 24.3398 10.7842 24.2134C10.6578 24.0871 10.5691 23.9281 10.5279 23.7542C10.4867 23.5803 10.4947 23.3984 10.551 23.2288L11.022 21.8165L13.1805 23.975ZM12.1013 18.5787L16.4183 22.8957L23.4338 15.8802L19.1168 11.5632L12.1013 18.5787Z"
                fill="#FE9A00"
              />
            </svg>
          </a>

          <button
            onClick={async function () {
              const res = await fetch(
                `https://6267fd9b01dab900f1c82b3d.mockapi.io/target/${idDetail}/target_milestone/${id}`,
                {
                  method: 'DELETE',
                  headers: {
                    'Content-Type': 'application/json',
                  },
                }
              );
              window.location.reload();
            }}
          >
            <svg
              className="w-11"
              width="34"
              height="34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 4.225C0 1.8916 1.8916 0 4.225 0H29.775C32.1084 0 34 1.8916 34 4.225V29.775C34 32.1084 32.1084 34 29.775 34H4.225C1.8916 34 0 32.1084 0 29.775V4.225Z"
                fill="#FFF5F8"
              />
              <path
                d="M11.75 14.75C11.75 14.3358 12.0858 14 12.5 14H21.5C21.9142 14 22.25 14.3358 22.25 14.75V21.5C22.25 22.7427 21.2427 23.75 20 23.75H14C12.7574 23.75 11.75 22.7427 11.75 21.5V14.75Z"
                fill="#F1416C"
              />
              <path
                opacity="0.5"
                d="M11.75 11.75C11.75 11.3358 12.0858 11 12.5 11H21.5C21.9142 11 22.25 11.3358 22.25 11.75C22.25 12.1642 21.9142 12.5 21.5 12.5H12.5C12.0858 12.5 11.75 12.1642 11.75 11.75Z"
                fill="#F1416C"
              />
              <path
                opacity="0.5"
                d="M14.75 11C14.75 10.5858 15.0858 10.25 15.5 10.25H18.5C18.9142 10.25 19.25 10.5858 19.25 11H14.75Z"
                fill="#F1416C"
              />
            </svg>
          </button>
        </div>
      </div>
    </>
  );
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}
