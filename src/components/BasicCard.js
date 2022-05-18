import React from 'react'

export default function BasicCard({children}) {
  return (
    <div className=" rounded-md bg-white py-7 shadow-mine my-7">
        {children}
    </div>
  )
}
