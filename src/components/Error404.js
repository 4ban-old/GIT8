import React from "react";
import { LinkButton } from "@/components/_styled/Button";

const Error404 = () => {
  return (
    <div>
      <h1>404</h1>
      <h3>The Page you're looking for was not found.</h3>
      <LinkButton to="/">Go Home</LinkButton>
    </div>
  );
};

export default Error404;
