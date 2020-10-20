import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Switch from "react-switch";

import { setDarkTheme } from "@/store/actions/theme.actions";

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.themeReducer.isDark);

  return <Switch onChange={() => dispatch(setDarkTheme(!isDark))} checked={isDark}/>
};

export default ThemeSwitch;
