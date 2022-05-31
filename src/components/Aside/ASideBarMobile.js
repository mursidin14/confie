import React from 'react'
import AuthService from 'services/Auth/AuthService';

export default function ASideBarMobile({ offCanvas, handleNav, PageName , userId }) {
    let menu = [
      {
        alias: 'dashboard',
        name: 'Dashboard',
        link: `/dashboard/${userId}`,
        icon_active: '/nav_icon/dashboard.png',
        icon_inactive: '/nav_icon/i_dashboard.png',
      },
      {
        alias: 'profile',
        name: 'Profile',
        link: `/profile/${userId}`,
        icon_active: '/nav_icon/profile.png',
        icon_inactive: '/nav_icon/i_profile.png',
      },
      {
        alias: 'personal development plan',
        name: 'Personal Development Plan',
        link: `/pdp/${userId}`,
        icon_active: '/nav_icon/plan.png',
        icon_inactive: '/nav_icon/i_plan.png',
      },
      {
        alias: 'lowongan kerja',
        name: 'Lowongan Kerja',
        link:  `/lowongan/${userId}`,
        icon_active: '/nav_icon/job_offer.png',
        icon_inactive: '/nav_icon/i_job_offer.png',
      },
      {
        alias: 'lamaran saya',
        name: 'Lamaran Saya',
        link: `/lamaran/${userId}`,
        icon_active: '/nav_icon/applicant.png',
        icon_inactive: '/nav_icon/i_applicant.png',
      },
      {
        alias: 'kelas online',
        name: 'Kelas Online',
        link: `/kelas/${userId}`,
        icon_active: '/nav_icon/class.png',
        icon_inactive: '/nav_icon/i_class.png',
      },
      
    ];
    let page = PageName.toLowerCase();
    async function clickLogout() {
      await AuthService.logout();
      window.location.href = '/';
    }
    return (
      <aside
        className={` fixed block min-h-screen w-8/12 bg-[#1E1E2D] transition-all md:w-4/12 lg:hidden z-10 ${
          !offCanvas ? '-left-full' : 'left-0'
        }`}
      >
        <button
          onClick={handleNav}
          className="absolute top-9 right-4 font-bold text-white"
        >
          <svg
          className='w-4 h-4'
            width="6"
            height="6"
            viewBox="0 0 6 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.46998 3L4.90331 1.57C4.96608 1.50723 5.00134 1.4221 5.00134 1.33333C5.00134 1.24457 4.96608 1.15943 4.90331 1.09667C4.84054 1.0339 4.75541 0.998636 4.66665 0.998636C4.57788 0.998636 4.49275 1.0339 4.42998 1.09667L2.99998 2.53L1.56998 1.09667C1.50721 1.0339 1.42208 0.998636 1.33331 0.998636C1.24455 0.998636 1.15941 1.0339 1.09665 1.09667C1.03388 1.15943 0.998616 1.24457 0.998616 1.33333C0.998616 1.4221 1.03388 1.50723 1.09665 1.57L2.52998 3L1.09665 4.43C1.0654 4.46099 1.04061 4.49786 1.02368 4.53847C1.00676 4.57909 0.998047 4.62266 0.998047 4.66667C0.998047 4.71067 1.00676 4.75424 1.02368 4.79486C1.04061 4.83548 1.0654 4.87235 1.09665 4.90333C1.12763 4.93458 1.1645 4.95937 1.20512 4.9763C1.24574 4.99322 1.28931 5.00193 1.33331 5.00193C1.37732 5.00193 1.42089 4.99322 1.46151 4.9763C1.50213 4.95937 1.53899 4.93458 1.56998 4.90333L2.99998 3.47L4.42998 4.90333C4.46097 4.93458 4.49783 4.95937 4.53845 4.9763C4.57907 4.99322 4.62264 5.00193 4.66665 5.00193C4.71065 5.00193 4.75422 4.99322 4.79484 4.9763C4.83546 4.95937 4.87233 4.93458 4.90331 4.90333C4.93456 4.87235 4.95935 4.83548 4.97628 4.79486C4.9932 4.75424 5.00191 4.71067 5.00191 4.66667C5.00191 4.62266 4.9932 4.57909 4.97628 4.53847C4.95935 4.49786 4.93456 4.46099 4.90331 4.43L3.46998 3Z"
              fill="white"
            />
          </svg>
        </button>
        <nav className=" min-h-screen w-full py-6 px-3">
          <ul className={`${!offCanvas ? 'flex flex-col' : 'block'}`}>
            {menu.map((item, index) => (
              <li key={index} className={`${!offCanvas ? 'my-3' : 'my-4'}`}>
                <a href={item.link} className="flex items-center gap-5">
                  <img
                    className="w-4"
                    src={
                      item.alias === page ? item.icon_active : item.icon_inactive
                    }
                    alt=""
                  />
                  <p
                    className={`text-xs ${!offCanvas ? 'hidden' : 'block'} ${
                      item.alias === page ? 'text-white' : 'text-white/40'
                    }`}
                  >
                    {item.name}
                  </p>
                </a>
              </li>
            ))}
            <li className={`${offCanvas ? 'my-[0.60rem]' : 'my-5'}`}>
              <button onClick={clickLogout}  className="flex items-center gap-5 group">
                <img
                  className="sm:w-5 w-4"
                  src="/nav_icon/i_logout.png"
                  alt=""
                />
                <p
                  className={ 
                    `sm:text-[13px] text-xs ${offCanvas ? 'hidden' : 'block'} text-white/40 group-hover:text-white transition-all`
                  }
                >
                  Logout
                </p>
              </button>
            </li>
          </ul>
        </nav>
      </aside>
    );
  }
  
