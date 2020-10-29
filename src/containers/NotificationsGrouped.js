import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { groupBy } from '@/helpers/utils'


const NotificationsGrouped = (props) => {
  const { notifications } = props
  const groupedNotifications = groupBy(notifications, obj => obj.repository.full_name)

  return (
    <>
      <div>grouped notifications</div>
    </>
  );
};

export default NotificationsGrouped

{/* {Object.values(groupedNotifications).map((repoNotifications) => {
        const repoSlug = repoNotifications[0].repository.full_name;

        return (
          <RepositoryNotifications
            key={repoSlug}
            hostname={hostname}
            repoName={repoSlug}
            repoNotifications={repoNotifications}
          />
        );
      })} */}





