import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { groupBy } from '@/helpers/utils'
import { AllDone } from "@/components/AllDone";

const Notifications = () => {
  const dispatch = useDispatch();
  const notifications = useSelector((state) => state.sessionReducer.notifications);

  const groupedNotifications = groupBy(notifications, obj => obj.repository.full_name)

  console.log('grouped', groupedNotifications)

  if (!notifications.length) {
    return <AllDone />;
  }

  return (
    <>
      <div>Test message</div>
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
    </>
  );
};

export default Notifications;