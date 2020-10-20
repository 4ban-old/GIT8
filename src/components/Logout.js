import React from "react";
import { useDispatch } from "react-redux";

import { LinkButton } from "@/components/_styled/Button";
import { logout } from "@/store/actions/auth.actions";

import { LogOut } from "@styled-icons/boxicons-regular/LogOut";


const Logout = () => {
  const dispatch = useDispatch();

  return <LinkButton onClick={() => dispatch(logout())}><LogOut size='32' /></LinkButton>;
};

export default Logout;
