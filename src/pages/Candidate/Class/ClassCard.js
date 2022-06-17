import React from 'react'

export default function ClassCard({item}) {
  const categories = ['sales', 'marketing', 'finance', 'hr', 'it', 'management', 'other']
  return (
    <a
      href="/kelas/detailKelas/detail"
      className="rounded-md bg-white p-8 shadow-mine transition-all hover:scale-105 hover:bg-[#FFF6E7]/90"
    >
      <img src="/class_img.png" alt="" srcset=""/>
      <div className='mt-2 text-left'>
        <p className='text-base font-semibold'>Class Title</p>
        <p className='text-xs font-thin'>Owner Class</p>
        <p className='text-xs font-thin text-black mt-1'>Total Chapter</p>
        <div className='flex flex-wrap gap-2 mt-2'>
          {categories.map((category => (
            <span className='text-xs py-1 px-2 rounded-md bg-[#F3F3F3] border border-[#C6C6C6]'>{category}</span>
          )))}
        </div>
        <p className='text-right font-semibold mt-3'>Rp. 50.000</p>
      </div>       
    </a>
  )
}
