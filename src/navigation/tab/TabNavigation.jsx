import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import Dashboard from '../../screens/Dashboard/Dashboard';
import HomeNavigator from '../stack/HomeNavigator';
import ChatSplash from '../../screens/Chat/ChatSplash';
import ChatBot from '../../screens/Chat/ChatBot';
import ChatNavigator from '../stack/ChatNavigator';

function AssessmentScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Assessment!</Text>
    </View>
  );
}

function ProfileScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Assessment!</Text>
    </View>
  );
}

function AnalysisScreen() {
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
            iconName = focused ? 'home-outline' : 'home-outline';
          } else if (route.name === 'Chat') {
            iconName = focused
              ? 'chatbox-ellipses-outline'
              : 'chatbox-ellipses-outline';
          } else if (route.name === 'Assessment') {
            iconName = focused
              ? 'document-text-outline'
              : 'document-text-outline';
          } else if (route.name === 'Analysis') {
            iconName = focused ? 'analytics-outline' : 'analytics-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'person-outline' : 'person-outline';
          }
          return (
            <Icon
              name={iconName}
              size={size}
              color={color}
              style={{
                backgroundColor: focused ? '#fff' : 'transparent',
                padding: 4,
                borderRadius: 30,
              }}
            />
          );
        },
        tabBarHideOnKeyboard: true,
        tabBarActiveTintColor: '#FA7902',
        tabBarInactiveTintColor: '#fff',
        tabBarStyle: {
          position: 'absolute',
          backgroundColor: '#0050D1',
          borderColor: '#fff',
          borderWidth: 1,
          elevation: 4,
          height: 70,
          borderRadius: 50,
          bottom: 10, //5
          marginLeft: 12, // 12
          marginRight: 12, // 12
        },
        tabBarLabelStyle: {
          color: navigation.isFocused() ? 'tomato' : '#fff',
          fontFamily: 'Poppins-Medium',
          marginBottom: 6,
        },
        tabBarIconStyle: {
          marginTop: 10,
        },
      })}>
      <Tab.Screen
        name="Dashboard"
        component={HomeNavigator}
        options={{headerShown: false, title: 'Home'}}
      />
      <Tab.Screen name="Assessment" component={AssessmentScreen} />
      <Tab.Screen
        name="Chat"
        component={ChatNavigator}
        options={{headerShown: false}}
      />

      <Tab.Screen name="Analysis" component={AnalysisScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

export default TabNavigation;
