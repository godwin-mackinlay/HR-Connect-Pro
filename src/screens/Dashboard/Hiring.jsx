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
    });
  }, [navigation]);
  return (
    <KeyboardView>
      <View style={styles.viewContent}>
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
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#002B70',
    borderRadius: 20,
    marginTop: 16,
  },
  labelSmall: {
    fontSize: 13,
    fontFamily: 'Poppins-Bold',
    paddingTop: 20,
  },
  imageContainer: {
    marginTop: 12,
    marginBottom: 12,
  },
  image: {
    width: 80,
    height: 80,
  },
  inputText: {
    fontFamily: 'Poppins-Bold',
    fontSize: 50,
  },
  textDraw: {
    fontSize: 18,
    fontFamily: 'Poppins-Medium',
    paddingBottom: 12,
  },
  inputDes: {
    paddingTop: 12,
    padding: 6,
    fontFamily: 'Poppins-Bold',
    fontSize: 18,
    textDecorationLine: 'underline',
  },
  headLine: {
    fontSize: 15,
    color: '#000',
    paddingBottom: 12,
    fontFamily: 'Poppins-Regular',
  },
  inputReq: {
    fontFamily: 'Poppins-Regular',
    fontSize: 15,
    color: '#000',
    paddingBottom: 12,
    padding: 6,
  },
  int: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
});
