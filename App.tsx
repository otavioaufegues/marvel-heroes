import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppLoading from 'expo-app-loading';

import {
  useFonts,
  Roboto_400Regular,
  Roboto_900Black,
  Roboto_300Light,
} from '@expo-google-fonts/roboto';

import theme from './src/global/styles/theme';
import { Dashboard } from './src/screens/Dashboard';

export default function App() {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_900Black,
    Roboto_300Light,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Dashboard />
    </ThemeProvider>
  );
}
