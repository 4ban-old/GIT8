import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Switch from "react-switch";

import { setDarkTheme } from "@/store/actions";

import { Sun } from '@styled-icons/fa-solid/Sun'
import { Moon } from '@styled-icons/evaicons-solid/Moon'

export const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.settingsReducer.isDark);

  return (<Switch
            onChange={() => dispatch(setDarkTheme(!isDark))}
            checked={isDark}
            checkedIcon={<Moon size='18' />}
            uncheckedIcon={<Sun size='18' />}
          />)

};