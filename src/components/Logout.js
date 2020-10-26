import React from "react";
import { useDispatch } from "react-redux";

import { logout } from "@/store/actions";

import { Exit } from "@styled-icons/ionicons-outline/Exit";

import { Button } from "@/components/Button";

export const Logout = () => {
  const dispatch = useDispatch();

  return <Button onClick={() => dispatch(logout())} icon={<Exit size='32' />}/>
};
