import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { getUserAction, fetchNotifications } from "@/store/actions";

import { Settings } from "@styled-icons/ionicons-outline/Settings";
import { Notifications } from '@styled-icons/ionicons-outline/Notifications'
import { Sync } from '@styled-icons/ionicons-outline/Sync'


import { Logout } from "@/components/Logout";
import { Button } from "@/components/Button";
import { ThemeSwitch } from "@/components/ThemeSwitch";
import { Title } from "@/components/Title";
import { Avatar } from "@/components/Avatar";
import { Divider } from "@/components/Divider";
import { Spacer } from "@/components/Spacer";

const SideBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.sessionReducer.user);

  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);

  useEffect(() => {
    const interval = 60000;
    dispatch(fetchNotifications())
    const timer = setInterval(() =>  dispatch(fetchNotifications()), interval);
    return () => {
      clearInterval(timer)
    }
  }, []);

  return (
    <>
      <Title size='1em' sidebar={true}/>
      <Avatar src={user?.avatar_url || ''} url={user?.html_url || ''} />
      <Button icon={<Sync size='32' />}/>
      <Divider />
      <ThemeSwitch />
      <Button to="/" icon={<Notifications size='32' />}/>
      <Button to="/anywhere" text='404' />
      <Spacer />
      <Divider />
      <Button to="/settings" icon={<Settings size='32'/>}/>
      <Logout />
    </>
  );
};

export default SideBar;