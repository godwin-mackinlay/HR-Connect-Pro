import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AuthNavigator from './src/navigation/stack/AuthNavigator';
import SplashScreen from 'react-native-splash-screen';
import HomeNavigator from './src/navigation/stack/HomeNavigator';

function App() {
  const myuser = 'macinlay';

  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <>
      <NavigationContainer>
        {myuser ? <HomeNavigator /> : <AuthNavigator />}
      </NavigationContainer>
    </>
  );
}

export default App;
