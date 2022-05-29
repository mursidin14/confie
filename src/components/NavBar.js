import React from 'react'

export default function NavBar({page, offCanvas, userId}) {
    let pageName = page.toLowerCase();
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
        link: `/lowongan/${userId}`,
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
      {
        name: 'Logout',
        link: `/`,
        icon_active: '/nav_icon/logout.png',
        icon_inactive: '/nav_icon/i_logout.png',
      },
    ];
    return (
      <nav className="bg-[#1E1E2D] py-2  w-fit">
        <ul className={`${offCanvas ? 'flex flex-col' : 'block'}`}>
          {menu.map((item, index) => (
            <li key={index} className={`${offCanvas ? 'my-[0.60rem]' : 'my-5'}`}>
              <a href={item.link} className="flex items-center gap-5">
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
                    `sm:text-[13px] text-xs ${offCanvas ? 'hidden' : 'block'} ${item.alias === pageName ? 'text-white' : 'text-white/40'}`
                  }
                >
                  {item.name}
                </p>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }
