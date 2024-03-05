import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text, Divider, Button, Card} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const JobCard = ({job, navigation}) => {
  return (
    <View style={styles.container}>
      <Card
        style={styles.line}
        onPress={() => navigation.navigate('Hiring', {job: job})}>
        <View style={styles.inputContainer}>
          <Image source={{uri: job.image}} style={styles.imageview} />
          <View style={styles.textView}>
            <Text variant="titleLarge" style={styles.textView1}>
              {job.job_title}
            </Text>
            <View style={styles.iconContainer}>
              <FontAwesome5 name="money-bill-alt" size={15} color="green" />
              <Text variant="bodyLarge" style={styles.textView2}>
                30K<Text style={styles.redText}>/Month</Text>
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.hour}>
          <Text style={styles.text}>12 hour ago</Text>
        </View>
        <Divider />
        <View style={styles.locationContainer}>
          <FontAwesome5 name="map-marker-alt" size={20} color="#000" />
          <Text style={styles.locationText}>{job.place}</Text>
          <FontAwesome5 name="user" size={20} color="#000" />
          <Text style={styles.locationText}>Fresher</Text>
          <FontAwesome5 name="tint" size={20} color="#000" />
          <Text style={styles.locationText}>Full Time</Text>
        </View>
      </Card>
      <View style={styles.Button}>
        <Button mode="" style={styles.Button1} elevation={8}>
          Save For Later
        </Button>
        <Button mode="contained" style={styles.Button2}>
          Apply
        </Button>
      </View>
    </View>
  );
};

export default JobCard;

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
  },
  line: {
    borderWidth: 1,
    borderColor: '#8E8A8A',
    marginLeft: 4,
    marginRight: 4,
    paddingTop: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 0,
    borderTopEndRadius: 40,
    height: 180,
  },
  inputContainer: {
    flexDirection: 'row',
  },
  imageview: {
    width: 70,
    height: 70,
  },
  textView: {
    paddingLeft: 10,
  },
  textView1: {
    paddingBottom: 10,
    paddingTop: 7,
  },
  iconContainer: {
    flexDirection: 'row',
    paddingTop: 7,
  },
  textView2: {
    paddingLeft: 7,
    marginTop: -4,
  },
  redText: {
    color: '#dcdcdc',
    fontSize: 13,
  },
  hour: {
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  text: {
    color: '#dcdcdc',
    paddingBottom: 10,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    justifyContent: 'center',
    marginLeft: 20,
  },
  locationText: {
    paddingRight: 25,
    marginLeft: 8,
    fontSize: 16,
  },
  Button: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: -16,
  },
  Button1: {
    backgroundColor: 'white',
  },
  Button2: {
    borderRadius: 1,
    borderBottomEndRadius: 15,
    borderBottomStartRadius: 15,
    backgroundColor: '#0050D1',
    marginRight: 0,
    color: 'white',
  },
});
