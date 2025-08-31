import React from 'react';
import { Notification } from './Notification';
import { useNotificationStore } from '../features/notifications/notificationStore';

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { notifications, removeNotification } = useNotificationStore();

  return (
    <>
      {children}
      {notifications.map((notification) => (
        <Notification
          key={notification.id}
          message={notification.message}
          type={notification.type}
          duration={notification.duration}
          onClose={() => removeNotification(notification.id)}
        />
      ))}
    </>
  );
}; 