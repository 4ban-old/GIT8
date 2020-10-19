import React from "react";
import { useDispatch } from "react-redux";

import { Button } from "@/components/_styled/Button";
import { logout } from "@/store/actions/auth.actions";

const Logout = () => {
  const dispatch = useDispatch();

  return <Button onClick={() => dispatch(logout())}>Log out</Button>;
};

export default Logout;
