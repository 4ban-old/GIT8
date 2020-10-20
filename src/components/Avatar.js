import React from 'react';
import { openExternal } from '@/helpers/utils'
import { UserAvatar } from '@/components/_styled/UserAvatar'

const Avatar = (props) => {
  const {
    src = '',
    url = ''
  } = props;
  return <UserAvatar src={src} onClick={() => openExternal(url)}/>
}

export default Avatar;