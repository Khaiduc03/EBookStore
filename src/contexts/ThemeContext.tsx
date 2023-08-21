import React, { FunctionComponent } from 'react';

import { ThemeProvider as RNThemeProvider } from '@rneui/themed';
import { theme } from '../theme';



interface ThemeProviderProps {
  children: React.ReactNode;
}

const ThemeProvider: FunctionComponent<ThemeProviderProps> = ({ children }) => {
  return <RNThemeProvider theme={theme}>{children}</RNThemeProvider>;
};

export default ThemeProvider;
