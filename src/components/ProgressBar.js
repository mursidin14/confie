import React from 'react';

export default function ProgressBar({ progressPercentage }) {
  let bg_color
  if (progressPercentage < 20) {
    bg_color = 'bg-orange-600'
  }else if(progressPercentage < 40) {
    bg_color = 'bg-orange-400'
  }else if(progressPercentage < 60){
    bg_color = 'bg-green-400'
  }else if(progressPercentage < 80){
    bg_color = 'bg-green-600'
  }else{
    bg_color = 'bg-green-900'
  }
  return (
    <div className="h-[10px] w-full bg-gray-300 rounded-full ">
      <div
        style={{ width: `${progressPercentage}%` }}
        className={`h-full bg-green-400 rounded-full `}
      ></div>
    </div>
  );
}