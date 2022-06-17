import React from 'react'

export default function InformationTitle({ title }) {
    return (
      <div className="bg-[#7E8299] py-4">
        <p className="pl-8 text-left text-sm font-semibold text-white md:text-xl">
          {title}
        </p>
      </div>
    );
  }