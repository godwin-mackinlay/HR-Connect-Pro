import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Search from '../../screens/Dashboard/Search';
import Hiring from '../../screens/Dashboard/Hiring';
import Dashboard from '../../screens/Dashboard/Dashboard';
import Feedback from '../../screens/Dashboard/Feedback';

const HomeNavigator = () => {
  const HomeStack = createNativeStackNavigator();
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen
        name="Dashboard"
        component={Dashboard}
        options={{headerShown: true}}
      />
      <HomeStack.Screen
        name="Search"
        component={Search}
        options={{headerShown: true}}
      />
      <HomeStack.Screen
        name="Hiring"
        component={Hiring}
        options={{headerShown: true}}
      />
      <HomeStack.Screen
        name="Feedback"
        component={Feedback}
        options={{headerShown: true}}
      />
    </HomeStack.Navigator>
  );
};

export default HomeNavigator;
