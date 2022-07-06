import React, { useEffect, useState } from 'react'
import Header from 'components/Layout/Header'
import ASideBar from 'components/Aside/AsideBar'
import ASideBarMobile from 'components/Aside/ASideBarMobile'
import ProfileService from 'services/Profile/ProfileService'
import ErrorModal from 'components/Widgets/ErrorModal'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { getCurrentUser } from 'services/Auth/AuthService'
import { Helmet } from 'react-helmet'

export default function Layout({ PageName, children, slider }) {
  const [offCanvas, setOffCanvas] = useState(false)
  const [data, setData] = useState({})
  const [isOpen, setIsOpen] = useState(false)
  const [loading, setLoading] = useState(true)
  useEffect(() => {
    async function fetchData() {
      const profile = getCurrentUser()
      const response_profile = await ProfileService.getProfileData();
      if (response_profile.data.meta.status === 'error') {
        setIsOpen(true);
      } else {
        setData(profile)
        setLoading(false);
      }
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
  return (
    <>
      {!loading && !isOpen ? (
        <main className="flex">
          <Helmet>
            <title>{PageName}</title>
          </Helmet>
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
            } min-h-screen bg-[#FFFFFF]`}
          >
            <Header data={data} handleNav={handleNav} PageName={PageName} />
            <div className={`${slider ? '' : 'my-4 mx-3 py-5 lg:mx-7'}`}>{children}</div>
            
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
