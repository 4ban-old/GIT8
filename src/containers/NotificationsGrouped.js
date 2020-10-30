import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { groupBy } from '@/helpers/utils'

import { RepositoryItem, NotificationItem } from '@/components/Notification'

const NotificationsGrouped = (props) => {
  const { notifications } = props
  const groupedNotifications = groupBy(notifications, obj => obj.repository.full_name)

  return (
    <>
      {Array.from(groupedNotifications).map(([name, notifications]) => {
        return (
          <RepositoryItem name={name} key={name}>
            {notifications.map((notification) => <NotificationItem notification={notification} key={notification.id} />)}
          </RepositoryItem>
        )
      })}
    </>
  );
};

export default NotificationsGrouped;