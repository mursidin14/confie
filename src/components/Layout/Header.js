import Notification from 'components/Widgets/Notification';
import React, { useState } from 'react';
import AuthService from 'services/Auth/AuthService';
import { makeCapital } from 'utils/utils';

export default function Header({data, handleNav, PageName }) {
  const [open, setOpen] = useState(false);
  function clickProfile() {
    setOpen(!open);
  }

  React.useEffect(() => {
  
    const closeProfile = e => {
      console.log(e.path[0].tagName)
      if (e.path[0].tagName !== 'IMG' && e.path[0].tagName !== 'SECTION' && e.path[0].tagName !== 'P' ){
        setOpen(false);
      }
    }; 

    document.body.addEventListener('click', closeProfile);
    return () => document.body.removeEventListener('click', closeProfile);
  
  }, []);

  async function clickLogout() {
    const response = await AuthService.logout();
    if (response.status === 401) {
      localStorage.removeItem('metadata');
      localStorage.removeItem('user');
      localStorage.removeItem('userComplete');
      window.location.href = '/';
    }
  }
  return (
    <header className="flex items-center justify-between bg-white px-9 shadow-md ">
      <button onClick={handleNav} className="block lg:hidden">
        <svg
          className="block"
          width="19"
          height="13"
          viewBox="0 0 19 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.875 12.75H0.125V10.6667H18.875V12.75ZM18.875 7.54167H0.125V5.45833H18.875V7.54167ZM18.875 2.33333H0.125V0.25H18.875V2.33333Z"
            fill="#A1A5B7"
          />
        </svg>
      </button>
      <h4 className="hidden text-[18px] font-semibold lg:block">{PageName}</h4>
      <img className="block w-24 lg:hidden" src="/logo.png" alt="logo_config" />
      <div className="flex items-center gap-6 py-3">
        <Notification isBusiness={data?.roles[0]?.name === 'business'}/>
        {/* <svg
          width="23"
          height="32"
          viewBox="0 0 23 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M19.1666 11.875H3.83329C2.77475 11.875 1.91663 12.7331 1.91663 13.7917V24.3333C1.91663 25.3919 2.77475 26.25 3.83329 26.25H4.31246C4.84173 26.25 5.27079 26.679 5.27079 27.2083V29.6091C5.27079 30.2214 5.95324 30.5867 6.46273 30.247L11.0098 27.2157C11.9543 26.586 13.0641 26.25 14.1993 26.25H19.1666C20.2252 26.25 21.0833 25.3919 21.0833 24.3333V13.7917C21.0833 12.7331 20.2252 11.875 19.1666 11.875Z"
            fill="#A1A5B7"
          />
          <path
            d="M11.5 20.5H6.70833C6.17906 20.5 5.75 20.9291 5.75 21.4583C5.75 21.9876 6.17906 22.4167 6.70833 22.4167H11.5C12.0293 22.4167 12.4583 21.9876 12.4583 21.4583C12.4583 20.9291 12.0293 20.5 11.5 20.5Z"
            fill="#A1A5B7"
          />
          <path
            d="M16.2917 15.7084H6.70833C6.17906 15.7084 5.75 16.1374 5.75 16.6667C5.75 17.196 6.17906 17.625 6.70833 17.625H16.2917C16.8209 17.625 17.25 17.196 17.25 16.6667C17.25 16.1374 16.8209 15.7084 16.2917 15.7084Z"
            fill="#A1A5B7"
          />
          <rect x="9" width="6" height="6" rx="3" fill="#50CD89" />
        </svg> */}
        <div className="">
          <img
            onClick={clickProfile}
            className="w-10 h-10 object-cover cursor-pointer rounded-md"
            src={data?.roles[0]?.name === 'business' ? data.url_photo_profile ? `${process.env.REACT_APP_API_URL}/${data.url_photo_profile}` : '/company_default.png' : data.url_photo_profile ? `${process.env.REACT_APP_API_URL}/${data.url_photo_profile}` : data.gender === "L" ? "/male.jpg" : "/female.jpg"}
            alt="photo_profile"
          />
          <section
            className={`absolute right-9 rounded-md bg-white px-5 py-2 shadow-mine top-14 z-10 text-left ${
              !open ? 'translate-y-0  opacity-0 hidden' : ' translate-y-1 opacity-100 block'
            } transition-all max-w-xs`}
          >
            <div className='text-left'>
            <p className='font-semibold sm:text-base text-sm'>{makeCapital(data.full_name)}</p>
            <p className='text-xs text-[#7E8299]'>{data.email}</p>
            <hr className='my-2'/>
            <a href={data?.roles[0]?.name === 'business' ? '/setting-business' : '/setting'} className='text-black hover:underline sm:text-sm text-xs'>Account Setting</a>
            <hr className='my-2'/>
            </div>
            <button onClick={clickLogout} className='hover:text-red-500 text-black transition-all sm:text-sm text-xs'>Logout</button>
          </section>
        </div>
      </div>
    </header>
  );
}
