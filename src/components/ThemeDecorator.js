import React from 'react';
import { useSelector } from "react-redux";
import { Provider } from 'rendition';

import { mergeConfigs } from '@/themes/mergeConfigs';
import baseTheme from '@/themes/base'
import lightTheme from "@/themes/light";
import darkTheme from "@/themes/dark";

import { GlobalStyle } from "@/components/GlobalStyle";

export const ThemeDecorator = ({children}) => {
  const isDark = useSelector((state) => state.settingsReducer.isDark);
  const theme = isDark ? mergeConfigs(baseTheme, darkTheme) : mergeConfigs(baseTheme, lightTheme);

  console.log('###################### THEME:', theme)

  return (
    <Provider theme={theme}>
      <GlobalStyle theme={theme} />
      {children}
    </Provider>
  )
}