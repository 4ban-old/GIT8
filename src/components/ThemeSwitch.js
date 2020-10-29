import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Switch from "react-switch";

import { setTheme } from "@/store/actions";

import { useTheme } from 'rendition';
import { Sun } from '@styled-icons/fa-solid/Sun'
import { Moon } from '@styled-icons/evaicons-solid/Moon'

export const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const userTheme = useSelector((state) => state.settingsReducer.theme);
  const theme = useTheme()

  console.log(theme)

  const updateTheme = () => {
    userTheme === 'dark' ? dispatch(setTheme('light')) : dispatch(setTheme('dark'))
  }
  return (<Switch
            onChange={updateTheme}
            checked={userTheme === 'dark'}
            checkedIcon={<Moon size='18' />}
            uncheckedIcon={<Sun size='18' />}
            offColor={theme.app.colors.yellow}
            onColor={theme.app.colors.dark}
            offHandleColor={theme.app.colors.dark}
            onHandleColor={theme.app.colors.yellow}
            // handleDiameter={12}
            height={22}
            width={44}
          />)

};