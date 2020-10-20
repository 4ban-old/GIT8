import React from "react";

import { LinkButton } from "@/components/_styled/Button";

const Button = (props) => {
  const { to, text, icon } = props;
  return <LinkButton to={to}>{icon}{text}</LinkButton>;
};

export default Button;
