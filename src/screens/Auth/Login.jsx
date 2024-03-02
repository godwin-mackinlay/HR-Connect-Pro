import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {Text, TextInput, Button} from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';

const Login = ({navigation}) => {
  const [hide, setHide] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.section}>
        <Image
          source={require('../../assets/images/logo.png')}
          style={styles.logo}
        />
      </View>
      <Text style={styles.headerText}>Login</Text>
      <TextInput
        label={<Text>Email</Text>}
        mode="outlined"
        outlineStyle={styles.input}
        style={styles.bodyInput}
        right={
          <TextInput.Icon
            icon={() => (
              <Icon name="checkmark-outline" color={'#2358FB'} size={26} />
            )}
            size={26}
            style={styles.inputIcon}
            color={'#2358FB'}
          />
        }
      />
      <TextInput
        label={<Text>Password</Text>}
        mode="outlined"
        secureTextEntry={hide ? true : false}
        outlineStyle={styles.input}
        style={styles.bodyInput}
        right={
          <TextInput.Icon
            onPress={() => setHide(!hide)}
            icon={hide ? 'eye-off' : 'eye'}
            size={20}
            style={styles.inputIcon}
            color={'#2358FB'}
          />
        }
      />
      <Text style={styles.forgot}>Forgot Password?</Text>
      <Button mode="contained" style={styles.button}>
        Login
      </Button>
      <View style={styles.footer}>
        <Text style={styles.footer_inner}>Create a new account ?</Text>
        <Text
          style={styles.footer_btn}
          onPress={() => navigation.navigate('Register')}>
          Sign Up
        </Text>
      </View>
      <Text style={styles.conditonText}>OR</Text>
      <View style={styles.social}>
        <TouchableOpacity style={styles.socialBtn}>
          <Image source={require('../../assets/images/google.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <Image source={require('../../assets/images/facebook.png')} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.socialBtn}>
          <Image source={require('../../assets/images/apple.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  section: {
    padding: 30,
  },
  logo: {
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  headerText: {
    fontSize: 42,
    textAlign: 'center',
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
    marginTop: 15,
    marginBottom: 15,
    height: 51,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  inputIcon: {
    marginLeft: -16,
  },
  button: {
    marginLeft: 12,
    marginRight: 12,
    backgroundColor: '#2358FB',
  },
  forgot: {
    marginLeft: 'auto',
    marginRight: 12,
    marginBottom: 12,
    color: '#2358FB',
    fontSize: 15,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 26,
  },
  footer_inner: {
    color: '#000',
    fontSize: 15,
  },
  footer_btn: {
    color: '#2358FB',
    marginLeft: 6,
    fontSize: 15,
  },
  conditonText: {
    textAlign: 'center',
    color: '#000',
    marginTop: 26,
  },
  social: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 26,
  },
  socialBtn: {
    borderWidth: 1,
    borderColor: '#000',
    paddingTop: 8,
    paddingLeft: 8,
    paddingRight: 8,
  },
});
