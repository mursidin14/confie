import React from 'react'

export default function EducationHistory({data}) {
    let educations = data
    return (
      <article>
        <InformationTitle title={'Education History'} />
        <div className="px-3 sm:pl-8">
        {educations.map((education, index) => (
            <div key={index} className="my-8 w-fit text-left text-xs md:text-sm">
              <p className="text-base text-[#3F4254] sm:text-xl">
                {education.major}
              </p>
              <p className="my-1 text-[#3F4254]">{education.school} {utils.getMonthYear(education.start_date)}</p>
              <p>
                {education.description}
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
