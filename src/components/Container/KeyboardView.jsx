import {
  Keyboard,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import React from 'react';

const KeyboardView = ({children, style}) => {
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={[styles.container, style]}>
        {children}
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingLeft: 12,
    paddingRight: 12,
    marginBottom: 55,
  },
});
