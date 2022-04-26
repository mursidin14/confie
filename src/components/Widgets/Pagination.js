import React,{useState} from 'react'

export default function Pagination() {
    const [page, setPage] = useState(1)
  let active = `bg-[#FE9A00] px-5 py-2 rounded-md text-white`
  function handleDecrement() {
      if (page > 1) {
          setPage(page - 1)
      }
  }
  function handleIncrement() {
      if (page < 3) {
          setPage(page + 1)
      }
  }
  return (
    <div className='flex gap-7 items-center my-4'>
        <svg onClick={handleDecrement} width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clipRule="evenodd" d="M0.0969427 5.40358C-0.0575873 5.15885 -0.0286524 4.84452 0.192943 4.6273L4.6927 0.216554C4.97103 -0.0562639 5.44573 -0.0736525 5.75298 0.177716C6.06022 0.429084 6.08367 0.85402 5.80534 1.12684L1.79109 5.06167L5.76621 8.63399C6.05844 8.8966 6.05752 9.32172 5.76417 9.58351C5.47081 9.84529 4.99609 9.84462 4.70386 9.582L0.222088 5.55438C0.171148 5.5086 0.129433 5.45772 0.0969427 5.40358Z" fill="#B5B5C3"/>
</svg>

        <button onClick={()=> setPage(1)} className={`${page === 1? active : ''}`}>1</button>
        <button onClick={()=> setPage(2)} className={`${page === 2? active : ''}`}>2</button>
        <button onClick={()=> setPage(3)} className={`${page === 3? active : ''}`}>3</button>
        <svg onClick={handleIncrement} width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clipRule="evenodd" d="M5.90303 4.59653C6.05756 4.84126 6.02863 5.15559 5.80703 5.37282L1.30727 9.78356C1.02895 10.0564 0.554241 10.0738 0.246996 9.8224C-0.0602491 9.57103 -0.083694 9.1461 0.194631 8.87327L4.20889 4.93844L0.233766 1.36613C-0.0584642 1.10351 -0.0575493 0.678394 0.235806 0.416606C0.529161 0.154814 1.00388 0.155491 1.29611 0.418109L5.77789 4.44573C5.82883 4.49151 5.87054 4.54239 5.90303 4.59653Z" fill="#5E6278"/>
</svg>

    </div>
  )
}
