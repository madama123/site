import { useState } from "react";

export function useNotificationStore() {
  const [notifications, setNotifications] = useState<any[]>([]);
  const removeNotification = (id: string) => {
    setNotifications((prev) => prev.filter((n) => n.id !== id));
  };
  return { notifications, removeNotification };
} 