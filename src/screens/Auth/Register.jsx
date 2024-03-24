import {Alert, Keyboard, StyleSheet, View} from 'react-native';
import {Text, TextInput, Button} from 'react-native-paper';
import React, {useCallback, useLayoutEffect, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import {SelectList} from 'react-native-dropdown-select-list';
import DocumentPicker, {types} from 'react-native-document-picker';
import BackHeader from '../../components/Header/BackHeader';
import KeyboardView from '../../components/Container/TabView';
import FormView from '../../components/Container/FormView';
import {useFormik} from 'formik';

const Register = ({navigation}) => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [hide, setHide] = useState(true);
  const [selected, setSelected] = useState('');
  const [role, setRole] = useState('');
  const [fileResponse, setFileResponse] = useState([]);

  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
      mobile: '',
      dob: new Date(),
      role: '',
      address: '',
      country: '',
      state: '',
      resumeUrl: '',
    },
    // validationSchema: loginValidate,
    onSubmit: async data => {
      console.log('registerForm', data);
      navigation.navigate('Education', {registerForm: data});
    },
  });

  const handleDocumentSelection = useCallback(async () => {
    try {
      const response = await DocumentPicker.pick({
        type: [types.pdf],
        presentationStyle: 'fullScreen',
      });
      setFileResponse(response);
    } catch (err) {
      console.log(err);
    }
  }, []);

  const data = [
    {key: '1', value: 'India'},
    {key: '2', value: 'USA'},
    {key: '3', value: 'UK'},
    {key: '4', value: 'Russia'},
    {key: '5', value: 'Mexico'},
    {key: '6', value: 'Germany'},
    {key: '7', value: 'Denmark'},
  ];

  const roleData = [
    {key: '1', value: 'User'},
    {key: '2', value: 'Admin'},
    {key: '3', value: 'Employee'},
    {key: '4', value: 'Company'},
  ];

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.warn('A date has been picked: ', date);
    hideDatePicker();
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      header: () => <BackHeader navigation={navigation} title="Back" />,
      statusBarColor: '#0050D1',
    });
  }, [navigation]);

  return (
    <FormView>
      <View style={styles.section}>
        <Text style={styles.headerText}>Create Account</Text>
        <TextInput
          label="Username"
          value={formik.values.username}
          onChangeText={formik.handleChange('username')}
          onBlur={formik.handleBlur('username')}
          mode="outlined"
          outlineStyle={styles.input}
          style={styles.bodyInput}
        />
        <TextInput
          label="Email"
          value={formik.values.email}
          onChangeText={formik.handleChange('email')}
          onBlur={formik.handleBlur('email')}
          mode="outlined"
          outlineStyle={styles.input}
          style={styles.bodyInput}
        />
        <TextInput
          label="Password"
          value={formik.values.password}
          onChangeText={formik.handleChange('password')}
          onBlur={formik.handleBlur('password')}
          mode="outlined"
          secureTextEntry={hide ? true : false}
          outlineStyle={styles.input}
          style={styles.bodyInput}
          right={
            <TextInput.Icon
              onPress={() => {
                Keyboard.dismiss();
                setHide(!hide);
              }}
              icon={hide ? 'eye-off' : 'eye'}
              size={20}
              style={styles.inputIcon}
              color={'#2358FB'}
            />
          }
        />
        <TextInput
          label="Mobile"
          value={formik.values.mobile}
          onChangeText={formik.handleChange('mobile')}
          onBlur={formik.handleBlur('mobile')}
          mode="outlined"
          keyboardType="number-pad"
          outlineStyle={styles.input}
          style={styles.bodyInput}
        />
        <Button
          icon={'calendar-outline'}
          title="Show Date Picker"
          onPress={showDatePicker}
          labelStyle={{marginRight: 'auto'}}
          style={{
            borderWidth: 1,
            borderColor: '#B7AFA4',
            backgroundColor: '#fff',
            height: 45,
            marginLeft: 12,
            marginRight: 12,
            marginBottom: 12,
            borderRadius: 30,
          }}>
          <Text>Date of Birth</Text>
        </Button>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          date={formik.values.dob}
          onChange={formik.handleChange('dob')}
          onConfirm={formik.handleChange('dob')}
          onCancel={hideDatePicker}
        />
        <SelectList
          placeholder="Role"
          inputStyles={{color: '#000'}}
          dropdownTextStyles={{color: '#000'}}
          search={false}
          fontFamily="Poppins-Regular"
          boxStyles={[styles.input, {marginBottom: 12}]}
          setSelected={formik.handleChange('role')}
          data={roleData}
          save="value"
        />
        <TextInput
          error={formik.errors.address && true}
          label="Address"
          value={formik.values.address}
          onChangeText={formik.handleChange('address')}
          onBlur={formik.handleBlur('address')}
          mode="outlined"
          outlineStyle={styles.input}
          style={styles.bodyInput}
        />
        <SelectList
          placeholder="Country"
          inputStyles={{color: '#000'}}
          dropdownTextStyles={{color: '#000'}}
          search={true}
          fontFamily="Poppins-Regular"
          boxStyles={[styles.input, {marginBottom: 12}]}
          setSelected={formik.handleChange('country')}
          data={data}
          save="value"
        />
        <TextInput
          error={formik.errors.state && true}
          label="State"
          value={formik.values.state}
          onChangeText={formik.handleChange('state')}
          onBlur={formik.handleBlur('state')}
          mode="outlined"
          outlineStyle={styles.input}
          style={styles.bodyInput}
        />
        <Button
          icon="folder-outline"
          mode="contained"
          style={[
            styles.Resume,
            {backgroundColor: fileResponse.length > 0 ? 'green' : 'black'},
          ]}
          onPress={() => handleDocumentSelection()}>
          {fileResponse.length > 0
            ? 'Upload Successfully!!!'
            : ' Upload Resume'}
        </Button>
        {fileResponse.map((file, index) => (
          <Text
            key={index.toString()}
            style={styles.uri}
            numberOfLines={1}
            ellipsizeMode={'middle'}>
            {file?.uri}
          </Text>
        ))}
        <Button
          mode="contained"
          style={styles.button}
          onPress={formik.handleSubmit}>
          Next
        </Button>
      </View>
    </FormView>
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
    fontFamily: 'Poppins-Regular',
    color: '#000',
  },
  bodyInput: {
    paddingStart: 12,
    marginBottom: 12,
    height: 45,
    fontSize: 14,
    backgroundColor: '#fff',
    fontFamily: 'Poppins-Regular',
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
    padding: 4,
    borderRadius: 30,
    marginBottom: 12,
  },
  Resume: {
    marginTop: 12,
    marginLeft: 15,
    width: 'auto',
    marginRight: 'auto',
    backgroundColor: '#2F2F42',
    marginBottom: 15,
  },
});
