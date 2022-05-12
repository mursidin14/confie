import { Fragment } from 'react';
import { useState } from 'react';

export default function SalaryFilter() {
    const [open, setOpen] = useState(true)
    function handleClick() {
        setOpen(!open)
    }
  return (
    <div className='w-full'>
      <button onClick={handleClick}  className="flex w-full h-[100%] items-center justify-between rounded-md bg-[#F5F8FA] sm:px-5 p-3 text-center text-[#9CA3AF] transition-all placeholder:italic hover:bg-[#edf0f3]">
        <span>Range Gaji</span>
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6 9L12 15L18 9"
            stroke="#9CA3AF"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div className={`bg-white w-[300px] absolute md:right-auto right-8 border-[0.5px] border-[#b1b1b1] py-4 px-6 rounded-md ${open ? 'translate-y-0  opacity-0' : ' translate-y-1 opacity-100'} transition-all`}>
          <div className='bg-[#F5F8FA] py-2 border-2 border-[#F5F8FA] focus-within:border-black rounded-md'>
              <span className='px-2'>IDR</span>
              <input className='bg-[#F5F8FA] focus:outline-none' type="number" placeholder='Minimun Salary...'/>
          </div>
          <div className='bg-[#F5F8FA] py-2 border-2 border-[#F5F8FA] focus-within:border-black rounded-md mt-3'>
          <span className='px-2'>IDR</span>
          <input className='bg-[#F5F8FA] focus:outline-none' type="number" placeholder='Max Salary...'/>

          </div>
          <div className='mt-7 w-full mx-auto'>
                <button className='bg-[#FE9A00] px-5 py-2  rounded-md text-white text-sm'>Tambah Filter</button>
          </div>
      </div>

    </div>
  );
}
