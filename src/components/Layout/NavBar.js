import React from 'react'
import AuthService from 'services/Auth/AuthService';

export default function NavBar({is_verified, page, offCanvas}) {

    let pageName = page.toLowerCase();
    
    if (pageName == 'account setting') {
      pageName = 'dashboard';
    }

    let menu = [
      {
        alias: 'dashboard',
        name: 'Dashboard',
        link: `/dashboard`,
        icon_active: '/nav_icon/dashboard.png',
        icon_inactive: '/nav_icon/i_dashboard.png',
        can_access: true
      },
      {
        alias: 'profile',
        name: 'Profile',
        link: `/profile`,
        icon_active: '/nav_icon/profile.png',
        icon_inactive: '/nav_icon/i_profile.png',
        can_access: true
      },
      {
        alias: 'personal development plan',
        name: 'Personal Development Plan',
        link: `/pdp`,
        icon_active: '/nav_icon/plan.png',
        icon_inactive: '/nav_icon/i_plan.png',
        can_access: true
      },
      {
        alias: 'lowongan kerja',
        name: 'Lowongan Kerja',
        link:  `/lowongan`,
        icon_active: '/nav_icon/job_offer.png',
        icon_inactive: '/nav_icon/i_job_offer.png',
        can_access: true
      },
      {
        alias: 'lamaran saya',
        name: 'Lamaran Saya',
        link: `/lamaran`,
        icon_active: '/nav_icon/applicant.png',
        icon_inactive: '/nav_icon/i_applicant.png',
        can_access: true
      },
      {
        alias: 'kelas online',
        name: 'Kelas Online',
        link: `/kelas`,
        icon_active: '/nav_icon/class.png',
        icon_inactive: '/nav_icon/i_class.png',
        can_access: true
      },
    ];

    async function clickLogout() {
      await AuthService.logout();
      window.location.href = '/';
    }

    return (
      <nav className="bg-[#1E1E2D] py-2  w-fit">
        <ul className={`${offCanvas ? 'flex flex-col' : 'block'}`}>
          {menu.map((item, index) => (
            <li key={index} className={`${offCanvas ? 'my-[0.60rem]' : 'my-5'}`}>
              <a href={item.can_access ? item.link : 'javascript:void(0)'} className="flex items-center gap-5 group">
                <img
                  className="sm:w-5 w-4"
                  src={
                    item.alias === pageName
                      ? item.icon_active
                      : item.icon_inactive
                  }
                  alt=""
                />
                <p
                  className={ 
                    `sm:text-[13px] text-xs ${offCanvas ? 'hidden' : 'block'} ${item.alias === pageName ? 'text-white' : 'text-white/40'} group-hover:text-white transition-all`
                  }
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
    );
  }
