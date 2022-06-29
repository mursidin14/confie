import React, { useEffect, useState } from 'react'
import Header from 'components/Layout/Header'
import ASideBar from 'components/Aside/AsideBar'
import ASideBarMobile from 'components/Aside/ASideBarMobile'
import ProfileService from 'services/Profile/ProfileService'
import ErrorModal from 'components/Widgets/ErrorModal'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { getCurrentUser } from 'services/Auth/AuthService'

export default function Layout({ PageName, children, slider }) {
  const [offCanvas, setOffCanvas] = useState(false)
  const [data, setData] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  const [indexTips, setIndexTips] = useState(0)
  const tips = ['Lorem', 'Ipsum', 'Dolor', 'Sit', 'Amet']
  useEffect(() => {
    async function fetchData() {
      const profile = getCurrentUser()
      setData(profile)
      setLoading(false)
    }
    fetchData()
  }, [])
  function closeModal() {
    setIsOpen(false)
    window.location.href = '/'
  }
  function handleNav() {
    setOffCanvas(!offCanvas)
  }
  setInterval(() => {
    if (indexTips === tips.length - 1) {
      setIndexTips(0)
    } else {
      setIndexTips(indexTips + 1)
    }
  }, 5000);
  return (
    <>
      {!loading && !isOpen ? (
        <main className="flex">
          <ASideBar
            is_verified={data.email_verified_at}
            offCanvas={offCanvas}
            handleNav={handleNav}
            PageName={PageName}
          ></ASideBar>
          <ASideBarMobile
            is_verified={data.email_verified_at}
            offCanvas={offCanvas}
            handleNav={handleNav}
            PageName={PageName}
          ></ASideBarMobile>
          <section
            className={`${
              !offCanvas ? 'w-full' : 'w-full'
            } relative min-h-screen bg-[#FFFFFF]`}
          >
            <Header data={data} handleNav={handleNav} PageName={PageName} />
            <div className="my-4 mx-3 py-5 lg:mx-7">{children}</div>
            {slider && (
              <>
                <div className="absolute bottom-0 w-full bg-gray-600 p-4 text-white">
                <p className='font-semibold'>Tau Gak Sih?</p>
                  {tips.map((tip, index)=>{
                    return <p key={index} className={`${index === indexTips ? '' : 'hidden'}`}>{tip}</p>
                  })}
                </div>
              </>
            )}
          </section>
        </main>
      ) : null}
      {isOpen && (
        <ErrorModal
          error_msg={['Unauthorized!']}
          isOpen={isOpen}
          closeModal={closeModal}
        ></ErrorModal>
      )}
    </>
  )
}
