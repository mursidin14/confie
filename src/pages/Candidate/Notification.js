import BasicCard from 'components/Widgets/BasicCard';
import CandidateProvider from 'context/candidate-context';
import React from 'react';
import { getNotification } from 'services/Profile/Notification';
import { getTimeFromNow } from 'utils/utils';

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
  const [notifications, setNotifications] = React.useState([]);
  React.useEffect(() => {
    const getItemNotification = async () => {
      const response = await getNotification();
      const itemNotifcation = response.data.data.data.map((item) => {
        return {
          type: item.type,
          message: item.data.message,
          created_at: item.created_at,
          read_at: item.read_at,
          data: item.data,
        };
      });
      setNotifications(itemNotifcation);
    };
    getItemNotification();
  }, []);
  return (
    <CandidateProvider PageName="Dashboard">
      <BasicCard>
        <div className=" h-full text-left space-y-4 py-2">
        {notifications.length === 0 && (
              <p className="text-center text-gray-600 text-xs">
                You have no notification
              </p>
            )}
          {notifications.map((notification , i) => {
            return (
              <div className="pb-1 px-5 border-b border-solid border-gray-300 last:border-none">
                <p className="break-normal text-sm">{notification.message}</p>
                <p className="text-xs text-gray-400 mt-1">{getTimeFromNow(notification.created_at)}</p>
              </div>
            );
          })}
        </div>
      </BasicCard>
    </CandidateProvider>
  );
}
