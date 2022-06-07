import React from 'react'
import Header from 'components/Layout/Header'
export default function NotFound() {
  return (
    <>
        <div className='flex justify-center items-center min-h-[calc(100vh-11vh)]'>
          <div>
          <p className='text-9xl mb-5 font-bold'>4😓4</p>
          <p>Halaman ga ada, bang!</p>
          <a className='text-xs underline font-bold' href="/dashboard/1">Back to Home</a>
          </div>
        </div>
    </>
  )
}
