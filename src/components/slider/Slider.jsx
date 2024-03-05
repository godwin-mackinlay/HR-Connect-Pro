import {
  Animated,
  FlatList,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import React, {useRef, useState} from 'react';
import SlideItem from './SliderItem';
import Pagination from './Pagination';
import {useNavigation} from '@react-navigation/native';

const slideData = [
  {
    id: 1,
    img: require('../../assets/images/Company_logo.png'),
    title: 'React is a javascript library',
  },
  {
    id: 2,
    img: require('../../assets/images/apple.png'),
    title: 'Angular is a javascript framework',
  },
];
const Slider = () => {
  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const scrollX = useRef(new Animated.Value(0)).current;
  const flatListRef = useRef(null);

  const handleOnScroll = event => {
    Animated.event(
      [
        {
          nativeEvent: {
            contentOffset: {
              x: scrollX,
            },
          },
        },
      ],
      {
        useNativeDriver: false,
      },
    )(event);
  };

  const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
    // console.log('viewableItems', viewableItems);
    setIndex(viewableItems[0].index);
  }).current;

  const handleNextButton = () => {
    const nextIndex = index + 1;
    // Scroll to the next slide
    if (flatListRef.current && nextIndex < slideData.length) {
      flatListRef.current.scrollToIndex({index: nextIndex});
    } else if (index === 1) {
      // navigation.navigate('Dashboard')
      navigation.navigate('SignUp');
    }
  };

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={slideData}
        renderItem={({item}) => <SlideItem item={item} />}
        horizontal
        pagingEnabled
        snapToAlignment="center"
        showsHorizontalScrollIndicator={false}
        onScroll={handleOnScroll}
        onViewableItemsChanged={handleOnViewableItemsChanged}
        viewabilityConfig={viewabilityConfig}
      />
      <Pagination data={slideData} scrollX={scrollX} index={index} />
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={handleNextButton}>
        <Text style={styles.buttonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Slider;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonContainer: {
    borderRadius: 12,
    backgroundColor: '#0050D1',
    marginLeft: 16,
    marginRight: 16,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    lineHeight: 50,
    fontSize: 20,
    fontWeight: '400',
  },
});
