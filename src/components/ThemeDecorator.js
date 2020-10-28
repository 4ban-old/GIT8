import React from 'react';
import { useSelector } from "react-redux";
import { Provider } from 'rendition';

import { mergeConfigs } from '@/themes/mergeConfigs';
import baseTheme from '@/themes/base'
import lightTheme from "@/themes/light";
import darkTheme from "@/themes/dark";

import { GlobalStyle } from "@/components/GlobalStyle";

const themes = {
  dark: darkTheme,
  light: lightTheme
}

export const ThemeDecorator = ({children}) => {
  const userTheme = useSelector((state) => state.settingsReducer.theme);
  const theme = mergeConfigs(baseTheme, themes[userTheme]);

  return (
    <Provider theme={theme}>
      <GlobalStyle theme={theme} />
      {children}
    </Provider>
  )
}