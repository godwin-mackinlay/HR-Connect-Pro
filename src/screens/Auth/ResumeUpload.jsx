import React from 'react';
import {StyleSheet, View, Image, TouchableOpacity, Alert} from 'react-native';
import {Text, Button} from 'react-native-paper';

function ResumeUpload({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} variant="bodyMedium">
        Upload resume to apply for the job
      </Text>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => Alert.alert('upload file')}>
        <Image source={require('../../assets/images/upload_btn.png')} />
      </TouchableOpacity>

      <Text style={styles.inputText} variant="bodyMedium">
        .................................. Or ..................................
      </Text>

      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          icon="google-drive"
          mode="contained"
          onPress={() => navigation.navigate('SuccessModal')}>
          Google Drive
        </Button>

        <Button
          style={styles.button}
          icon="dropbox"
          mode="contained"
          onPress={() => navigation.navigate('Hiring')}>
          Dropbox
        </Button>
      </View>
    </View>
  );
}

export default ResumeUpload;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    paddingBottom: 30,
  },
  inputText: {
    paddingTop: 20,
  },
  buttonContainer: {
    flexDirection: 'row',
    paddingTop: 30,
  },
  button: {
    marginHorizontal: 10,
    padding: 10,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'blue',
  },
});
