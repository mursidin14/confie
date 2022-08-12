import React from 'react'
import InformationTitle from './InformationTitle';
import utils from 'utils/utils';

export default function EducationHistory({data}) {
    const educations = data
    console.log(educations)
    return (
      <article>
        <InformationTitle title={'Education History'} />
        <div className="px-3 sm:pl-8">
        {educations.map((education, index) => (
            <div key={index} className="my-8 w-fit text-left text-xs md:text-sm">
              <p className="text-base text-[#3F4254] sm:text-xl">
                {education.major}
              </p>
              <p className="my-1 text-[#3F4254]">{education.school} {education.start_date}</p>
              <p>
                {education.description}
              </p>
            </div>
          ))}
        </div>
      </article>
    );
  }

