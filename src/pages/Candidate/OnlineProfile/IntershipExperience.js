import React from 'react'

export default function IntershipExperience({data}) {
    let interns = data
    return (
      <article>
        <InformationTitle title={'Intern Experience'} />
        <div className="px-3 sm:pl-8">
        {interns.map((intern, index) => (
            <div key={index} className="my-8 w-fit text-left text-xs md:text-sm">
              <p className="text-base text-[#3F4254] sm:text-xl">
                {intern.position}
              </p>
              <p className="my-1 text-[#3F4254]">{intern.agency} {utils.getMonthYear(intern.start_date)}</p>
              <p>
                {intern.description}
              </p>
            </div>
          ))}
        </div>
      </article>
    );
  }

  function InformationTitle({ title }) {
    return (
      <div className="bg-[#7E8299] py-4">
        <p className="pl-8 text-left text-sm font-semibold text-white md:text-xl">
          {title}
        </p>
      </div>
    );
  }
