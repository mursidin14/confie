import React from 'react'
import { useParams } from 'react-router-dom';

export default function NotFound() {
  const { id } = useParams();
  return (
    <>
        <div className='flex justify-center items-center min-h-[calc(100vh-11vh)]'>
          <div>
          <p className='text-9xl mb-5 font-bold'>4😓4</p>
          <p className='text-xs sm:text-base px-8 sm:px-0'>Either you haven't verify ur email or ur page u looking for doesn't exist </p>
          <a className='text-xs underline font-bold' href={`/dashboard/`}>Back to Home</a>
          </div>
        </div>
    </>
  )
}
