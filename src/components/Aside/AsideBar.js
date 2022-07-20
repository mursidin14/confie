import React from 'react'
import NavBar from 'components/Layout/NavBar';

export default function ASideBar({offCanvas, handleNav, PageName }) {
    return (
      <aside
        className={`bg-[#1E1E2D] transition-all hidden lg:block  ${
          offCanvas ? 'flex flex-col items-center min-h-screen w-24 ' : 'min-h-screen w-[340px]'
        }`}
      >
        <div className={offCanvas ? 'w-20 fixed' : 'w-[250px] fixed'}>
        <div className="pt-5 flex items-center justify-between pl-6">
          <img
            className={offCanvas ? 'w-5' : 'w-24'}
            src={offCanvas ? '/logo-sm.png' : '/logo.png'}
            alt=""
          />
          <button
            className=" items-center justify-end"
            onClick={handleNav}
          >
            <svg
              className={`${offCanvas ? 'rotate-180' : ''}`}
              width="23"
              height="23"
              viewBox="0 0 23 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.5"
                d="M13.6713 10.9578L17.6813 6.94786C18.0782 6.55091 18.0782 5.90731 17.6813 5.51036C17.2843 5.11341 16.6407 5.11341 16.2438 5.51036L10.9318 10.8223C10.5576 11.1965 10.5576 11.8034 10.9318 12.1776L16.2438 17.4895C16.6407 17.8865 17.2843 17.8865 17.6813 17.4895C18.0782 17.0926 18.0782 16.449 17.6813 16.052L13.6713 12.0421C13.3719 11.7427 13.3719 11.2572 13.6713 10.9578Z"
                fill="#A1A5B7"
                fillOpacity="0.5"
              />
              <path
                d="M7.92129 10.9578L11.9312 6.94786C12.3282 6.55091 12.3282 5.90731 11.9312 5.51036C11.5343 5.11341 10.8907 5.11341 10.4937 5.51036L5.18182 10.8223C4.80756 11.1965 4.80756 11.8034 5.18182 12.1776L10.4937 17.4895C10.8907 17.8865 11.5343 17.8865 11.9312 17.4895C12.3282 17.0926 12.3282 16.449 11.9312 16.052L7.92129 12.0421C7.62189 11.7427 7.62189 11.2572 7.92129 10.9578Z"
                fill="#A1A5B7"
              />
            </svg>
          </button>
        </div>
        <div className='pl-6'>
          <NavBar page={PageName} offCanvas={offCanvas}/>
        </div>
        </div>
       
      </aside>
    );
  }
