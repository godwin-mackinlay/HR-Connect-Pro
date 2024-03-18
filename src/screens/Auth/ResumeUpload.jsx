import React, {useState} from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {
  Text,
  Divider,
  Button,
  Icon,
  Searchbar,
  TextInput,
  RadioButton,
} from 'react-native-paper';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Education = () => {
  const [text, setText] = React.useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
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
  const [value, setValue] = React.useState('first');
  // const [value, setValue] = useState('first');

  return (
    <View style={styles.container}>
      <TextInput
        label={<Text style={styles.label}>Education</Text>}
        mode="outlined"
        style={styles.bodyInput}
        outlineStyle={{borderRadius: 30}}
      />
      <View style={styles.body}>
        <Text style={styles.TextInput}>
          Start Date <Text style={styles.TextInput1}>*</Text>
        </Text>
        <Text style={styles.TextInput2}>
          End Date <Text style={styles.TextInput1}>*</Text>
        </Text>
      </View>
      <View style={styles.date}>
        <Button title="Show Date Picker" onPress={showDatePicker}>
          {' '}
          <Text style={styles.calanderText}> eg. march2024 </Text>
          <FontAwesome5 name="calendar-alt" size={20} color="#000" />
        </Button>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />

        <Button title="Show Date Picker" onPress={showDatePicker}>
          {' '}
          <Text style={styles.calanderText}> eg. march2024 </Text>
          <FontAwesome5 name="calendar-alt" size={20} color="#000" />
        </Button>
        <DateTimePickerModal
          isVisible={isDatePickerVisible}
          mode="date"
          onConfirm={handleConfirm}
          onCancel={hideDatePicker}
        />
      </View>
      <View style={styles.divider}>
        <View style={styles.div}>
          <Divider />
        </View>
        <View style={styles.div1}>
          <Divider />
        </View>
      </View>
      <Text style={styles.EducationText}>
        Education Type <Text style={styles.TextInput1}>*</Text>
      </Text>

      <RadioButton.Group
        onValueChange={newValue => setValue(newValue)}
        value={value}>
        <View style={styles.radioButtonContainer}>
          <View style={styles.radioButtonOption}>
            <RadioButton value="first" color="red" uncheckedColor="red" />
            <Text>Full Time</Text>
          </View>
          <View style={styles.radioButtonOption}>
            <RadioButton value="secound" color="red" uncheckedColor="red" />
            <Text>Part Time</Text>
          </View>
          <View style={styles.radioButtonOption}>
            <RadioButton value="third" color="red" uncheckedColor="red" />
            <Text>Correspondence</Text>
          </View>
        </View>
      </RadioButton.Group>
      <Text variant="titleMedium" style={styles.titleMedium}>
        Do you have any gap in education?
      </Text>
      <RadioButton.Group
        onValueChange={newValue => setValue(newValue)}
        value={value}>
        <View style={styles.radioButtonContainer1}>
          <View style={styles.radioButtonOption}>
            <RadioButton value="four" color="red" uncheckedColor="red" />
            <Text>Yes</Text>
          </View>
          <View style={styles.radioButtonOption1}>
            <RadioButton value="five" color="red" uncheckedColor="red" />
            <Text>No</Text>
          </View>
        </View>
      </RadioButton.Group>
      <View style={styles.single}>
        <Text variant="titleLarge" style={styles.bodyLarge}>
          If Yes, add single line detail
        </Text>
        <Divider style={styles.divi} />
      </View>
      <TextInput
        label={
          <Text style={styles.label}>
            College/University<Text style={styles.TextInput1}>*</Text>
          </Text>
        }
        mode="outlined"
        style={styles.bodyInput}
        outlineStyle={{borderRadius: 30}}
      />
      <TextInput
        label={
          <Text style={styles.label}>
            Percentage/CGPA<Text style={styles.TextInput1}>*</Text>
          </Text>
        }
        mode="outlined"
        style={styles.bodyInput}
        outlineStyle={{borderRadius: 30}}
      />
      <TextInput
        label={
          <Text style={styles.label}>
            Branch/Specialization<Text style={styles.TextInput1}>*</Text>
          </Text>
        }
        mode="outlined"
        style={styles.bodyInput}
        outlineStyle={{borderRadius: 30}}
      />
      <Button mode="contained" style={styles.viewButton1}>
        <Text style={styles.buttonText}>Save and Countinue</Text>
      </Button>
    </View>
  );
};

export default Education;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
  },
  bodyInput: {
    borderRadius: 50,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 25,
    fontSize: 18,
    backgroundColor: '#fff',
  },
  body: {
    flexDirection: 'row',
    paddingLeft: 10,
  },
  TextInput: {
    // borderRadius :1,
    borderRadius: 50,
    marginLeft: 10,
    fontSize: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 10,
  },
  TextInput2: {
    borderRadius: 50,
    marginLeft: 70,
    fontSize: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 10,
  },
  TextInput1: {
    color: 'red',
  },
  date: {
    flexDirection: 'row',
    marginTop: 5,
  },
  calanderText: {
    color: 'gray',
  },
  divider: {
    flexDirection: 'row',
  },
  div: {
    paddingLeft: 30,
    width: 150,
  },
  div1: {
    paddingLeft: 50,
    width: 220,
  },
  EducationText: {
    width: 140,
    borderRadius: 50,
    marginLeft: 15,
    fontSize: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    padding: 10,
    marginTop: 15,
  },
  radioButtonContainer: {
    marginTop: 15,
    flexDirection: 'row',
    marginLeft: 10,
    justifyContent: 'space-between',
    marginRight: 27,
  },
  radioButtonOption: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleMedium: {
    paddingLeft: 15,
    paddingTop: 13,
  },
  radioButtonContainer1: {
    marginTop: 15,
    flexDirection: 'row',
    marginLeft: 10,
  },
  radioButtonOption1: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 40,
  },
  single: {
    paddingTop: 15,
    paddingLeft: 15,
  },
  bodyLarge: {
    color: 'gray',
    fontSize: 20,
  },
  divi: {
    // paddingTop:10
    marginTop: 10,
    marginLeft: 5,
    marginRight: 10,
    marginBottom: 40,
  },
  label: {
    color: 'gray',
  },
  viewButton1: {
    borderRadius: 50,
    marginLeft: 15,
    marginRight: 20,
    backgroundColor: 'blue',
    marginTop: 20,
    marginBottom: 25,
  },
  buttonText: {
    fontSize: 20,
    paddingTop: 5,
    paddingBottom: 5,
    color: 'white',
  },
});
