import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import Share from 'react-native-share';
import {routes} from '../../../../../../constants';
import {NavigationService} from '../../../../../../navigation';
import {theme} from '../../../../../../theme';
import useStyles from './styles';
import {Post} from './types';
import {useAppSelector} from '../../../../../../hooks';
import {getAuthUserProfile} from '../../../../../../redux';
import {images} from '../../../../../../assets';

const ItemListPost: React.FC<{data: Post[]}> = ({data}) => {
  const styles = useStyles();
  const [isLike, setIsLike] = useState(false);
  const [imageActive, setImageActive] = useState(0);
  const user = useAppSelector(getAuthUserProfile);

  const handleLikePress = () => {
    setIsLike(!isLike);
  };

  const onChange = (nativeEvent: any) => {
    if (
      nativeEvent &&
      nativeEvent.contentOffset &&
      nativeEvent.layoutMeasurement
    ) {
      const slide = Math.floor(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide !== imageActive) {
        setImageActive(slide);
      }
    }
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

  const renderImages = (images: string[]) => (
    <FlatList
      data={images}
      onScroll={({nativeEvent}) => onChange(nativeEvent)}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
      keyExtractor={(url, index) => index.toString()}
      renderItem={({item: url, index}) => (
        <View key={url}>
          <FastImage
            resizeMode="stretch"
            style={styles.imagePost}
            source={{uri: url}}
          />
          <View style={styles.wrapDot}>
            {images.map((e, dotIndex) => (
              <Text
                key={e}
                style={
                  imageActive === dotIndex ? styles.dotActive : styles.dot
                }>
                ●
              </Text>
            ))}
          </View>
        </View>
      )}
    />
  );
  const headerIndex = 0;
  const dataIndices = data.map((_, index) => headerIndex + index + 1);

  const renderItem = ({item}: {item: Post}) => (
    <View style={styles.content}>
      <View style={styles.post}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.image}
            source={{
              uri: item.avatar,
            }}
          />
          <View style={styles.viewTextPost}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={{flexDirection: 'row', gap: 10}}>
              <Text style={styles.createAt}>{item.createAt}</Text>
              <Icon name="public" type="material" />
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
        {renderImages(item.images)}
        <View
          style={{
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <View style={styles.viewNumberCount}>
            <View style={styles.iconText}>
              <Text style={styles.textLike}>{item.likeCount}</Text>
              <Text style={styles.textLike}>Likes</Text>
            </View>
            <View style={styles.iconText}>
              <Text style={styles.textLike}>{item.commentCount}</Text>
              <Text style={styles.textLike}>Comment</Text>
            </View>
          </View>
        </View>

        <View style={styles.footerPost}>
          <TouchableOpacity style={styles.iconText} onPress={handleLikePress}>
            <Icon
              name={isLike ? 'heart' : 'heart-outline'}
              type="ionicon"
              color={
                isLike ? theme.lightColors?.primary : theme.lightColors?.primary
              }
            />
            <Text style={styles.textLike}>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconText}
            onPress={() => NavigationService.navigate(routes.COMMENT_POST)}>
            <Icon name="commenting-o" type="font-awesome" />
            <Text style={styles.textLike}>Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconText} onPress={onShare}>
            <Icon name="share-social-outline" type="ionicon" />
            <Text style={styles.textLike}>Share</Text>
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
        keyExtractor={item => item.id}
        ListHeaderComponent={() => (
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => NavigationService.navigate(routes.MYPROFILE)}>
              <Image style={styles.image} source={{uri: user.image_url}} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonHeader}
              onPress={() => NavigationService.navigate(routes.CREATEPOST)}>
              <Text style={styles.textheader}>What are you thinking?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{justifyContent: 'center'}}
              onPress={() => NavigationService.navigate(routes.CREATEPOST)}>
              <Image style={styles.img_default} source={images.image_default} />
            </TouchableOpacity>
          </View>
        )}
        stickyHeaderIndices={[headerIndex, ...dataIndices]}
      />
    </View>
  );
};

export default ItemListPost;
