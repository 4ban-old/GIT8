import React from "react";
import { useSelector, useDispatch } from "react-redux";

import { setDarkTheme } from "@/store/actions/theme.actions";
import { Button } from "@/components/_styled/Button";

const ThemeSwitch = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.themeReducer.isDark);

  return (
    <Button onClick={() => dispatch(setDarkTheme(!isDark))}>
      Change theme
    </Button>
  );
};

export default ThemeSwitch;
