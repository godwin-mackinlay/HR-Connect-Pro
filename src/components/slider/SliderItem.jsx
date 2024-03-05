import {
  Image,
  StyleSheet,
  Text,
  View,
  Dimensions,
  Animated,
  Easing,
} from 'react-native';
import React from 'react';

const {width, height} = Dimensions.get('screen');

const SlideItem = ({item}) => {
  const translateYImage = new Animated.Value(0);

  Animated.timing(translateYImage, {
    toValue: 0,
    duration: 500,
    useNativeDriver: true,
    easing: Easing.bounce,
  }).start();

  return (
    <View style={styles.container}>
      <Animated.Image
        source={item.img}
        resizeMode="contain"
        style={[
          styles.image,
          {
            transform: [
              {
                translateY: translateYImage,
              },
            ],
          },
        ]}
      />

      <View style={styles.content}>
        <Text style={styles.title}>{item.title}</Text>
      </View>
    </View>
  );
};

export default SlideItem;

const styles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
    backgroundColor: '#FFF',
  },
  image: {
    flex: 0.6,
    width: '100%',
  },

  title: {
    fontSize: 35,
    // fontWeight: '300',
    color: '#333',
    textAlign: 'center',
    marginLeft: 12,
    marginRight: 12,
    fontFamily: 'Urbanist-Medium',
    marginTop: 20,
  },
});
