import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Checkbox } from 'rendition'
import { setGroups } from '@/store/actions'

import { ChevronUp } from '@styled-icons/boxicons-solid/ChevronUp'

import { Button } from '@/components/Button'

const TopBar = () => {
  const dispatch = useDispatch();
  const groups = useSelector(state => state.settingsReducer.groups)

  return (
    <>
      <Checkbox toggle={true} checked={groups} label='groups' onChange={() => dispatch(setGroups(!groups))}/>
      <Button to='#' text='Mark all read' />
      <Button to='#' icon={<ChevronUp size='24' />} />
    </>
  )
};

export default TopBar