import React, { useState } from 'react';
import Header from 'components/Layout/Header';
import ASideBar from 'components/Aside/AsideBar';
import ASideBarMobile from 'components/Aside/ASideBarMobile';
export default function Layout({PageName, children, userId}) {
  const [offCanvas, setOffCanvas] = useState(false);

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

