import BasicCard from 'components/Widgets/BasicCard';
import CandidateProvider from 'context/candidate-context';
import React from 'react';

export default function Notification() {
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
  ];
  return (
    <CandidateProvider PageName="Dashboard">
      <BasicCard>
        <div className=" h-full text-left space-y-4 py-2">
          {items.map((item) => {
            return (
              <div className="pb-1 px-5 border-b border-solid border-gray-300 last:border-none">
                <p className="break-normal text-sm">{item.text}</p>
                <p className="text-xs text-gray-400 mt-1">{item.time}</p>
              </div>
            );
          })}
        </div>
      </BasicCard>
    </CandidateProvider>
  );
}
