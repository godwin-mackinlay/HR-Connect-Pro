import {StyleSheet, View, TouchableOpacity, ScrollView} from 'react-native';
import {Avatar, Button, Card, Text, Chip} from 'react-native-paper';

import React, {useLayoutEffect} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import KeyboardView from '../../components/Container/KeyboardView';
import Jobs from '../../data/job.json';
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
      statusBarColor: '#0050D1',
      headerStyle: {
        backgroundColor: '#0050D1',
      },

      // eslint-disable-next-line react/no-unstable-nested-components
      headerRight: () => (
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Icon
              name="filter-outline"
              color={'#fff'}
              size={26}
              style={{marginRight: 18}}
            />
          </TouchableOpacity>
          <TouchableOpacity>
            <Icon name="search-outline" color={'#fff'} size={26} />
          </TouchableOpacity>
        </View>
      ),
    });
  }, [navigation]);

  return (
    <KeyboardView>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Best Matches for you</Text>
        <Text style={styles.body}>See All</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.container}>
          {Jobs.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.6}
              key={index}
              style={styles.view}
              // onPress={() => setCount(index)}
            >
              <Card style={{padding: 12, backgroundColor: '#FAC7C4'}}>
                <Avatar.Image
                  size={56}
                  source={require('../../assets/images/Company_logo.png')}
                  style={{marginBottom: 12}}
                />
                <Card.Content style={{height: 120}}>
                  <Text
                    variant="titleLarge"
                    style={{
                      width: '90%',
                      marginBottom: 8,
                      fontFamily: 'Inter-Medium',
                    }}>
                    {item.job_title}
                  </Text>
                  <Chip
                    style={{
                      width: 100,
                      marginBottom: 8,
                      fontFamily: 'Inter-Bold',
                    }}
                    onPress={() => console.log('Pressed')}>
                    {`\u25CF ${item.type}`}
                  </Chip>
                  <Text
                    style={{
                      marginLeft: 12,
                      fontSize: 16,
                      fontFamily: 'Inter-Regular',
                    }}>
                    {item.place}
                  </Text>
                </Card.Content>
              </Card>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </KeyboardView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 12,
    position: 'relative',
    bottom: 0,
  },
  view: {
    marginRight: 6,
    marginLeft: 6,
    borderRadius: 12,
  },
  textContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  title: {fontSize: 16, color: '#000', fontFamily: 'Inter-Medium'},
  body: {
    fontSize: 14,
    color: '#2A69E5',
    fontFamily: 'Inter-Regular',
    textDecorationLine: 'underline',
  },
});
