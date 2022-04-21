import React, { useState } from 'react';
import Header from 'components/Layout/Header';
import ASideBar from 'components/Aside/AsideBar';
import ASideBarMobile from 'components/Aside/ASideBarMobile';
export default function Layout({PageName, children}) {
  const [offCanvas, setOffCanvas] = useState(false);

  function handleNav() {
    setOffCanvas(!offCanvas);
  }
  return (
    <main className="flex ">
      <ASideBar
        offCanvas={offCanvas}
        handleNav={handleNav}
        PageName={PageName}
      ></ASideBar>
      <ASideBarMobile
        offCanvas={offCanvas}
        handleNav={handleNav}
        PageName={PageName}
      ></ASideBarMobile>
      <section
        className={`${
          !offCanvas ? 'w-full' : 'w-full'
        } min-h-full bg-[#E5E5E5]`}
      >
        <Header handleNav={handleNav} PageName={PageName} />
        <div className="my-4 lg:mx-10 mx-3 main-layout">{children}</div>
      </section>
    </main>
  );
}

