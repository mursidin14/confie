import React from 'react';
import ProfileService from 'services/Profile/ProfileService';

export default function NavBar({ page, offCanvas, userId }) {
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
  async function handleClick(item) {
    if (item.name !== 'Logout') {
      window.location = item.link;
    }
    const response = await ProfileService.LogoutProfile;
    console.log(response)
    window.location = '/';
  }
  return (
    <nav className="w-fit bg-[#1E1E2D]  py-2">
      <ul className={`${offCanvas ? 'flex flex-col' : 'block'}`}>
        {menu.map((item, index) => (
          <li key={index} className={`${offCanvas ? 'my-[0.60rem]' : 'my-5'}`}>
            <a
              onClick={() => handleClick(item)}
              className="flex cursor-pointer items-center gap-5"
            >
              <img
                className="w-4 sm:w-5"
                src={
                  item.alias === pageName
                    ? item.icon_active
                    : item.icon_inactive
                }
                alt=""
              />
              <p
                className={`text-xs sm:text-[13px] ${
                  offCanvas ? 'hidden' : 'block'
                } ${item.alias === pageName ? 'text-white' : 'text-white/40'}`}
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
