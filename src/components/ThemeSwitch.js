import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Switch from "react-switch";

import { setTheme } from "@/store/actions";

import { Sun } from '@styled-icons/fa-solid/Sun'
import { Moon } from '@styled-icons/evaicons-solid/Moon'

export const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const userTheme = useSelector((state) => state.settingsReducer.theme);

  const updateTheme = () => {
    userTheme === 'dark' ? dispatch(setTheme('light')) : dispatch(setTheme('dark'))
  }
  return (<Switch
            onChange={updateTheme}
            checked={userTheme === 'dark'}
            checkedIcon={<Moon size='26' />}
            uncheckedIcon={<Sun size='26' />}
          />)

};