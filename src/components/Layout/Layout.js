import React, { useState } from 'react';
import Header from 'components/Layout/Header';
import ASideBar from 'components/Aside/AsideBar';
import ASideBarMobile from 'components/Aside/ASideBarMobile';
import 'react-loading-skeleton/dist/skeleton.css';
import { Helmet } from 'react-helmet';
import { useCandidateContext } from 'context/candidate-context';

export default function Layout({ PageName, children, slider }) {
  const { loading, profile } = useCandidateContext();
  const [offCanvas, setOffCanvas] = useState(false);
  function handleNav() {
    setOffCanvas(!offCanvas);
  }
  return (
    <>
      {loading ? null : (
        <>
          <main className="flex">
            <Helmet>
              <title>{PageName}</title>
            </Helmet>
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
              } min-h-screen bg-[#FFFFFF]`}
            >
              <Header
                data={profile}
                handleNav={handleNav}
                PageName={PageName}
              />

              <div className={`${slider ? '' : 'my-4 mx-3 py-5 lg:mx-7'}`}>
                {children}
              </div>
            </section>
          </main>
        </>
      )}
    </>
  );
}
