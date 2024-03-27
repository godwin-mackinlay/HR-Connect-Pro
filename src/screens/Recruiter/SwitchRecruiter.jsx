import React, {useLayoutEffect} from 'react';
import {View, StyleSheet, Image} from 'react-native';
import {TextInput, Text, Button} from 'react-native-paper';
import BackHeader from '../../components/Header/BackHeader';

const SwitchRecruiter = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      header: () => (
        <BackHeader navigation={navigation} title="Back" textAlign="center" />
      ),
    });
  }, [navigation]);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Seamlessly transition from candidate to recruiter. Sign in with your
        official email
      </Text>
      <Image
        source={require('../../assets/images/recuirt.png')}
        style={styles.imageview}
      />

      <Button
        mode="contained"
        style={styles.button}
        labelStyle={{color: '#fff'}}
        onPress={() => navigation.navigate('Login')}>
        SWITCH ACCOUNT
      </Button>
    </View>
  );
};

export default SwitchRecruiter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    fontSize: 18,
    marginLeft: 20,
    marginRight: 20,
    color: '#898989',
    marginBottom: 60,
    fontFamily: 'Poppins-Regular',
  },
  button: {
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: '#0050D1',
    borderRadius: 30,
    marginBottom: 12,
    width: 300,
    padding: 2,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
  },
});
