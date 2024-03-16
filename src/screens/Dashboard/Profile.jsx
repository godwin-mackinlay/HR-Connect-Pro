import {StyleSheet, Text, View} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Button} from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/native';

const Profile = ({navigation}) => {
  const logout = async () => {
    await AsyncStorage.removeItem('my-email');
    navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: 'Login'}],
      }),
    );
  };
  return (
    <View>
      <Text>Profile</Text>
      <Button
        mode="contained"
        onPress={async () => {
          await logout();
        }}>
        Logout
      </Button>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({});
