import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const BackHeader = ({navigation, title}) => {
  return (
    <>
      <LinearGradient
        colors={['#0050D1', '#00296B', '#0050D1', '#00296B']}
        start={{x: 12, y: 0}}
        end={{x: 12, y: 0}}
        style={{height: 52}}>
        <Button
          textColor="#fff"
          // eslint-disable-next-line react/no-unstable-nested-components
          icon={() => (
            <Icon name="chevron-back-outline" color={'#fff'} size={31} />
          )}
          mode="text"
          style={styles.buttonOutline}
          labelStyle={styles.buttonText}
          onPress={() => navigation.goBack()}>
          {title}
        </Button>
      </LinearGradient>
    </>
  );
};

export default BackHeader;

const styles = StyleSheet.create({
  buttonOutline: {
    marginRight: 'auto',
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 21,
  },
});
