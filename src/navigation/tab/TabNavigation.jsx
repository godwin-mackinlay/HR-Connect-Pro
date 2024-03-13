import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Dashboard from '../../screens/Dashboard/Dashboard';
import HomeNavigator from '../stack/HomeNavigator';
import ChatSplash from '../../screens/Chat/ChatSplash';
import ChatBot from '../../screens/Chat/ChatBot';
import ChatNavigator from '../stack/ChatNavigator';

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Assessment!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={({navigation, route}) => ({
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Dashboard') {
            iconName = focused ? 'grid-outline' : 'grid-outline';
          } else if (route.name === 'Chat') {
            iconName = focused
              ? 'chatbox-ellipses-outline'
              : 'chatbox-ellipses-outline';
          } else if (route.name === 'Assessment') {
            iconName = focused ? 'analytics-outline' : 'analytics-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'tomato',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#00296B',
          borderColor: '#000',
          borderWidth: 0,
          elevation: 4,
          height: 55,
          borderRadius: 0,
          bottom: 0, //5
          marginLeft: 0, // 12
          marginRight: 0, // 12
        },
        tabBarLabelStyle: {
          color: navigation.isFocused() ? 'tomato' : '#fff',
          fontFamily: 'Poppins-Medium',
        },
      })}>
      <Tab.Screen
        name="Dashboard"
        component={HomeNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Chat"
        component={ChatNavigator}
        options={{headerShown: false}}
      />
      <Tab.Screen name="Assessment" component={SettingsScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
