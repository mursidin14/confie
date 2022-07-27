import React from 'react'
import AuthService from 'services/Auth/AuthService'
import { Disclosure } from '@headlessui/react'

export default function NavBar({ page, offCanvas }) {
  let pageName = page.toLowerCase()

  if (pageName === 'account setting') {
    pageName = 'dashboard'
  }

  const menu = [
    {
      alias: 'dashboard',
      name: 'Dashboard',
      link: `/dashboard`,
      icon_active: '/nav_icon/dashboard.png',
      icon_inactive: '/nav_icon/i_dashboard.png',
    },
    {
      alias: 'profile',
      name: 'Profile',
      link: `/profile`,
      icon_active: '/nav_icon/profile.png',
      icon_inactive: '/nav_icon/i_profile.png',
    },
    {
      alias: 'personal development plan',
      name: 'Personal Development Plan',
      link: `/pdp`,
      icon_active: '/nav_icon/plan.png',
      icon_inactive: '/nav_icon/i_plan.png',
    }
  ]
  const menu2 = [
    {
      alias: 'lowongan kerja',
      name: 'Lowongan Kerja',
      link: `/lowongan`,
      icon_active: '/nav_icon/job_offer.png',
      icon_inactive: '/nav_icon/i_job_offer.png',
    },
    {
      alias: 'lamaran saya',
      name: 'Lamaran Saya',
      link: `/lamaran`,
      icon_active: '/nav_icon/applicant.png',
      icon_inactive: '/nav_icon/i_applicant.png',
    },
    {
      alias: 'kelas online',
      name: 'Kelas Online',
      link: `/kelas`,
      icon_active: '/nav_icon/class.png',
      icon_inactive: '/nav_icon/i_class.png',
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
              href={`${item.link}`}
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
              link: '/guide/map'
            },
            {
              name: 'Eksplorasi Profesi',
              link: '/guide/exploration'
            }
          ]}
          is_active={pageName === 'panduan karir'}
          icon_active={'/nav_icon/carrer.png'}
          icon_inactive={'/nav_icon/i_carrer.png'}
          title={'Panduan Karir'}
        />
        {menu2.map((item, index) => (
          <li key={index} className={`${offCanvas ? 'my-[0.60rem]' : 'my-5'}`}>
            <a
              href={`${item.link}`}
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
          is_active={pageName === 'help'}
          icon_active={'/nav_icon/help.png'}
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

function BasicDisclosureNav({is_active, subNav, title, icon_inactive, icon_active, offCanvas }) {
  return (
    <Disclosure defaultOpen={is_active}>
      {({ open }) => (
        <>
          <Disclosure.Button className="group flex items-center gap-5">
            <img className="w-4 sm:w-5" src={is_active ? icon_active : icon_inactive} alt="" />
            <p
              className={`text-xs sm:text-[13px] ${
                offCanvas ? 'hidden' : 'block'
              } ${is_active ? 'text-white' : 'text-white/40'} transition-all group-hover:text-white`}
            >
              {title}
            </p>
          </Disclosure.Button>
          <Disclosure.Panel className="pl-10 pt-1 text-sm text-gray-500">
            <ul className="requirments text-left">
              {subNav.map((item, index) => (
                <li className="my-2" key={index}>
                  <a href={`${item.link}`} className={"relative left-5 text-[#7E8299] text-xs sm:text-[13px]"}>
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
