import React, { useEffect, useState } from 'react';
import Header from 'components/Layout/Header';
import ASideBar from 'components/Aside/AsideBar';
import ASideBarMobile from 'components/Aside/ASideBarMobile';
import ProfileService from 'services/Profile/ProfileService';

export default function Layout({PageName, children, userId}) {
  const [offCanvas, setOffCanvas] = useState(false);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});
  useEffect(() => {
    async function fetchData() {
      const response_profile = await ProfileService.getProfileData();
      if(response_profile.data.meta.status == 'error'){
        window.location.href = '/';
      }
      setData(response_profile);
      setLoading(false);
    }
    fetchData();
    console.log(data, 'layout')
  }, []);
  
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
        <Header handleNav={handleNav} PageName={PageName} />
        <div className="my-4 lg:mx-7 mx-3 main-layout py-5">{children}</div>
      </section>
    </main>
  );
}

