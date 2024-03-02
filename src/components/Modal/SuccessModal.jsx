import {StyleSheet, text, View, Image} from 'react-native';
import React from 'react';
import {Button, TextInput, Text} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';

function SuccessModal() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.view}>
        <Image
          source={require('../../assets/images/success.png')}
          style={styles.logo}
        />

        <Text style={styles.text} variant="headlineMedium">
          Success
        </Text>
        <Text style={styles.text1} variant="titleMedium">
          Congratulation, you have successfully completed your registration!
        </Text>
        <View style={styles.viewButton}>
          <Button
            style={styles.button}
            mode="contained"
            onPress={() => navigation.navigate('Search')}>
            Done
          </Button>
        </View>
      </View>
    </View>
  );
}
export default SuccessModal;

const styles = StyleSheet.create({
  container: {
    margin: 50,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
  },
  view: {
    backgroundColor: '#483d8b',
    borderRadius: 10,
    paddingTop: 50,
    paddingBottom: 50,
  },
  logo: {
    marginLeft: 110,
  },
  text: {
    paddingTop: 30,
    paddingBottom: 30,
    textAlign: 'center',

    color: 'white',
  },
  text1: {
    paddingBottom: 30,
    textAlign: 'center',
    // color: 'green',
    paddingRight: 10,
    paddingLeft: 10,
    color: 'white',
  },
  viewButton: {
    paddingLeft: 10,
    paddingRight: 10,
  },
  button: {
    padding: 10,

    backgroundColor: '#3D5CFF',
  },
});
