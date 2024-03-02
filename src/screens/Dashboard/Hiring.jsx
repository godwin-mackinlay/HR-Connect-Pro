import React from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';

function Hiring() {
  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      <View style={styles.viewContent}>
        <Text style={styles.labelSmall}>Read the caption</Text>

        <View style={styles.imageContainer}>
          <Image
            source={require('../../assets/images/Company_logo.png')}
            style={styles.image}
          />
        </View>

        <Text style={styles.inputText}>Hiring</Text>

        <Text style={styles.textDraw}>Interns | Developers</Text>

        <Text style={styles.textDr}>Apply Now</Text>
      </View>

      <Text style={styles.inputDes}>Description</Text>

      <View>
        <Text variant="headlineSmall" style={styles.headLine}>
          Exceptional with communication skills and team working skill.
        </Text>
        <Text variant="headlineSmall" style={styles.headLine}>
          Exceptional with communication skills and team working skill.
        </Text>
        <Text variant="headlineSmall" style={styles.headLine}>
          Exceptional with communication skills and team working skill.
        </Text>
      </View>
    </ScrollView>
  );
}
export default Hiring;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 30,
    backgroundColor: '#fff',
  },
  viewContent: {
    alignItems: 'flex-end',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 20,
  },
  labelSmall: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'right',
    paddingRight: 50,
    paddingTop: 50,
  },
  imageContainer: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  image: {
    width: 120,
    height: 100,
    marginRight: 40,
  },
  inputText: {
    fontWeight: '900',
    fontSize: 100,
    marginRight: 40,
  },
  textDraw: {
    fontSize: 18,
    fontWeight: '900',
    paddingRight: 80,
    paddingBottom: 30,
  },
  textDr: {
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'flex-start',
    paddingLeft: 30,
    paddingBottom: 20,
  },
  inputDes: {
    paddingTop: 20,
    paddingLeft: 10,
    fontWeight: '900',
    fontSize: 40,
  },
  headLine: {
    fontSize: 18,
    color: '#a9a9a9',
  },
});
