import React from 'react'
import AuthService from 'services/Auth/AuthService'
import { Disclosure } from '@headlessui/react'

export default function NavBar({ is_verified, page, offCanvas }) {
  let pageName = page.toLowerCase()

  if (pageName == 'account setting') {
    pageName = 'dashboard'
  }

  const menu = [
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
    }
  ]
  const menu2 = [
    {
      alias: 'lowongan kerja',
      name: 'Lowongan Kerja',
      link: `/lowongan`,
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
    }
  ]

  async function clickLogout() {
    await AuthService.logout()
    window.location.href = '/'
  }

  return (
    <nav className="w-fit bg-[#1E1E2D]  py-2">
      <ul className={`${offCanvas ? 'flex flex-col' : 'block'}`}>
        {menu.map((item, index) => (
          <li key={index} className={`${offCanvas ? 'my-[0.60rem]' : 'my-5'}`}>
            <a
              href={item.can_access ? item.link : 'javascript:void(0)'}
              className="group flex items-center gap-5"
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
                } ${
                  item.alias === pageName ? 'text-white' : 'text-white/40'
                } transition-all group-hover:text-white`}
              >
                {item.name}
              </p>
            </a>
          </li>
        ))}
        <BasicDisclosureNav
          offCanvas={offCanvas}
          subNav={[
            {
              name: 'Peta Karir',
              link: '/peta-karir'
            },
            {
              name: 'Eksplorasi Profesi',
              link: '/eksplorasi-profesi'
            }
          ]}
          icon_inactive={'/nav_icon/i_carrer.png'}
          title={'Panduan Karir'}
        />
        {menu2.map((item, index) => (
          <li key={index} className={`${offCanvas ? 'my-[0.60rem]' : 'my-5'}`}>
            <a
              href={item.can_access ? item.link : 'javascript:void(0)'}
              className="group flex items-center gap-5"
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
                } ${
                  item.alias === pageName ? 'text-white' : 'text-white/40'
                } transition-all group-hover:text-white`}
              >
                {item.name}
              </p>
            </a>
          </li>
        ))}
        <BasicDisclosureNav
          offCanvas={offCanvas}
          subNav={[
            {
              name: 'FAQ',
              link: '/faq'
            },
            {
              name: 'Billing',
              link: '/billing'
            }
          ]}
          icon_inactive={'/nav_icon/i_help.png'}
          title={'Help'}
        />
        <li className={`${offCanvas ? 'my-[0.60rem]' : 'my-5'}`}>
          <button
            onClick={clickLogout}
            className="group flex items-center gap-5"
          >
            <img className="w-4 sm:w-5" src="/nav_icon/i_logout.png" alt="" />
            <p
              className={`text-xs sm:text-[13px] ${
                offCanvas ? 'hidden' : 'block'
              } text-white/40 transition-all group-hover:text-white`}
            >
              Logout
            </p>
          </button>
        </li>
      </ul>
    </nav>
  )
}

function BasicDisclosureNav({ subNav, title, icon_inactive, offCanvas }) {
  return (
    <Disclosure>
      {({ open }) => (
        <>
          <Disclosure.Button className="group flex items-center gap-5">
            <img className="w-4 sm:w-5" src={icon_inactive} alt="" />
            <p
              className={`text-xs sm:text-[13px] ${
                offCanvas ? 'hidden' : 'block'
              } text-white/40 transition-all group-hover:text-white`}
            >
              {title}
            </p>
          </Disclosure.Button>
          <Disclosure.Panel className="pl-10 pt-1 text-sm text-gray-500">
            <ul className="requirments text-left">
              {subNav.map((item, index) => (
                <li className="my-2" key={index}>
                  <a href={`/under`} className="relative left-5 text-[#7E8299]">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
