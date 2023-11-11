import React, {useEffect, useState} from 'react';
import {View, FlatList, TouchableWithoutFeedback, Image} from 'react-native';
import {Device} from '../../../../utils';
import useStyles from './styles';
import {FooterChapter, HeaderChapter} from './Components';
import FastImage from 'react-native-fast-image';
import {useRoute} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {ComicActions, DetailChapterType} from '../../../../redux';
import {getDataDetailChapter} from '../../../../redux/selectors/comic.selector';
import {TouchableHighlight} from 'react-native';
import {TouchableOpacity} from 'react-native';

const WIDTH = Device.getDeviceWidth();

interface RouteParamsIdChapter {
  chapter_number: number;
  comic_uuid: string;
  chapter_name: string;
}

const ChapterDetail = () => {
  const dispatch = useAppDispatch();
  const route = useRoute();
  const chapter_number = (route.params as RouteParamsIdChapter).chapter_number;
  const comic_uuid = (route.params as RouteParamsIdChapter).comic_uuid;
  const chapter_name = (route.params as RouteParamsIdChapter).chapter_name;

  const [currentChapter, setCurrentChapter] = useState(chapter_number);
  const [imageSizes, setImageSizes] = useState<{
    [key: number]: {width: number; height: number};
  }>({});
  const [forceReload, setForceReload] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  const dataDetailChapter = useAppSelector(getDataDetailChapter);

  useEffect(() => {
    dispatch(
      ComicActions.getListChapterDetail({
        chapter_number: currentChapter,
        comic_uuid: comic_uuid,
      }),
    );
  }, [currentChapter, comic_uuid]);

  useEffect(() => {
    // Get size of each image in the data
    if (dataDetailChapter && dataDetailChapter.length > 0) {
      const sizes: {[key: number]: {width: number; height: number}} = {};

      dataDetailChapter.forEach((item, index) => {
        Image.getSize(
          item.url,
          (width, height) => {
            sizes[index] = {width, height};
            setImageSizes({...sizes});
            setForceReload(prevForceReload => !prevForceReload);
          },
          error => {
            console.error('Error getting image size:', error);
          },
        );
      });
    }
  }, [dataDetailChapter]);

  const incrementChapter = () => {
    setCurrentChapter(currentChapter + 1);
  };

  const decrementChapter = () => {
    setCurrentChapter(currentChapter - 1);
  };

  const styles = useStyles();

  const toggleHeaderFooter = () => {
    setShowHeader(!showHeader);
    setShowFooter(!showFooter);
  };

  const renderHeader = () => {
    return (
      showHeader && (
        <HeaderChapter
          chapter_name={chapter_name}
          chapter_number={currentChapter}
        />
      )
    );
  };

  const renderFooter = () => {
    return (
      showFooter && (
        <FooterChapter
          incrementChapter={incrementChapter}
          decrementChapter={decrementChapter}
        />
      )
    );
  };

  const renderImageItem = ({
    item,
    index,
  }: {
    item: DetailChapterType;
    index: number;
  }) => {
    const imageSize = imageSizes[index] || {width: 0, height: 0};

    return (
      <TouchableWithoutFeedback onPress={toggleHeaderFooter}>
        <FastImage
          key={`${item.url}-${forceReload}`}
          source={{uri: item.url}}
          style={{
            width: WIDTH,
            aspectRatio:
              imageSize.width && imageSize.height
                ? imageSize.width / imageSize.height
                : 1,
          }}
          resizeMode={FastImage.resizeMode.cover}
        />
      </TouchableWithoutFeedback>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={dataDetailChapter}
        renderItem={({item, index}) => renderImageItem({item, index})}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item, index) => index.toString()}
      />

      {renderHeader()}
      {renderFooter()}
    </View>
  );
};

export default ChapterDetail;
