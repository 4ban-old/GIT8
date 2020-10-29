import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AllDone } from "@/components/AllDone";
import { TopBar } from "@/components/TopBar";
import { GroupedNotifications } from "@/components/GroupedNotifications";
import { UngroupedNotifications } from "@/components/UngroupedNotifications";
import { NotificationsContainer, MainContainer, TopBarContainer } from '@/components/Containers'

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
      <MainContainer>
        {groups ? <GroupedNotifications notifications={notifications} /> : <UngroupedNotifications notifications={notifications} /> }
      </MainContainer>
    </NotificationsContainer>
  );
};

export default Notifications;