import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text, Divider, Button, Icon} from 'react-native-paper';
import KeyboardView from '../../components/Container/KeyboardView';

const ChatSplash = ({navigation}) => {
  return (
    <KeyboardView>
      <View style={styles.container}>
        <Text variant="titleLarge" style={styles.viewTitle}>
          Your AI Assistant
        </Text>
        <Text variant="titleLarge" style={styles.viewTitle1}>
          Using this software, you can ask your questions and receive articles
          using an artificial intelligence assistant
        </Text>
        <Image
          source={require('../../assets/images/chatImg.png')}
          style={styles.viewImage}
        />
        <View style={styles.ViewButton}>
          <Button
            mode="contained"
            onPress={() => navigation.navigate('ChatBot')}
            style={styles.ViewButton1}
            labelStyle={styles.buttonText}>
            Continue
          </Button>
        </View>
      </View>
    </KeyboardView>
  );
};

export default ChatSplash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
  },
  viewTitle: {
    fontWeight: '700',
    color: '#757575',
    fontSize: 30,
    textAlign: 'center',
  },
  viewTitle1: {
    marginTop: 20,
    fontSize: 18,
    paddingRight: 20,
    paddingLeft: 20,
    color: '#757575',
    textAlign: 'center',
  },
  viewImage: {
    marginTop: 12,
  },
  ViewButton: {
    marginTop: 20,
    width: '90%',
  },
  ViewButton1: {
    padding: 6,
    backgroundColor: '#00296B',
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
