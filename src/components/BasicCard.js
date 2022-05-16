import React from 'react'

export default function BasicCard({children}) {
  return (
    <div className=" rounded-md bg-white pt-7 pb-2 shadow-mine my-5">
        
        {children}
    </div>
  )
}
