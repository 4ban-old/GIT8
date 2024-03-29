import React from 'react';
import { openExternal } from '@/helpers/utils'
import styled from "styled-components";

export const UserAvatar = styled.img`
  ${'' /* max-width: 100; */}
  width: 9vw;
  border-radius: 0.5rem;
  &:hover {
    opacity:0.5;
  }
`;

export const Avatar = (props) => {
  const {
    src = '',
    url = ''
  } = props;
  return <UserAvatar src={src} onClick={() => openExternal(url)}/>
}
