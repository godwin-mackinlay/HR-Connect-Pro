import {StyleSheet, View} from 'react-native';
import {List, Text, Checkbox, Button} from 'react-native-paper';

import React, {useLayoutEffect} from 'react';
import BackHeader from '../../components/Header/BackHeader';
import KeyboardView from '../../components/Container/KeyboardView';

const Filter = ({navigation}) => {
  const [checked, setChecked] = React.useState(false);
  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      header: () => <BackHeader navigation={navigation} title="FILTER" />,
    });
  }, [navigation]);
  return (
    <KeyboardView>
      <List.AccordionGroup expandedId={'1'}>
        <List.Accordion
          title="Job Type"
          id="1"
          style={styles.accordion}
          titleStyle={styles.title}>
          <Checkbox.Item
            label="Full Time"
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            color="#0050D1"
            labelStyle={styles.checkbox_label}
          />
          <Checkbox.Item
            label="Part Time"
            status="checked"
            color="#0050D1"
            labelStyle={styles.checkbox_label}
          />
          <Checkbox.Item
            label="Internship"
            status="checked"
            color="#0050D1"
            labelStyle={styles.checkbox_label}
          />
        </List.Accordion>
        <List.Accordion
          title="Job Categories"
          id="2"
          style={styles.accordion}
          titleStyle={styles.title}>
          <Checkbox.Item
            label="Design"
            status={checked ? 'checked' : 'unchecked'}
            onPress={() => {
              setChecked(!checked);
            }}
            color="#0050D1"
            labelStyle={styles.checkbox_label}
          />
          <Checkbox.Item
            label="Sales"
            status="checked"
            color="#0050D1"
            labelStyle={styles.checkbox_label}
          />
          <Checkbox.Item
            label="Marketing"
            status="checked"
            color="#0050D1"
            labelStyle={styles.checkbox_label}
          />
        </List.Accordion>
        <View>
          <List.Accordion
            title="Experience"
            id="3"
            style={styles.accordion}
            titleStyle={styles.title}>
            <Checkbox.Item
              label="Frasher"
              status="checked"
              color="#0050D1"
              labelStyle={styles.checkbox_label}
            />
            <Checkbox.Item
              label="1-2 yr"
              status="checked"
              color="#0050D1"
              labelStyle={styles.checkbox_label}
            />
          </List.Accordion>
        </View>
      </List.AccordionGroup>
    </KeyboardView>
  );
};

export default Filter;

const styles = StyleSheet.create({
  accordion: {
    borderWidth: 0.5,
    borderColor: '#000',
    paddingBottom: 0,
    paddingTop: 0,
    marginTop: 12,
    backgroundColor: '#fff',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
  },
  checkbox_label: {
    fontFamily: 'Poppins-Regular',
  },
});
