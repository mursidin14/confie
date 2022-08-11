import React from 'react';
import {
  getNotification,
  readNotifications,
} from 'services/Profile/Notification';
import { getTimeFromNow } from 'utils/utils';

export default function Notification({ isBusiness }) {
  const [openFirstTime, setOpenFirstTime] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [notifications, setNotifications] = React.useState([]);
  const [newNotifications, setNewNotifications] = React.useState(0);
  const handleClick = async () => {
    setOpen(!open);
    if (!openFirstTime) {
      await readNotifications();
	  setNewNotifications(0);
    }
	// handle when close
	if (open) {
		// set all  item notifications is_read to true
		setNotifications(notifications.map(item => {
			return {
				...item,
				is_read: true
			}
		}))
	}
    setOpenFirstTime(true);
  };
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
		  is_read: item.read_at ? true : false,
        };
      });
      const newNotifications = itemNotifcation.filter((item) => {
        return item.read_at === null;
      });
      setNewNotifications(newNotifications.length);
      setNotifications(itemNotifcation);
    };

    const closeNotification = e => {
      if (e.path[0].tagName !== 'BUTTON' && e.path[0].tagName !== 'svg'  && e.path[0].tagName !== 'path'){
        setOpen(false);
      }
    }; 

    document.body.addEventListener('click', closeNotification);
    return () => document.body.removeEventListener('click', closeNotification);
    getItemNotification();
    
  }, []);

 

  const handleMarkRead = () => {};
  return (
    <>
      <button
        className={`${
          open ? 'bg-[#FFE6BF]' : ''
        } relative rounded-md p-2 transition-all hover:bg-[#FFE6BF]`}
        onClick={handleClick}
      >
        {newNotifications > 0 && (
          <div className="absolute top-2 right-1 z-10 flex h-5 w-5 items-center justify-center rounded-full bg-white ">
            <div className="flex h-4 w-4 items-center justify-center rounded-full bg-orange text-xs text-white">
              {newNotifications}
            </div>
          </div>
        )}

        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.3"
            d="M16 27.7681C18.2092 27.7681 20 25.9773 20 23.7681C20 21.5589 18.2092 19.7681 16 19.7681C13.7908 19.7681 12 21.5589 12 23.7681C12 25.9773 13.7908 27.7681 16 27.7681Z"
            fill="#A1A5B7"
          />
          <path
            d="M25.3334 19.9998V23.9998C25.3334 24.7998 24.8 25.3332 24 25.3332H8.00002C7.20002 25.3332 6.66669 24.7998 6.66669 23.9998V19.9998C8.13335 19.9998 9.33335 18.7998 9.33335 17.3332V13.3332C9.33335 10.1332 11.6 7.4665 14.6667 6.79984V3.99984C14.6667 3.19984 15.2 2.6665 16 2.6665C16.8 2.6665 17.3334 3.19984 17.3334 3.99984V6.79984C20.4 7.4665 22.6667 10.1332 22.6667 13.3332V17.3332C22.6667 18.7998 23.8667 19.9998 25.3334 19.9998ZM14.6667 13.3332C14.6667 12.5332 15.2 11.9998 16 11.9998C16.8 11.9998 17.3334 11.4665 17.3334 10.6665C17.3334 9.8665 16.8 9.33317 16 9.33317C13.7334 9.33317 12 11.0665 12 13.3332C12 14.1332 12.5334 14.6665 13.3334 14.6665C14.1334 14.6665 14.6667 14.1332 14.6667 13.3332Z"
            fill="#A1A5B7"
          />
        </svg>
      </button>
      <section
        className={`absolute right-10 top-14 z-10 rounded-md bg-white text-left shadow-mine sm:right-36 ${
          !open
            ? 'hidden  translate-y-0 opacity-0'
            : ' block translate-y-1 opacity-100'
        } max-w-xs transition-all sm:w-[300px]`}
      >
        <div className="text-left">
          <div className="rounded-t-md bg-[#324AAF] px-5 py-3 ">
            <p className="font-medium tracking-widest text-white">
              Notification
            </p>
          </div>
          {/* <button onClick={handleMarkRead}>
            <p className="px-5 py-1 text-xs text-black">Mark all as read</p>
          </button> */}
          <div className="px-5 py-2">
            {notifications.length === 0 && (
              <p className="text-center text-xs text-gray-600">
                You have no notification
              </p>
            )}
            {notifications.slice(0, 3).map((notification, i) => {
              return (
                <div key={i} className="mb-1 last:mb-0">
                  <div className="flex gap-5">
                    <p className="break-normal text-xs">
                      {notification.message}
                    </p>
                    {notification.is_read === false && (
                      <>
                        <svg
                          className="mt-1 h-2 w-2"
                          width="8"
                          height="8"
                          viewBox="0 0 8 8"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <circle cx="4" cy="4" r="4" fill="#FE9A00" />
                        </svg>
                      </>
                    )}
                  </div>
                  <p className="text-[10px] text-gray-400 ">
                    {getTimeFromNow(notification.created_at)}
                  </p>
                </div>
              );
            })}
          </div>
          <a
            className="inline-block w-full border-t px-5 py-2 text-center text-sm text-gray-400 hover:text-black"
            href={isBusiness ? '/business/notifications' : '/notifications'}
          >
            View All
          </a>
        </div>
      </section>
    </>
  );
}
