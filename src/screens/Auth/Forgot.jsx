import React, {useLayoutEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';
import BackHeader from '../../components/Header/BackHeader';

const ForgotPassword = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      header: () => (
        <BackHeader navigation={navigation} title="Forgot Password" />
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <View style={styles.viewTextContainer}>
        <Text style={styles.inputReq}>
          Please enter your email address. You will receive a link to create a
          new password.
        </Text>
        <TextInput
          label={<Text>email</Text>}
          mode="outlined"
          style={styles.bodyInput}
          outlineStyle={{borderRadius: 30}}
        />
        <Button mode="contained" style={styles.button}>
          submit
        </Button>
      </View>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  viewTextContainer: {
    marginBottom: 70,
  },
  bodyInput: {
    borderRadius: 50,
    marginLeft: 30,
    marginRight: 40,
    marginBottom: 15,
    height: 51,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  inputReq: {
    fontSize: 18,
    color: '#a9a9a9',
    textAlign: 'center',
    padding: 40,
  },

  button: {
    marginLeft: 30,
    marginRight: 40,
    marginTop: 20,
    backgroundColor: '#2358FB',
  },
});
