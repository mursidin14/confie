import React, { useEffect, useState } from 'react'
import Layout from 'components/Layout/Layout'
import ProgressBar from 'components/Widgets/ProgressBar'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useParams } from 'react-router-dom'
import ModalMilestone from 'components/Modal/ModalMilestone'
import UpdateMilestone from 'components/ModalUpdate/UpdateMilestone'
import PersonalPlanService from 'services/PersonalPlan/PersonalPlan'
import SweetAlert from 'components/Widgets/SweetAlert'
import { Dialog, Transition } from '@headlessui/react'
import { Fragment } from 'react'
import ModalUpdateTarget from 'components/Modal/ModalUpdateTarget'

export default function PersonalDevelopmentDetail() {
  const [targetMilestone, setTargetMilestone] = useState([])
  const [target, setTarget] = useState({})
  const [progress, setProgress] = useState(0)
  const { id, idDetail } = useParams()
  const [loading, setLoading] = useState(true)
  const [isOpenAccept, setIsOpenAccept] = useState(false)
  const closeModalAccept = () => {
    setIsOpenAccept(false)
    window.location.reload()
  }
  useEffect(() => {
    async function getTargetDetail() {
      const response = await PersonalPlanService.getDetailPersonalPlanData(
        idDetail
      )
      setTarget(response.data.data)
      setTargetMilestone(response.data.data.milestone)
      setProgress(response.data.data.process)
      setLoading(false)
    }

    getTargetDetail()
  }, [])

  useEffect(() => {
    let target_checkbox = document.querySelectorAll('.target_checkbox').length
    let checkbox_checked = document.querySelectorAll(
      '.target_checkbox:checked'
    ).length
    let percentage = Math.ceil((checkbox_checked / target_checkbox) * 100)
    if (isNaN(percentage)) {
      return
    }
    setProgress(percentage)
  })

  async function handleChange(id, status) {
    let target_checkbox = document.querySelectorAll('.target_checkbox').length
    let checkbox_checked = document.querySelectorAll(
      '.target_checkbox:checked'
    ).length
    let percentage = Math.ceil((checkbox_checked / target_checkbox) * 100)
    setProgress(percentage)
    const response = await PersonalPlanService.updateQuarterlyPlanData(id, {
      status: !status
    })
  }

  async function deleteMilestone(id) {
    const response = await PersonalPlanService.deleteQuarterlyPlanData(id)
    if (response.status === 200) {
      setIsOpenAccept(true)
    }
  }

  return (
    <Layout userId={id} PageName={'Personal Development Plan'}>
      <div className="lg:relative">
        <div className="mt-4 rounded-md bg-white py-5 text-left shadow-mine ">
          <div className="sm:flex items-center justify-between px-8">
            <div>
              <h3 className="text-2xl font-semibold text-[#181C32] flex items-center gap-2">
                {target.title || <Skeleton width={100} />}
                {loading ? <Skeleton width={10} />: <ModalUpdateTarget data={target}/>}
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
            <div className="sm:w-5/12">
              <div className="flex items-center justify-between">
                <p className="text-[#181C32]">Progress</p>
                <p className="pb-3 text-sm text-[#181C32]">{progress}%</p>
              </div>
              <ProgressBar progressPercentage={progress}></ProgressBar>
            </div>
          </div>
        </div>
        <div className="mt-4 rounded-md bg-white pt-7 pb-2  text-left shadow-mine ">
          <div className="flex items-center justify-between px-8">
            <h3 className="text-base font-semibold ">Milestone</h3>
            <ModalMilestone idDetail={idDetail}></ModalMilestone>
          </div>
          <hr className="mt-2 w-full border-b-[1px] border-[#3F4254]/10" />
          <section className="space-y-2">
            <section>
              <div className="w-full bg-[#F5F8FA] py-5 px-10">
                <p className="font-bold text-[#A1A5B7]">Quarter 1</p>
              </div>
              {targetMilestone.map((target, index) => (
                <>
                  {target.quarter == '1' && (
                    <>
                      <MilestoneTarget
                        target={target}
                        status={target.status}
                        deleteMilestone={deleteMilestone}
                        target_milestone={target.target_title}
                        quarter={target.quarter}
                        idPlan={idDetail}
                        id={target.id}
                        handleChange={handleChange}
                      />
                    </>
                  )}
                </>
              ))}
            </section>
            <section>
              <div className="w-full bg-[#F5F8FA] py-5 px-10">
                <p className="font-bold text-[#A1A5B7]">Quarter 2</p>
              </div>
              {targetMilestone.map((target, index) => (
                <>
                  {target.quarter == '2' && (
                    <>
                      <MilestoneTarget
                        target={target}
                        status={target.status}
                        deleteMilestone={deleteMilestone}
                        target_milestone={target.target_title}
                        quarter={target.quarter}
                        idPlan={idDetail}
                        id={target.id}
                        handleChange={handleChange}
                      />
                    </>
                  )}
                </>
              ))}
            </section>
            <section>
              <div className="w-full bg-[#F5F8FA] py-5 px-10">
                <p className="font-bold text-[#A1A5B7]">Quarter 3</p>
              </div>
              {targetMilestone.map((target, index) => (
                <>
                  {target.quarter == '3' && (
                    <>
                      <MilestoneTarget
                        target={target}
                        status={target.status}
                        deleteMilestone={deleteMilestone}
                        target_milestone={target.target_title}
                        quarter={target.quarter}
                        idPlan={idDetail}
                        id={target.id}
                        handleChange={handleChange}
                      />
                    </>
                  )}
                </>
              ))}
            </section>
            <section>
              <div className="w-full bg-[#F5F8FA] py-5 px-10">
                <p className="font-bold text-[#A1A5B7]">Quarter 4</p>
              </div>
              {targetMilestone.map((target, index) => (
                <>
                  {target.quarter == '4' && (
                    <>
                      <MilestoneTarget
                        target={target}
                        status={target.status}
                        deleteMilestone={deleteMilestone}
                        target_milestone={target.target_title}
                        quarter={target.quarter}
                        idPlan={idDetail}
                        id={target.id}
                        handleChange={handleChange}
                      />
                    </>
                  )}
                </>
              ))}
            </section>
          </section>
        </div>
      </div>
      <Transition appear show={isOpenAccept} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10 overflow-y-auto"
          onClose={closeModalAccept}
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
                      Data berhasil dihapus!
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </Layout>
  )
}

function MilestoneTarget({
  target,
  deleteMilestone,
  target_milestone,
  handleChange,
  id,
  idPlan,
  status
}) {
  const [check, setCheck] = useState(status)
  return (
    <>
      <div className="flex items-center justify-between gap-3 py-5 px-10">
        <div className="flex items-center gap-3">
          <input
            checked={check}
            className="target_checkbox"
            name={target_milestone}
            type="checkbox"
            onChange={() => {
              handleChange(id, status)
              setCheck(!check)
            }}
          />
          <p>{target_milestone}</p>
        </div>
        <div className="flex justify-center gap-2">
          <UpdateMilestone
            item={target}
            idPlan={idPlan}
            idMilestone={id}
          ></UpdateMilestone>
          <SweetAlert item={target} handleDelete={deleteMilestone}></SweetAlert>
        </div>
      </div>
    </>
  )
}

function formatDate(date) {
  return new Date(date).toLocaleDateString('id-ID', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
