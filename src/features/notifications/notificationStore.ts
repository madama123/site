import { useState } from "react";

interface Notification {
  id: string;
  message: string;
  type: 'success' | 'error' | 'info' | 'warning';
}

export function useNotificationStore() {
  const [notifications, setNotifications] = useState<Notification[]>([]);
  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };
  return { notifications, removeNotification };
} 