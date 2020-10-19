import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";

import { getUserAction } from "@/store/actions/user.actions";

import Logout from "@/components/Logout";
import { LinkButton } from "@/components/_styled/Button";
import ThemeSwitch from "@/components/ThemeSwitch";

const SideBar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userReducer.user);
  console.log(user);

  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);

  return (
    <>
      Sidebar {user?.login ? user.login : ""}
      <ThemeSwitch />
      <LinkButton to="/anywhere">404</LinkButton>
      <Logout />
    </>
  );
};

export default SideBar;
