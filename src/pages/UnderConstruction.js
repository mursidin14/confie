import React from 'react';

export default function UnderConstruction() {
  return (
    <div className="relative bottom-10 flex min-h-screen w-full flex-col items-center justify-center space-y-1 px-4">
      <img src="/under.gif" alt="" />
      <p className="mt-2 text-2xl font-semibold sm:text-4xl">
        SORRY!! THIS PAGE IS UNDER CONSTRUCTION
      </p>
      <p className="text-sm text-[#000000] sm:text-base">
        We are currently working on this page. Thanks!
      </p>
      <a href="/dashboard" className="mt-2 text-xs font-bold underline">
        Back To Home
      </a>
    </div>
  );
}
