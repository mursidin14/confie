import { useState } from 'react'
import { Tab } from '@headlessui/react'
import JobFeed from 'pages/Candidate/Job/JobFeed'
function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function BasicTab({data}) {
  let [categories] = useState({
    "Tentang Perusahaan": {
      content: <AboutCompany data={data} />, 
    },
    "Info Lowongan":  {
      content: <JobFeed items={[]}/>, 
    }
  })

  return (
    <div className="w-full px-2 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 max-w-lg ">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 font-semibold leading-5 outline-none', 
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

function AboutCompany({data}) {
  return(
    <p className='text-left px-2 py-6'>
     {data.about}</p>
  )
}


