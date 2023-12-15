import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  Dimensions,
} from 'react-native';
import {Image} from '@rneui/themed';
import useStyles from './styles';
import {Device} from '../../../../../../utils';
import FastImage from 'react-native-fast-image';
import {TouchableOpacity} from 'react-native';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import {CarouselDataItem, carouselData, useBanner} from './hook/useBanner.hook';
import {Skeleton} from '@rneui/base';

const BannerComic = React.memo(() => {
  const styles = useStyles();

  const {
    activeIndex,
    flatlistRef,
    getItemLayout,
    handleScroll,
    screenWidth,
    isLoading,
    onLoadStart,
    onLoadEnd,
  } = useBanner();

  const renderItem = ({
    item,
    index,
  }: {
    item: CarouselDataItem;
    index: number;
  }) => {
    return (
      <TouchableOpacity
        style={{alignItems: 'center', justifyContent: 'center'}}
        activeOpacity={0.5}>
        <FastImage
          onLoadStart={onLoadStart}
          onLoadEnd={onLoadEnd}
          source={{uri: item.image}}
          style={{height: screenWidth * 0.5, width: screenWidth}}
        />
        {isLoading && (
          <Skeleton animation="wave" style={styles.skeletonStyle}></Skeleton>
        )}
        {isLoading && (
          <ActivityIndicator
            color={'#F89300'}
            size={'large'}
            style={{
              position: 'absolute',
            }}
          />
        )}
      </TouchableOpacity>
    );
  };

  return (
    <View>
      <FlatList
        data={carouselData}
        ref={flatlistRef}
        getItemLayout={getItemLayout}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onScroll={handleScroll}
      />
      <View style={styles.dotContainer}>
        {carouselData?.map((item, index) => {
          return (
            <Text
              key={item.id}
              style={activeIndex == index ? styles.dotActive : styles.dot}>
              ⬤
            </Text>
          );
        })}
      </View>
    </View>
  );
});

export default BannerComic;
