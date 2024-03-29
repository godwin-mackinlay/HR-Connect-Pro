import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Auth/Login';
import Register from '../../screens/Auth/Register';
import Education from '../../screens/Auth/Education';
import SuccessModal from '../../components/Modal/SuccessModal';
import ForgotPassword from '../../screens/Auth/Forgot';
import Welcome from '../../screens/Auth/Welcome';
import TabNavigation from '../tab/TabNavigation';
import SwitchRecruiter from '../../screens/Recruiter/SwitchRecruiter';

const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator
      screenOptions={{headerShown: false, statusBarColor: '#0050D1'}}>
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{headerShown: true}}
      />
      <AuthStack.Screen
        name="Education"
        component={Education}
        options={{headerShown: true}}
      />
      <AuthStack.Screen
        name="SuccessModal"
        component={SuccessModal}
        options={{headerShown: true}}
      />
      <AuthStack.Screen
        name="Forgot"
        component={ForgotPassword}
        options={{headerShown: true}}
      />
      <AuthStack.Screen
        name="SwitchRecruiter"
        component={SwitchRecruiter}
        options={{headerShown: true}}
      />
      <AuthStack.Screen
        name="tab"
        component={TabNavigation}
        options={{
          statusBarColor: '#0050D1',
        }}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
