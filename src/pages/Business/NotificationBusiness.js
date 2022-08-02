import LayoutBusiness from 'components/Layout/LayoutBusiness';
import BasicCard from 'components/Widgets/BasicCard';
import { BusinessProvider } from 'context/business-context';
import React from 'react';

export default function NotificationBusiness() {
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
    <BusinessProvider>
      <LayoutBusiness PageName={'Dashboard'}>
        <BasicCard>
          <div className=" h-full space-y-4 py-2 text-left">
            {items.map((item) => {
              return (
                <div className="border-b border-solid border-gray-300 px-5 pb-1 last:border-none">
                  <p className="break-normal text-sm">{item.text}</p>
                  <p className="mt-1 text-xs text-gray-400">{item.time}</p>
                </div>
              );
            })}
          </div>
        </BasicCard>
      </LayoutBusiness>
    </BusinessProvider>
  );
}
