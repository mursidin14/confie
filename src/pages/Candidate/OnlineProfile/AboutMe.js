import React from 'react';

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
function InformationTitle({ title }) {
    return (
      <div className="bg-[#7E8299] py-4">
        <p className="pl-8 text-left text-sm font-semibold text-white md:text-xl">
          {title}
        </p>
      </div>
    );
  }
