import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import {Avatar, Button, Card, Text, Chip} from 'react-native-paper';
import React, {useLayoutEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import KeyboardView from '../../components/Container/KeyboardView';
import Jobs from '../../data/job.json';
import JobCard from '../../components/Card/JobCard';
import HorizontalList from '../../components/List/HorizontalList';
import MatchCard from '../../components/Card/MatchCard';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = ({navigation}) => {
  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      headerTitle: () => (
        <Text
          style={{
            fontSize: 20,
            color: '#fff',
            fontFamily: 'Inter-Bold',
            paddingBottom: 22,
            paddingTop: 22,
          }}>
          Dashboard
        </Text>
      ),
      statusBarColor: '#00296B',
      headerStyle: {
        backgroundColor: '#00296B',
      },

      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity
            onPress={async () => AsyncStorage.removeItem('my-email')}>
            <Icon
              name="filter-outline"
              color={'#fff'}
              size={26}
              style={{marginRight: 18}}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('Search')}>
            <Icon name="search-outline" color={'#fff'} size={26} />
          </TouchableOpacity>
        </View>
      ),
      headerLeft: () => null,
    });
  }, [navigation]);

  return (
    <KeyboardView>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Best Matches for you</Text>
        <Text style={styles.body}>See All</Text>
      </View>
      <HorizontalList>
        {Jobs.map((item, index) => (
          <MatchCard job={item} key={index} navigation={navigation} />
        ))}
      </HorizontalList>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Recommended Jobs</Text>
        <Text style={styles.body}>See All</Text>
      </View>
      {Jobs.map((item, index) => (
        <JobCard key={index} job={item} navigation={navigation} />
      ))}
    </KeyboardView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 0,
    position: 'relative',
    bottom: 0,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    marginBottom: 12,
  },
  title: {fontSize: 16, color: '#000', fontFamily: 'Inter-Medium'},
  body: {
    fontSize: 14,
    color: '#2A69E5',
    fontFamily: 'Inter-Regular',
    textDecorationLine: 'underline',
  },
});
