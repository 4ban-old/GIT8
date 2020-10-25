import React from "react";
import { Button } from "@/components/Button";

const Error404 = () => {
  return (
    <>
      <h1>404</h1>
      <h3>The Page you're looking for was not found.</h3>
      <Button to="/" text='Go Home' />
    </>
  );
};

export default Error404;
