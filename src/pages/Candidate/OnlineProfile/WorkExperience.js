import React from 'react'
import InformationTitle from './InformationTitle';

export default function WorkExperience({ data }) {
    let works = data;
    return (
      <article>
        <InformationTitle title={'Work Experience'} />
        <div className="px-3 sm:pl-8">
          {works.map((work, index) => (
            <div key={index} className="my-8 w-fit text-left text-xs md:text-sm">
              <p className="text-base text-[#3F4254] sm:text-xl">
                {work.position}
              </p>
              <p className="my-1 text-[#3F4254]">{work.agency} {utils.getMonthYear(work.start_date)}</p>
              <p>
                {work.description}
              </p>
            </div>
          ))}
        </div>
      </article>
    );
  }
