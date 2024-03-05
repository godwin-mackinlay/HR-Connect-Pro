import {StyleSheet, Text, View} from 'react-native';
import React, {useLayoutEffect} from 'react';
import Timeline from 'react-native-timeline-flatlist';
import Icon from 'react-native-vector-icons/Ionicons';
import KeyboardView from '../../components/Container/KeyboardView';
import BackHeader from '../../components/Header/BackHeader';

const Status = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      header: () => <BackHeader navigation={navigation} title="My Status" />,
      statusBarColor: '#0050D1',
    });
  }, [navigation]);
  const timeLineData = [
    {
      title: 'Applied',
      description: 'Jan 21',
      icon: require('../../assets/images/success.png'),
    },
    {title: 'Application Sent', description: 'Jan 21'},
    {title: 'Application Viewed', description: 'Jan 21'},
    {title: 'Resume Viewed', description: 'Jan 21'},
    {title: 'Awaiting recruiter action', description: 'Jan 21'},
  ];
  return (
    <View style={{flex: 1, margin: 22}}>
      <Timeline
        data={timeLineData}
        circleColor="green"
        lineColor="green"
        innerCircle="icon"
        iconStyle={{width: 12, height: 16}}
        titleStyle={{color: '#000'}}
        descriptionStyle={{color: '#000'}}
      />
    </View>
  );
};

export default Status;

const styles = StyleSheet.create({});
