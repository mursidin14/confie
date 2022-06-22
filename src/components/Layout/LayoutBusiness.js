import React, { useState } from 'react';
import Header from 'components/Layout/Header';
import ASideBarBusiness from 'components/Aside/AsideBarBusiness';
import ASideBarMobileBusiness from 'components/Aside/ASideBarMobileBusiness';
export default function LayoutBusiness({PageName, children, userId}) {
  const [offCanvas, setOffCanvas] = useState(false);
  const [data, setData] = useState({
    email_verified_at: null,
    full_name: 'Annas Casmawan Ahmad',
    email: 'annas@gmail.com',
    gender: 'L',
  });
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
      <ASideBarMobileBusiness
        offCanvas={offCanvas}
        handleNav={handleNav}
        PageName={PageName}
        userId={userId}
      ></ASideBarMobileBusiness>
      <section
        className={`${
          !offCanvas ? 'w-full' : 'w-full'
        } min-h-screen bg-[#FFFFFF]`}
      >
        <Header data={data} handleNav={handleNav} PageName={PageName} />
        <div className="my-4 lg:mx-7 mx-3 py-5">{children}</div>
      </section>
    </main>
  );
}
