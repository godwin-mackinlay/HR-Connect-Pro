/* eslint-disable react-native/no-inline-styles */
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
        style={[
          {flex: 1, backgroundColor: '#fff', marginLeft: 12, marginRight: 12},
          style,
        ]}>
        {children}
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

export default KeyboardView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: theme.colors.background,
  },
});
