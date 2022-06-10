import React from 'react';

export default function NavBarBusiness({ page, offCanvas, userId }) {
  let pageName = page.toLowerCase();
  let menu = [
    {
      alias: 'dashboard',
      name: 'Dashboard',
      link: `/business/${userId}`,
      icon_active: '/nav_icon/dashboard.png',
      icon_inactive: '/nav_icon/i_dashboard.png',
    },
    {
      alias: 'profile perusahaan',
      name: 'Profile Perusahaan',
      link: `/business/profile/${userId}`,
      icon_active: '/nav_icon/profile.png',
      icon_inactive: '/nav_icon/i_profile.png',
    },
    {
      alias: 'team member',
      name: 'Team Member',
      link: `/business/team/${userId}`,
      icon_active: '/nav_icon/plan.png',
      icon_inactive: '/nav_icon/i_plan.png',
    },
    {
      alias: 'lowongan kerja',
      name: 'Lowongan Kerja',
      link: `/business/job/${userId}`,
      icon_active: '/nav_icon/job_offer.png',
      icon_inactive: '/nav_icon/i_job_offer.png',
    },
    {
      alias: 'kelas bisnis',
      name: 'Kelas Bisinis',
      link: `/notcreateyet/${userId}`,
      icon_active: '/nav_icon/applicant.png',
      icon_inactive: '/nav_icon/i_applicant.png',
    },
    {
      alias: 'talent pool',
      name: 'Talent Pool',
      link: `/business/talent/${userId}`,
      icon_active: '/nav_icon/class.png',
      icon_inactive: '/nav_icon/i_class.png',
    },
  ];
  return (
    <nav className="w-fit bg-[#1E1E2D]  py-2">
      <ul className={`${offCanvas ? 'flex flex-col' : 'block'}`}>
        {menu.map((item, index) => (
          <li key={index} className={`${offCanvas ? 'my-[0.60rem]' : 'my-5'}`}>
            <a href={item.link} className="flex items-center gap-5">
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
