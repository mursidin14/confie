import React, { useState } from 'react';

export default function Slider() {
  const [indexTips, setIndexTips] = useState(0);
  const tips = ['tips 1', 'tips 2'];

  React.useEffect(() => {
    const timer = setInterval(() => {
      setIndexTips(indexTips + 1);
      if (indexTips === tips.length - 1) {
        setIndexTips(0);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [indexTips]);

  return (
    <div className="lg:fixed sm:mt-20 mt-10  bottom-0 w-full py-3 bg-gray-600  text-white ">
      <div className='flex w-full items-center justify-center flex-col lg:pr-44'>
        <p className="font-semibold">Tau Gak Sih?</p>
        {tips.map((tip, index) => {
          return (
            <p
              key={index}
              className={`${index === indexTips ? '' : 'hidden'} mt-1 text-xs`}
            >
              {tip}
            </p>
          );
        })}
      </div>
    </div>
  );
}
