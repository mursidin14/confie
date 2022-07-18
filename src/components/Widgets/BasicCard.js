import React from 'react';

export default function BasicCard({ children, sameSize }) {
  return (
    <div
      className={`rounded-md bg-white py-7 shadow-mine ${
        sameSize ? 'my-2' : 'first:my-0 my-7'
      }`}
    >
      {children}
    </div>
  );
}
