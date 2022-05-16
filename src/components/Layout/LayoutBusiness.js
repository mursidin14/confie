import React, { useState } from 'react';
import Header from 'components/Layout/Header';
import ASideBarBusiness from 'components/Aside/AsideBarBusiness';
import ASideBarMobile from 'components/Aside/ASideBarMobile';
export default function LayoutBusiness({PageName, children, userId}) {
  const [offCanvas, setOffCanvas] = useState(false);

  function handleNav() {
    
    setOffCanvas(!offCanvas);
  }
  return (
    <main className="flex">
      <ASideBarBusiness
        offCanvas={offCanvas}
        handleNav={handleNav}
        PageName={PageName}
        userId={userId}
      ></ASideBarBusiness>
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

