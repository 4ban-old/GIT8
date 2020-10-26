import React from "react";
import { useDispatch, useSelector } from 'react-redux';

// import CheckOption from "@/components/CheckOption";

// import actions from '@/store/actions'

const Settings = () => {
  const dispatch = useDispatch()

  const request_limit = useSelector(state => state.sessionReducer.request_limit)
  const sound = useSelector(state => state.settingsReducer.sound)
  const participating = useSelector(state => state.settingsReducer.participating)
  const autostart = useSelector(state => state.settingsReducer.autostart)
  const perPage = useSelector(state => state.settingsReducer.perPage)

  console.log({sound, participating, autostart, perPage})

  return (
    <>
      <h1>Settings</h1>
      <p>You have {request_limit} requests.</p>
      <div>
        {/* <CheckOption checked={sound} onChange={console.log('sound')} text='Sound' />
        <CheckOption checked={participating} onChange={console.log('participating')} text='Participating only' />
        <CheckOption checked={autostart} onChange={console.log('autostart')} text='Autostart' /> */}
      </div>
    </>
  );
};

export default Settings;