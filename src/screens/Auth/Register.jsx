import {Alert, StyleSheet, View} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';
import React, {useLayoutEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import BackHeader from '../../components/Header/BackHeader';
import KeyboardView from '../../components/Container/KeyboardView';

const Register = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      header: () => <BackHeader navigation={navigation} title="Back" />,
      statusBarColor: '#0050D1',
    });
  }, [navigation]);

  return (
    <KeyboardView>
      <View style={styles.section}>
        <Text style={styles.headerText}>Create Account</Text>
        <TextInput
          label={<Text>Name</Text>}
          mode="outlined"
          outlineStyle={styles.input}
          style={styles.bodyInput}
        />
        <TextInput
          label={<Text>Email</Text>}
          mode="outlined"
          outlineStyle={styles.input}
          style={styles.bodyInput}
        />
        <TextInput
          label={<Text>Mobile</Text>}
          mode="outlined"
          keyboardType="number-pad"
          outlineStyle={styles.input}
          style={styles.bodyInput}
        />
        <TextInput
          label={<Text>Role</Text>}
          mode="outlined"
          outlineStyle={styles.input}
          style={styles.bodyInput}
        />
        <TextInput
          label={<Text>Education</Text>}
          mode="outlined"
          outlineStyle={styles.input}
          style={styles.bodyInput}
        />
        <TextInput
          label={<Text>Percentage</Text>}
          mode="outlined"
          keyboardType="numeric"
          outlineStyle={styles.input}
          style={styles.bodyInput}
        />
        <TextInput
          label={<Text>Date of Birth</Text>}
          mode="outlined"
          outlineStyle={styles.input}
          style={styles.bodyInput}
        />
        <Button
          mode="contained"
          style={styles.Resume}
          onPress={() => Alert.alert('cv upload')}>
          Upload Resume
        </Button>
        <Button
          mode="contained"
          style={styles.button}
          onPress={() => navigation.navigate('ResumeUpload')}>
          Next
        </Button>
      </View>
    </KeyboardView>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    padding: 0,
  },
  headerText: {
    fontSize: 36,
    padding: 15,
    fontFamily: 'Poppins-Medium',
  },
  input: {
    borderRadius: 30,
    marginLeft: 12,
    marginRight: 12,
    borderColor: '#B7AFA4',
    borderWidth: 1,
  },
  bodyInput: {
    paddingStart: 12,
    marginBottom: 12,
    height: 51,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  buttonOutline: {
    marginRight: 'auto',
    flex: 1,
    justifyContent: 'center',
  },
  buttonText: {
    fontSize: 21,
  },
  button: {
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: '#0050D1',
    marginBottom: 15,
  },
  Resume: {
    marginLeft: 15,
    width: 'auto',
    marginRight: 'auto',
    backgroundColor: '#2F2F42',
    marginBottom: 15,
  },
});
