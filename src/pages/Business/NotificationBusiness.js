import LayoutBusiness from 'components/Layout/LayoutBusiness';
import BasicCard from 'components/Widgets/BasicCard';
import { BusinessProvider } from 'context/business-context';
import React from 'react';
import { getNotification } from 'services/Profile/Notification';
import { getTimeFromNow } from 'utils/utils';

export default function NotificationBusiness() {
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
    <BusinessProvider>
      <LayoutBusiness PageName={'Dashboard'}>
        <BasicCard>
          <div className=" h-full space-y-4 py-2 text-left">
            {notifications.length === 0 && (
              <p className="text-center text-xs text-gray-600">
                You have no notification
              </p>
            )}
            {notifications.map((notification, i) => {
              return (
                <div className="border-b border-solid border-gray-300 px-5 pb-1 last:border-none">
                  <p className="break-normal text-sm"
				     dangerouslySetInnerHTML={{
							__html: notification.message
						}}
				  >
				  </p>
                  <p className="mt-1 	text-xs text-gray-400">
                    {getTimeFromNow(notification.created_at)}
                  </p>
                </div>
              );
            })}
          </div>
        </BasicCard>
      </LayoutBusiness>
    </BusinessProvider>
  );
}
