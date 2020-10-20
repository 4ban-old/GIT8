import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "@/store/actions/user.actions";

import { Settings } from "@styled-icons/material/Settings";

import Logout from "@/components/Logout";
import Button from "@/components/Button";
import ThemeSwitch from "@/components/ThemeSwitch";
import Title from "@/components/Title";
import Avatar from "@/components/Avatar";
import Divider from "@/components/Divider";
import Spacer from "@/components/Spacer";


const SideBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  console.log(user);

  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);

  return (
    <>
      <Title size='1em' sidebar={true}/>
      <Divider />
      <Avatar src={user?.avatar_url || ''} url={user?.html_url || ''} />
      <Divider />
      <ThemeSwitch />
      <Button to="/anywhere" text='404'/>
      <Spacer />
      <Divider />
      <Button to="/settings" icon={<Settings size='32'/>}/>
      <Logout />
    </>
  );
};

export default SideBar;