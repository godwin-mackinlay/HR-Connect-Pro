import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Avatar, Card, Text} from 'react-native-paper';

const MatchCard = ({navigation, job}) => {
  return (
    <Card
      style={styles.card}
      onPress={() => navigation.navigate('Hiring', {job: job})}>
      <Avatar.Image
        size={56}
        source={{uri: job.image}}
        style={styles.cardImage}
      />
      <Card.Content style={styles.content}>
        <Text variant="titleLarge" style={styles.cardTitle}>
          {job.job_title}
        </Text>
        <Text style={styles.chip} onPress={() => console.log('Pressed')}>
          {job.type}
        </Text>
        <Text style={styles.place}>{job.place}</Text>
      </Card.Content>
    </Card>
  );
};

export default MatchCard;

const styles = StyleSheet.create({
  card: {
    padding: 12,
    backgroundColor: '#00296B',
    marginLeft: 6,
    marginRight: 6,
  },
  content: {
    height: 120,
    width: 200,
  },
  cardImage: {
    marginBottom: 12,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
  cardTitle: {
    width: '100%',
    marginBottom: 8,
    fontFamily: 'Inter-Medium',
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    flex: 0.8,
    flexWrap: 'wrap',
  },
  chip: {
    marginBottom: 8,
    fontFamily: 'Inter-Bold',
    marginLeft: 'auto',
    marginRight: 'auto',
    backgroundColor: '#fff',
    padding: 3,
    borderRadius: 6,
    fontSize: 12,
  },
  place: {
    marginLeft: 12,
    fontSize: 16,
    fontFamily: 'Inter-Regular',
    color: '#fff',
    textAlign: 'center',
  },
});
