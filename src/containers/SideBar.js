import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { logout, getUser, fetchNotifications } from "@/store/actions";

import { Settings } from "@styled-icons/ionicons-outline/Settings";
import { Notifications } from '@styled-icons/ionicons-outline/Notifications'
import { Sync } from '@styled-icons/ionicons-outline/Sync'
import { Exit } from "@styled-icons/ionicons-outline/Exit";

import { SideBarWrapper } from "@/components/Containers";
import { Button } from "@/components/Button";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { Title } from "@/components/Title";
import { Avatar } from "@/components/Avatar";
import { Divider } from "@/components/Divider";

const SideBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.sessionReducer.user);
  const per_page = useSelector((state) => state.settingsReducer.per_page);
  const notifications = useSelector((state) => state.sessionReducer.notifications);

  // TODO how to handle second page?
  const badge = notifications?.length % per_page === 0 ? `${notifications.length}` : `${notifications.length}+`;

  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);

  useEffect(() => {
    const interval = 60000;
    refreshNotifications()
    const timer = setInterval(() =>  refreshNotifications(), interval);
    return () => {
      clearInterval(timer)
    }
  }, []);

  const refreshNotifications = () => {
    dispatch(fetchNotifications())
  }

  return (
    <SideBarWrapper>
      <Title size='1em' sidebar={true}/>
      <Avatar src={user?.avatar_url || ''} url={user?.html_url || ''} />
      <Button to='#' onClick={refreshNotifications} icon={<Sync size='32' />} />
      <Divider />
      <ThemeSwitch />
      <Button to="/" icon={<Notifications size='32' />} badge={parseInt(badge) > 99 ? '99+' : badge} />
      <Button to="/anywhere" text='404' />
      <Divider />
      <Button to="/settings" icon={<Settings size='32'/>} />
      <Button to='#' icon={<Exit size='32' />} onClick={() => dispatch(logout())} />
    </SideBarWrapper>
  );
};

export default SideBar;