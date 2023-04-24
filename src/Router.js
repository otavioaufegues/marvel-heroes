import React from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Dashboard from './screens/Dashboard';
import Hero from './screens/Hero';

const Stack = createStackNavigator();

export default function Router() {
  const navigationRef = useNavigationContainerRef();
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="Dashboard"
        screenOptions={{
          headerTintColor: '#D42026',
          headerTitleStyle: {
            fontSize: 21,
          },
        }}
      >
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Hero"
          component={Hero}
          options={{ title: 'Detalhes do Herói' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
