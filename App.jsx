import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigation/stack/AuthNavigator';
import SplashScreen from 'react-native-splash-screen';
import HomeNavigator from './src/navigation/stack/HomeNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import TabNavigation from './src/navigation/tab/TabNavigation';

function App() {
  const [user, setUser] = useState('');

  const getData = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('my-email');
      return jsonValue;
    } catch (e) {
      console.log(e);
    }
  };

  getData().then(data => {
    console.log('user', data);
    setUser(data);
  });

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <NavigationContainer>
        {user ? <TabNavigation /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
}

export default App;
