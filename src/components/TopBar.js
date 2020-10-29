import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { Checkbox } from 'rendition'
import { setGroups } from '@/store/actions'

export const TopBar = () => {
  const dispatch = useDispatch();
  const groups = useSelector(state => state.settingsReducer.groups)

  return (
    <>
      <Checkbox toggle={true} checked={groups} label='groups' onChange={() => dispatch(setGroups(!groups))}/>
    </>
  )
};