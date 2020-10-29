import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AllDone } from "@/components/AllDone";
import { NotificationsContainer, ContentContainer, TopBarContainer } from '@/components/Containers'
import TopBar from "@/containers/TopBar";
import NotificationsGrouped from "@/containers/NotificationsGrouped";
import NotificationsUngrouped from "@/containers/NotificationsUngrouped";

const Notifications = () => {
  const notifications = useSelector((state) => state.sessionReducer.notifications);
  const groups = useSelector(state => state.settingsReducer.groups)

  if (!notifications.length) {
    return <AllDone />;
  }

  return (
    <NotificationsContainer>
      <TopBarContainer>
        <TopBar />
      </TopBarContainer>
      <ContentContainer>
        {groups ?
          <NotificationsGrouped notifications={notifications} /> :
          <NotificationsUngrouped notifications={notifications} /> }
      </ContentContainer>
    </NotificationsContainer>
  );
};

export default Notifications;