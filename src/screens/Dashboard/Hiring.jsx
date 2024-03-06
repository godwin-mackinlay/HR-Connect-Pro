import React, {useLayoutEffect} from 'react';
import {StyleSheet, View, Image, ScrollView} from 'react-native';
import {Text} from 'react-native-paper';
import KeyboardView from '../../components/Container/KeyboardView';
import BackHeader from '../../components/Header/BackHeader';

function Hiring({navigation, route}) {
  const {job} = route.params;

  useLayoutEffect(() => {
    navigation.setOptions({
      // eslint-disable-next-line react/no-unstable-nested-components
      header: () => (
        <BackHeader navigation={navigation} title="Back" textAlign="center" />
      ),
      statusBarColor: '#00296B',
    });
  }, [navigation]);
  return (
    <KeyboardView>
      <View style={styles.viewContent}>
        <Text style={styles.labelSmall}>Read the caption</Text>

        <View style={styles.imageContainer}>
          <Image source={{uri: job.image}} style={styles.image} />
        </View>

        <Text style={[styles.inputText, {marginTop: -10}]}>Hiring</Text>

        <Text style={styles.textDraw}>Interns | {job.job_title}</Text>
      </View>

      <Text style={styles.inputDes}>Description</Text>

      <View>
        <Text variant="headlineSmall" style={styles.headLine}>
          {job.description}
        </Text>
      </View>
      <Text style={styles.inputDes}>Skill Required</Text>
      <View style={styles.int}>
        {job.skills.map((skill, i) => (
          <Text variant="headlineSmall" style={styles.inputReq} key={i}>
            . {skill}
          </Text>
        ))}
      </View>
    </KeyboardView>
  );
}

export default Hiring;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  viewContent: {
    alignItems: 'flex-end',
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 20,
    marginTop: 16,
  },
  labelSmall: {
    fontSize: 13,
    fontWeight: 'bold',
    textAlign: 'right',
    paddingRight: 50,
    paddingTop: 20,
  },
  imageContainer: {
    alignItems: 'flex-end',
    marginTop: 30,
  },
  image: {
    width: 200,
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
    paddingBottom: 60,
  },
  inputDes: {
    paddingTop: 20,
    paddingBottom: 10,
    fontWeight: '900',
    fontSize: 30,
  },
  headLine: {
    fontSize: 18,
    color: '#a9a9a9',
    paddingBottom: 15,
  },
  inputReq: {
    fontSize: 18,
    color: '#a9a9a9',
    paddingBottom: 15,
    padding: 10,
  },
  int: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
