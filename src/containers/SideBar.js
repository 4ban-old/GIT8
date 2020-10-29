import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { logout, getUser, fetchNotifications } from "@/store/actions";

import { Settings } from "@styled-icons/ionicons-outline/Settings";
import { Notifications } from '@styled-icons/ionicons-outline/Notifications'
import { Sync } from '@styled-icons/ionicons-outline/Sync'
import { Exit } from "@styled-icons/ionicons-outline/Exit";


import { Button } from "@/components/Button";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { Title } from "@/components/Title";
import { Avatar } from "@/components/Avatar";
import { Divider } from "@/components/Divider";
import { Spacer } from "@/components/Spacer";

const SideBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.sessionReducer.user);
  const notifications = useSelector((state) => state.sessionReducer.notifications);

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
    <>
      <Title size='1em' sidebar={true}/>
      <Avatar src={user?.avatar_url || ''} url={user?.html_url || ''} />
      <Button to='#' onClick={refreshNotifications} icon={<Sync size='32' />} />
      <Divider />
      <ThemeSwitch />
      <Button to="/" icon={<Notifications size='32' />} badge={notifications?.length || null} />
      <Button to="/anywhere" text='404' />
      <Spacer />
      <Divider />
      <Button to="/settings" icon={<Settings size='32'/>} />
      <Button to='#' icon={<Exit size='32' />} onClick={() => dispatch(logout())} />
    </>
  );
};

export default SideBar;