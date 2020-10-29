import React from "react";
import styled from "styled-components";

import { CenterWrapper } from "@/components/Containers";

const Title = styled.h1`
  margin: 0.5rem 0;
  font-weight: 700;
`;

export const AllDone = () => {
  return (
    <CenterWrapper>
      <Title>
        Congratulations!
      </Title>
      <h4>You have no new notifications</h4>
    </CenterWrapper>
  );
};
