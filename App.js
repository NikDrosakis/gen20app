import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Mylib from './pages/Mylib';
import Login from './pages/Login';
import Signup from './pages/Signup';
import GoogleLogin from './components/GoogleLogin';
import Book from './pages/Book';
import Books from './pages/Books';
import Cat from './pages/Cat';
import Home from './pages/Home';
import Writer from './pages/Writer';
import Publisher from './pages/Publisher';
import Documentation from './pages/Documentation';
import Settings from './pages/Settings';
import Profile from './pages/Profile';
import { AppProvider } from './contexts/AppContext';
import * as SplashScreen from 'expo-splash-screen';

const Stack = createStackNavigator();
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [appIsReady, setAppIsReady] = useState(false);

  // Simulate loading process
  useEffect(() => {
    async function prepare() {
      try {
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }
    prepare();
  }, []);

  // Check authentication
  useEffect(() => {
    const checkAuth = async () => {
      const gsid = await AsyncStorage.getItem('GSID');
      const gsgrp = await AsyncStorage.getItem('GSGRP');
      const gslibid = await AsyncStorage.getItem('GSLIBID');

      if (gsid && gsgrp && gslibid) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    };
    checkAuth();
  }, []);

  // If the app is still preparing, you can show a splash screen or loader
  if (!appIsReady) {
    return null;
  }

  return (
    <AppProvider>
      <NavigationContainer>
        {isLoggedIn ? (
          // Logged-in users will see these screens
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Mylib" component={Mylib} />
            <Stack.Screen name="Book" component={Book} />
            <Stack.Screen name="Books" component={Books} />
            <Stack.Screen name="Writer" component={Writer} />
            <Stack.Screen name="Publisher" component={Publisher} />
            <Stack.Screen name="Cat" component={Cat} />
            <Stack.Screen name="Documentation" component={Documentation} />
            <Stack.Screen name="Settings" component={Settings} />
            <Stack.Screen name="Profile" component={Profile} />
          </Stack.Navigator>
        ) : (
          // Not-logged-in users will see these screens
          <Stack.Navigator initialRouteName="Login">
            <Stack.Screen
              name="Login"
              component={Login}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Signup"
              component={Signup}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="GoogleLogin" component={GoogleLogin} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AppProvider>
  );
}
