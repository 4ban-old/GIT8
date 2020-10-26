import React from "react";

import { LinkButton } from "@/components/_styled/Button";

const Button = (props) => {
  const { to, text, icon, onClick = null } = props;
  return <LinkButton to={to} onClick={onClick}>{icon}{text}</LinkButton>;
};

export default Button;
