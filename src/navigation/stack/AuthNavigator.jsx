import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../../screens/Auth/Login';
import Register from '../../screens/Auth/Register';
import ResumeUpload from '../../screens/Auth/ResumeUpload';
import SuccessModal from '../../components/Modal/SuccessModal';

const AuthNavigator = () => {
  const AuthStack = createNativeStackNavigator();
  return (
    <AuthStack.Navigator screenOptions={{headerShown: false}}>
      <AuthStack.Screen name="Login" component={Login} />
      <AuthStack.Screen
        name="Register"
        component={Register}
        options={{headerShown: true, statusBarColor: '#0050D1'}}
      />
      <AuthStack.Screen
        name="ResumeUpload"
        component={ResumeUpload}
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        name="SuccessModal"
        component={SuccessModal}
        options={{headerShown: true}}
      />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
