import { useState } from 'react'
import { Tab } from '@headlessui/react'
import JobFeed from 'components/JobFeed'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function BasicTab() {
  let [categories] = useState({
    ["Tentang Perusahaan"]: {
      content: <AboutCompany />, 
    },
    ["Info Lowongan"]:  {
      content: <JobFeed />, 
    }
  })

  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 max-w-lg">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 font-semibold leading-5', 
                  selected
                    ? 'border-b-4 border-[#FE9A00]'
                    : 'border-b-4 border-white text-[#7E8299]'
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="mt-2 w-full">
          {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
              
              )}
            > 
            <div >
              {posts.content}
            </div>
             
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}

function AboutCompany() {
  return(
    <p className='text-left px-2 py-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
  )
}


