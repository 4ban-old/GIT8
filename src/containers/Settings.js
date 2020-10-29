import React, { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { setGroups, setSound, setAutostart, setParticipating, setPerPage } from '@/store/actions'

import { Checkbox, Input } from 'rendition'
import { CenterWrapper } from '@/components/Containers'
import { Button } from '@/components/Button'

const Settings = () => {
  const dispatch = useDispatch()

  const request_limit = useSelector(state => state.sessionReducer.request_limit)
  const groups = useSelector(state => state.settingsReducer.groups)
  const sound = useSelector(state => state.settingsReducer.sound)
  const participating = useSelector(state => state.settingsReducer.participating)
  const autostart = useSelector(state => state.settingsReducer.autostart)
  const per_page = useSelector(state => state.settingsReducer.per_page)

  const [updated_per_page, setUpdatedPerPage] = useState(per_page)
  console.log(typeof updated_per_page, updated_per_page)

  return (
    <CenterWrapper>
      <h1>Settings</h1>
      <p>You have {request_limit} requests.</p>
      <div>
        <Checkbox toggle={true} checked={groups} label='groups' onChange={() => dispatch(setGroups(!groups))}/>
        <Checkbox toggle={true} checked={sound} label='sound' onChange={() => dispatch(setSound(!sound))}/>
        <Checkbox toggle={true} checked={participating} label='participating' onChange={() => dispatch(setParticipating(!participating))}/>
        <Checkbox toggle={true} checked={autostart} label='autostart' onChange={() => dispatch(setAutostart(!autostart))}/>

        <form onSubmit={() => dispatch(setPerPage(parseInt(updated_per_page)))}>
          <Input type='number' onChange={(event) => setUpdatedPerPage(event.target.value)}/>
          <Input type='submit' />
        </form>
      </div>
    </CenterWrapper>
  );
};

export default Settings;