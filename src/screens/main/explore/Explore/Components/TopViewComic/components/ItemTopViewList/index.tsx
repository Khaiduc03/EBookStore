import {Text, TouchableOpacity, View, ActivityIndicator} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import {CustomComicProps} from './type';
import {Image} from '@rneui/themed';
import FastImage from 'react-native-fast-image';
import {routes} from '../../../../../../../../constants';
import {useAppDispatch} from '../../../../../../../../hooks';
import {NavigationService} from '../../../../../../../../navigation';
import {ComicActions, ComicType} from '../../../../../../../../redux';
import {TopOneImage} from '../../../../../../../../assets/svg';

const ItemTopViewList: React.FunctionComponent<CustomComicProps> = props => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const onPressDetail = () => {
    dispatch(ComicActions.clearPostFavorite());
    dispatch(ComicActions.clearListDataChapter());
    dispatch(ComicActions.clearListDataByTopicMore());
    NavigationService.navigate(routes.COMICDETAIL, {data: comic});
  };

  const comic: ComicType = props.data;
  return (
    <View>
      {props.index == 0 ? (
        <View style={styles.oneContainer}>
          <FastImage
            source={{uri: comic.image_url}}
            style={styles.imgOneStyle}
          />
          <View style={styles.textOne}>
            <TopOneImage />
            <Text style={styles.textNumberOne}>1</Text>
          </View>
          <View style={styles.contentOne}>
            <View>
              <Text numberOfLines={1} style={styles.nameOne}>
                {comic.comic_name}
              </Text>
              <View style={styles.iconContainer}>
                <View style={styles.iconItem}>
                  <Icon
                    name="eye-sharp"
                    type="ionicon"
                    color={'#F89300'}
                    size={15}
                  />
                  <Text style={styles.textNumberStyle}>{comic.views || 0}</Text>
                </View>

                <View style={styles.iconItem}>
                  <Icon
                    name="star"
                    type="fontawesome"
                    color={'#F89300'}
                    size={15}
                  />
                  <Text style={styles.textNumberStyle}>
                    {comic.rating.toFixed(2) || 0}
                  </Text>
                </View>
              </View>
            </View>

            <Text numberOfLines={3} style={styles.desOne}>
              {comic.description}
            </Text>
          </View>
        </View>
      ) : (
        <View style={styles.container}>
          <Text style={styles.textTop}>
            {props.index ? props.index + 1 : 0}
          </Text>
          <TouchableOpacity onPress={onPressDetail} style={styles.imgComic}>
            <FastImage
              resizeMode="cover"
              style={{width: '100%', height: '100%', borderRadius: 6}}
              source={{uri: comic.image_url}}
            />
          </TouchableOpacity>
          <View style={styles.contentContainer}>
            <View style={styles.content}>
              <Text numberOfLines={1} style={styles.nameComic}>
                {comic.comic_name}
              </Text>

              <View style={styles.iconContainer}>
                <View style={styles.iconItem}>
                  <Icon
                    name="eye-sharp"
                    type="ionicon"
                    color={'#F89300'}
                    size={15}
                  />
                  <Text style={styles.textNumberStyle}>{comic.views || 0}</Text>
                </View>

                <View style={styles.iconItem}>
                  <Icon
                    name="star"
                    type="fontawesome"
                    color={'#F89300'}
                    size={15}
                  />
                  <Text style={styles.textNumberStyle}>
                    {comic.rating.toFixed(2) || 0}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      )}
    </View>
  );
};

export default ItemTopViewList;
