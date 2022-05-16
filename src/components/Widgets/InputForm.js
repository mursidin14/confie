import React from 'react'

export default function InputForm({ label, required,...inputProps }) {
    return (
      <div className=" items-center lg:flex">
        <div className="w-5/12">
          <label className={`text-xs lg:text-base after:content-['*'] ${required ? 'after:text-pink-500' : 'after:text-white'}`}>{label}</label>
        </div>
        <div className="lg:w-7/12">
          <input {...inputProps} className="input-form my-2 lg:my-5 lg:py-3 " />
        </div>
      </div>
    );
  }