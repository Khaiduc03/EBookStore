import {Icon} from '@rneui/themed';
import React, {useEffect, useRef, useState} from 'react';
import {
  FlatList,
  Image,
  NativeScrollEvent,
  NativeSyntheticEvent,
  Text,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import Share from 'react-native-share';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {ImageIcon} from '../../../../../../assets/svg';
import {routes} from '../../../../../../constants';
import {useAppSelector} from '../../../../../../hooks';
import {NavigationService} from '../../../../../../navigation';
import {getAuthUserProfile} from '../../../../../../redux';
import useStyles from './styles';
import {Post, data} from './types';

const ItemListPost: React.FC = () => {
  const styles = useStyles();
  const [isLike, setIsLike] = useState(false);
  const user = useAppSelector(getAuthUserProfile);
  const [currentImageIndex, setCurrentImageIndex] = useState(1);
  const flatListRef = useRef<FlatList>(null);
  const {width} = useWindowDimensions();

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const totalImageCount = data.reduce(
      (count, post: any) => count + post.images.length,
      0,
    );
    const index = Math.floor(contentOffsetX / (width / 2));

    let cumulativeIndex = 0;
    for (const post of data as any) {
      if (index < cumulativeIndex + post.images.length) {
        setCurrentImageIndex(index - cumulativeIndex + 1);
        break;
      }
      cumulativeIndex += post.images.length;
    }
  };

  useEffect(() => {
    // Scroll to the correct index after state update
    flatListRef.current?.scrollToIndex({
      animated: true,
      index: currentImageIndex - 1, // Adjusted to 0-based index
    });
  }, [currentImageIndex]);

  const RenderItemImages = ({item}: {item: any}) => {
    return (
      <View>
        <Image
          resizeMode="cover"
          progressiveRenderingEnabled
          source={{uri: item}}
          style={{width: width, height: 200}}
        />
      </View>
    );
  };

  const onShare = async () => {
    const options: any = {
      url: 'https://ComicVerse.com',
      message: 'ComicVerse app đọc truyện tích hợp mạng xã hội ^__^ ! : \n',
    };
    try {
      const res = await Share.open(options);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLikePress = () => {
    setIsLike(!isLike);
  };

  const renderItem = ({item}: {item: Post}) => (
    <View style={styles.content}>
      <View style={styles.post}>
        <View style={[styles.viewRow, styles.viewImageText]}>
          <Image
            style={styles.imageTitle}
            source={{
              uri: item.avatar,
            }}
          />
          <View style={styles.viewTextPost}>
            <Text style={styles.name}>{item.name}</Text>
            <View
              style={[
                styles.viewRow,
                styles.viewImageText,
                styles.marginTopDate,
              ]}>
              <Text style={styles.createAt}>{item.createAt}</Text>
              <Icon name="public" type="material" size={16} color={'#626162'} />
            </View>
          </View>
        </View>

        <View style={styles.viewIconPost}>
          <Icon name="ellipsis-horizontal" type="ionicon" size={28} />
          <Icon name="close-outline" type="ionicon" size={28} />
        </View>
      </View>
      <View style={styles.description}>
        <Text style={styles.textDescription}>{item.description}</Text>
      </View>
      <View>
        <FlatList
          ref={flatListRef}
          data={item.images}
          keyExtractor={(item, index) => `${item.id}-${index}`}
          renderItem={RenderItemImages}
          horizontal
          pagingEnabled
          onScroll={handleScroll}
        />

        <View
          style={{
            width: 60,
            height: 29,
            backgroundColor: 'rgba(35, 35, 35, 0.8)',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 26,
            position: 'absolute',
            right: 0,
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: 'bold',
            }}>{`${currentImageIndex}/${
            data.flatMap(post => post.images).length
          }`}</Text>
        </View>

        <View
          style={{
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <View style={styles.viewNumberCount}>
            <View style={styles.iconText}>
              <View style={[styles.iconLike, styles.viewCenter]}>
                <IconMaterialIcons
                  name={'thumb-up-alt'}
                  color={'white'}
                  size={11}
                />
              </View>
              <Text style={styles.textLikeBlur}>{item.likeCount}</Text>
            </View>
            <View style={styles.iconText}>
              <Text style={styles.textLikeBlur}>{item.commentCount}</Text>
              <Text style={styles.textLikeBlur}>comment</Text>
            </View>
          </View>
        </View>

        <View style={styles.footerPost}>
          <TouchableOpacity
            style={styles.iconText}
            onPress={() => {
              handleLikePress();
            }}>
            <IconMaterialIcons
              name={isLike ? 'thumb-up-alt' : 'thumb-up-off-alt'}
              color={
                isLike
                  ? styles.colorIconHeartFocus.color
                  : styles.colorIconHeartBlur.color
              }
              size={24}
            />
            <Text style={isLike ? styles.textLikeFocus : styles.textLikeBlur}>
              Like
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconText}
            onPress={() => NavigationService.navigate(routes.COMMENT_POST)}>
            <IconFontAwesome5
              name="comment"
              color={styles.colorIconHeartBlur.color}
              size={20}
            />
            <Text style={styles.textLikeBlur}>Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconText} onPress={onShare}>
            <Icon name="share-social-outline" type="ionicon" size={22} />
            <Text style={styles.textLikeBlur}>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={(index, item) => index.id.toString()}
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={() => {
          return (
            <View style={styles.header}>
              <TouchableOpacity
                onPress={() => NavigationService.navigate(routes.MYPROFILE)}>
                <Image style={styles.image} source={{uri: user.image_url}} />
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.buttonHeader}
                onPress={() => NavigationService.navigate(routes.CREATEPOST)}>
                <Text>Bạn đang nghĩ gì?</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => NavigationService.navigate(routes.CREATEPOST)}>
                <ImageIcon />
              </TouchableOpacity>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ItemListPost;
