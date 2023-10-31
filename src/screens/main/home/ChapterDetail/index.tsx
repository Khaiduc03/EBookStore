import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  TouchableOpacity,
  FlatList,
  Image,
  TouchableWithoutFeedback,
  TouchableHighlight,
} from 'react-native';
import {Device} from '../../../../utils';
import useStyles from './styles';
import {FooterChapter, HeaderChapter} from './Components';
import {SafeAreaView} from 'react-native-safe-area-context';
import FastImage from 'react-native-fast-image';
import {useRoute} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {ComicActions, DetailChapterType} from '../../../../redux';
import {getDataDetailChapter} from '../../../../redux/selectors/comic.selector';

const WIDTH = Device.getDeviceWidth();
interface RouteParamsIdChapter {
  chapter_number: number;
  comic_uuid: string;
}

const ChapterDetail = () => {
  const dispath = useAppDispatch();
  const route = useRoute();
  const chapter_number = (route.params as RouteParamsIdChapter).chapter_number;
  const comic_uuid = (route.params as RouteParamsIdChapter).comic_uuid;

  const dataDetailChapter = useAppSelector(getDataDetailChapter);
  console.log('data', dataDetailChapter);

  useEffect(() => {
    dispath(
      ComicActions.getListChapterDetail({
        chapter_number: chapter_number,
        comic_uuid: comic_uuid,
      }),
    );
  }, [chapter_number, comic_uuid]);

  const styles = useStyles();
  const [showHeader, setShowHeader] = useState(true);
  const [showFooter, setShowFooter] = useState(true);

  const toggleHeaderFooter = () => {
    setShowHeader(!showHeader);
    setShowFooter(!showFooter);
  };

  const renderHeader = () => {
    if (showHeader) {
      return <HeaderChapter chapter_number={chapter_number} />;
    } else {
      return null;
    }
  };
  const renderFooter = () => {
    if (showFooter) {
      return <FooterChapter />;
    } else {
      return null;
    }
  };

  const renderItem = ({item}: {item: DetailChapterType}) => {
    return (
      <FastImage
        style={styles.imageStyle}
        resizeMode={FastImage.resizeMode.cover}
        source={{uri: item.url}}
      />
    );
  };

  return (
    <View style={styles.container}>
      <TouchableHighlight onPress={toggleHeaderFooter} activeOpacity={1}>
        <FlatList
          data={dataDetailChapter}
          renderItem={renderItem}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </TouchableHighlight>
      {renderHeader()}
      {renderFooter()}
    </View>
  );
};

export default ChapterDetail;
