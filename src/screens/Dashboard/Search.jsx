import React from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {Text, Button} from 'react-native-paper';

function Search() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text variant="bodyLarge">People</Text>
        <Text variant="bodyLarge">View All</Text>
      </View>

      <View style={styles.inputImgContainer}>
        <Image
          source={require('../../assets/images/person.png')}
          style={styles.image}
        />
        <Text variant="titleMedium">Anand Shrivastav</Text>
      </View>
      <Text variant="titleLarge">
        .................................................................
      </Text>

      <View style={styles.inputImgContainer}>
        <Image
          source={require('../../assets/images/person.png')}
          style={styles.image}
        />
        <Text variant="titleMedium">Ajay Shrivastav</Text>
      </View>
      <Text variant="titleLarge">
        .................................................................
      </Text>

      <View style={styles.inputImgContainer}>
        <Image
          source={require('../../assets/images/person.png')}
          style={styles.image}
        />
        <Text variant="titleMedium">Anmol Shrivastav</Text>
      </View>
      <Text variant="titleLarge">
        .................................................................
      </Text>

      <View style={styles.bioHead}>
        <Text variant="bodyLarge">Bio</Text>
        <Text variant="bodyLarge">View All</Text>
      </View>

      <View style={styles.text}>
        <Text variant="labelMedium">
          Shri Rajesh Patel is a dedicated educator witha passion for fostering
          innova learning methods.
        </Text>
        <Text variant="titleLarge">
          .................................................................
        </Text>

        <Text variant="labelMedium">
          Shri Rajesh Patel is a dedicated educator witha passion for fostering
          innova learning methods.
        </Text>
        <Text variant="titleLarge">
          .................................................................
        </Text>

        <Text variant="labelMedium">
          Shri Rajesh Patel is a dedicated educator witha passion for fostering
          innova learning methods.
        </Text>
        <Text variant="titleLarge">
          .................................................................
        </Text>
      </View>

      <View style={styles.bioHead}>
        <Text variant="bodyLarge">Country</Text>
        <Text variant="bodyLarge">View All</Text>
      </View>

      <View style={styles.text}>
        <Text variant="labelMedium">
          In Shrilanka, attending a college in the local education system offers
          a rich diverse academic experience.
        </Text>
        <Text variant="titleLarge">
          .................................................................
        </Text>

        <Text variant="labelMedium">
          As an ardent volunteer in local conservation groups, Shriya strives to
          create positive impact on the environment and society, believing in
          the power of collective action for a better world.
        </Text>
        <Text variant="titleLarge">
          .................................................................
        </Text>

        <Text variant="labelMedium">
          I hold a Bachelor's degree in Computer Science from Shri Shankarcharya
          Group of Institution
        </Text>
        <Text variant="titleLarge">
          .................................................................
        </Text>
      </View>
    </ScrollView>
  );
}
export default Search;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // marginTop: 80,
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop :20,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'gray',
  },
  inputImgContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 17,
    // paddingBottom:10,
    // padding: 13,
  },
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 50,
  },
  bioHead: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
    paddingLeft: 20,
    paddingRight: 20,
    backgroundColor: 'gray',
  },
  text: {
    marginTop: 10,
    paddingLeft: 10,
    // paddingRight: 20,
  },
});
