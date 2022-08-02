import React from 'react';

export default function Notification({isBusiness}) {
  const [open, setOpen] = React.useState(false);
  const handleClick = () => {
    setOpen(!open);
  };
  const items = [
    {
      id: 1,
      text: 'Lorem ipsum dolor sit amet consectetur adipiscing elit.',
      time: '1 hour ago',
    },
    {
      id: 2,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      time: '1 hour ago',
    },
    {
      id: 3,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      time: '1 hour ago',
    },
    {
      id: 4,
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      time: '1 hour ago',
    },
  ]
  return (
    <>
      <button className={`${open ? 'bg-[#FFE6BF]' : ''}  p-2 rounded-md transition-all`} onClick={handleClick}>
        <svg
          width="23"
          height="23"
          viewBox="0 0 23 23"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M10.8223 2.59429C11.1966 2.22003 11.8034 2.22003 12.1776 2.59429L14.6557 5.07233C15.0299 5.44659 15.0299 6.05337 14.6557 6.42763L12.1776 8.90566C11.8034 9.27992 11.1966 9.27992 10.8223 8.90566L8.34429 6.42763C7.97003 6.05337 7.97003 5.44659 8.34429 5.07233L10.8223 2.59429Z"
            fill="#A1A5B7"
          />
          <path
            d="M10.8223 14.0943C11.1966 13.72 11.8034 13.72 12.1776 14.0943L14.6557 16.5723C15.0299 16.9466 15.0299 17.5534 14.6557 17.9276L12.1776 20.4057C11.8034 20.7799 11.1966 20.7799 10.8223 20.4057L8.34429 17.9276C7.97003 17.5534 7.97003 16.9466 8.34429 16.5723L10.8223 14.0943Z"
            fill="#A1A5B7"
          />
          <path
            opacity="0.3"
            d="M5.07233 8.34429C5.44659 7.97003 6.05337 7.97003 6.42763 8.34429L8.90566 10.8223C9.27992 11.1966 9.27992 11.8034 8.90566 12.1776L6.42763 14.6557C6.05337 15.0299 5.44659 15.0299 5.07233 14.6557L2.59429 12.1776C2.22003 11.8034 2.22003 11.1966 2.59429 10.8223L5.07233 8.34429Z"
            fill="#A1A5B7"
          />
          <path
            opacity="0.3"
            d="M16.5723 8.34429C16.9466 7.97003 17.5534 7.97003 17.9276 8.34429L20.4057 10.8223C20.7799 11.1966 20.7799 11.8034 20.4057 12.1776L17.9276 14.6557C17.5534 15.0299 16.9466 15.0299 16.5723 14.6557L14.0943 12.1776C13.72 11.8034 13.72 11.1966 14.0943 10.8223L16.5723 8.34429Z"
            fill="#A1A5B7"
          />
        </svg>
      </button>
      <section
        className={`absolute sm:right-36 right-10 top-14 z-10 rounded-md bg-white text-left shadow-mine ${
          !open
            ? 'hidden  translate-y-0 opacity-0'
            : ' block translate-y-1 opacity-100'
        } max-w-xs transition-all sm:w-[300px]`}
      >
        <div className="text-left">
          <div className='bg-[#324AAF] px-5 py-3 rounded-t-md '>
            <p className='text-white font-medium tracking-widest'>Notification</p>
          </div>
          <div className='px-5 py-2'>
            {items.map((item, i) => {
              return (
                <div key={i} className='pb-1'>
                  <p className='text-xs break-normal'>{item.text}</p>
                  <p className='text-[10px] text-gray-400 '>{item.time}</p>
                </div>
              );
            })}
          </div>
          <a className='px-5 py-2 border-t w-full inline-block text-center text-gray-400 hover:text-black text-sm' href={isBusiness ? 'notifications-business' : "/notifications"}>View All</a>
        </div>
      </section>
    </>
  );
}
