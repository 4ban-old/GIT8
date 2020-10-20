import React from 'react';

import { AppTitle } from '@/components/_styled/AppTitle'

const Title = (props) => {
  const { size, sidebar } = props;
  return <AppTitle size={size} sidebar={sidebar}>GIT<sup>8</sup></AppTitle>
}

export default Title;