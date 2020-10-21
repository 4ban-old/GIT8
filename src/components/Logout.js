import React from "react";
import { useDispatch } from "react-redux";

import { LinkButton } from "@/components/_styled/Button";
import { logout } from "@/store/actions";

import { Exit } from "@styled-icons/ionicons-outline/Exit";


const Logout = () => {
  const dispatch = useDispatch();

  return <LinkButton onClick={() => dispatch(logout())}><Exit size='32' /></LinkButton>;
};

export default Logout;
