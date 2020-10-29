import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { groupBy } from '@/helpers/utils'


export const GroupedNotifications = (props) => {
  const { notifications } = props
  const groupedNotifications = groupBy(notifications, obj => obj.repository.full_name)

  return (
    <>
      <div>grouped notifications</div>
    </>
  );
};


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





