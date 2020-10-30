import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { NotificationItem } from '@/components/Notification'

const NotificationsUngrouped = (props) => {
  const { notifications } = props

  return (
    <>
      {notifications.map((notification) => <NotificationItem notification={notification} key={notification.id}/>)}
    </>
  );
};

export default NotificationsUngrouped;