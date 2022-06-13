import React, { useState, useEffect } from 'react';
import PersonalPlanService from 'services/PersonalPlan/PersonalPlan';

export default function TargetCard({ data_plan }) {
  const [dataTarget, setDataTarget] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    function fetchData() {
      if (data_plan.length > 0) {
        data_plan.map(async (data) => {
          const dataPlan = {
            title: data.title,
            milestone: [],
          };
          const response = await PersonalPlanService.getDetailPersonalPlanData(
            data.id
          );
          dataPlan.milestone = response.data.data.milestone;
          setData([...dataTarget, dataPlan]);
        });
        setLoading(false);
      }
    }
    fetchData();
  }, []);
  function getQuarter() {
    let today = new Date();
    let month = today.getMonth();
    let quarter;
    if (month < 3) {
      quarter = 1;
    } else if (month < 6) {
      quarter = 2;
    } else if (month < 9) {
      quarter = 3;
    } else {
      quarter = 4;
    }
    return quarter;
  }
  const quarter = getQuarter();
  async function handleChange(id, status) {
    const response = await PersonalPlanService.updateQuarterlyPlanData(id, {
      status: !status,
    });
  }
  return (
    <div className="mt-4 rounded-md bg-white py-7  text-left shadow-mine lg:w-6/12 ">
      <div className="flex justify-between px-8 pb-2">
        <div className="flex items-center gap-4 ">
          <h3 className="py- text-base">Target Tahunan</h3>
          <p className="rounded-md bg-[#FFF8DD] px-4 py-1 text-xs text-[#FFC700]">
            Quarter {quarter}
          </p>
        </div>
        <a
          className="group rounded-md p-2 transition-all hover:bg-gray-400/80"
          href={`/pdp`}
        >
          <svg
            className="fill-[#A1A5B7] group-hover:fill-white"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              opacity="0.5"
              d="M5.35703 10.8333L14.2749 10.8333C14.7227 10.8333 15.0856 10.4602 15.0856 9.99998C15.0856 9.53974 14.7227 9.16665 14.2749 9.16665L5.35703 9.16665C4.90928 9.16665 4.54631 9.53974 4.54631 9.99998C4.54631 10.4602 4.90928 10.8333 5.35703 10.8333Z"
            />
            <path d="M13.0056 10.4714L9.6133 13.9583C9.2775 14.3035 9.2775 14.8632 9.6133 15.2083C9.9491 15.5535 10.4936 15.5535 10.8294 15.2083L15.3231 10.5892C15.6397 10.2638 15.6397 9.73616 15.3231 9.41074L10.8294 4.79166C10.4936 4.44648 9.9491 4.44648 9.6133 4.79166C9.2775 5.13683 9.2775 5.69648 9.6133 6.04166L13.0056 9.52857C13.2589 9.78891 13.2589 10.2111 13.0056 10.4714Z" />
          </svg>
        </a>
      </div>
      <hr className=" mt-2 w-full border-b-[1px] border-[#3F4254]/10" />
      {!loading && (
        <>
          {dataTarget.map((data) => (
            <>
              <div className="bg-[#F5F8FA] py-5 px-8">
                <p className="">{data.title}</p>
              </div>
              <div className="my-3 space-y-2 px-8">
                {!loading
                  ? data.milestone.map((milestone, index) => (
                      <div
                        className={`flex items-center gap-3 ${
                          milestone.quarter == quarter ? '' : 'hidden'
                        }`}
                      >
                        <Checkbox
                          milestone={milestone}
                          handleChange={handleChange}
                        />
                      </div>
                    ))
                  : 'loading'}
              </div>
            </>
          ))}
        </>
      )}
    </div>
  );
}

function Checkbox({ milestone, handleChange }) {
  const [status, setStatus] = useState(milestone.status);
  return (
    <>
      <input
        onChange={() => {
          handleChange(milestone.id, milestone.status);
          setStatus(!status);
        }}
        checked={status}
        type="checkbox"
        class="form-checkbox h-5 w-5 bg-[#FFF8DD]"
      />
      <p className={`text-sm ${status ? 'line-through' : ''}`}>
        {milestone.target_title}
      </p>
    </>
  );
}
