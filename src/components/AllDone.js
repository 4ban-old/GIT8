import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
`;

const Title = styled.h1`
  margin: 0.5rem 0;
  font-weight: 700;
`;

export const AllDone = () => {
  return (
    <Wrapper>
      <Title>
        Congratulations!
      </Title>
      <h4>You have no new notifications</h4>
    </Wrapper>
  );
};
