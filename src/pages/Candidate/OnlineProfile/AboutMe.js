import React from 'react';
import InformationTitle from './InformationTitle';
export default function AboutMe({ data }) {
  return (
    <article className="mt-10">
      <InformationTitle title={'About Me'} />
      <p className="my-6 w-fit px-3 text-left text-xs sm:pl-8 md:w-[500px] md:text-sm">
        {data}
      </p>
    </article>
  );
}

