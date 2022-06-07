import React, { useEffect, useState } from 'react';
import Header from 'components/Layout/Header';
import ASideBar from 'components/Aside/AsideBar';
import ASideBarMobile from 'components/Aside/ASideBarMobile';
import ProfileService from 'services/Profile/ProfileService';
import ErrorModal from 'components/Widgets/ErrorModal';
export default function Layout({PageName, children, userId}) {
  const [offCanvas, setOffCanvas] = useState(false);
  const [data, setData] = useState({});
  const [isOpen, setIsOpen] = useState(false)
  useEffect(() => {
    async function fetchData() {
      const response_profile = await ProfileService.getProfileData();
      if(response_profile.data.meta.status == 'error'){
        setIsOpen(true)
      }
      setData(response_profile);
    }
    fetchData();
  }, []);
  function closeModal() {
      setIsOpen(false);
      window.location.href = '/';
  }
  function handleNav() {
    setOffCanvas(!offCanvas);
  }
  return (
    <main className="flex">
      <ASideBar
        offCanvas={offCanvas}
        handleNav={handleNav}
        PageName={PageName}
        userId={userId}
      ></ASideBar>
      <ASideBarMobile
        offCanvas={offCanvas}
        handleNav={handleNav}
        PageName={PageName}
        userId={userId}
      ></ASideBarMobile>
      <section
        className={`${
          !offCanvas ? 'w-full' : 'w-full'
        } min-h-screen bg-[#FFFFFF]`}
      >
        <Header data={data} handleNav={handleNav} PageName={PageName} />
        <div className="my-4 lg:mx-7 mx-3 main-layout py-5">{children}</div>
        <ErrorModal error_msg={['Unauthorized!']} isOpen={isOpen} closeModal={closeModal}></ErrorModal>
      </section>
    </main>
  );
}

