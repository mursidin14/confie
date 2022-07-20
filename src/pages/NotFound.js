import React from 'react';
import { useParams } from 'react-router-dom';

export default function NotFound() {
  const { id } = useParams();
  return (
    <>
      <div className="flex min-h-[calc(100vh-11vh)] items-center justify-center">
        <div>
          <p className="mb-5 text-9xl font-bold">4😓4</p>
          <p className="px-8 text-xs sm:px-0 sm:text-base">
            Sorry... the page u looking for doesn't exist
          </p>
          <button
            className="text-xs font-bold underline"
            onClick={() => {
             window.history.back(); 
            }}
          > 
            Go Back
          </button>
        </div>
      </div>
    </>
  );
}
