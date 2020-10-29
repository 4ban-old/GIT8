import React from "react";
import styled from 'styled-components'

import { Button } from "@/components/Button";
import { CenterWrapper } from "@/components/Containers";

const Error404 = () => {
  return (
    <CenterWrapper>
      <h1>404</h1>
      <h3>The Page you're looking for was not found.</h3>
      <Button to="/" text='Go Home' />
    </CenterWrapper>
  );
};

export default Error404;
