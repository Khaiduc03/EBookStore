import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import Share from 'react-native-share';
import {routes} from '../../../../../../constants';
import {NavigationService} from '../../../../../../navigation';
import {theme} from '../../../../../../theme';
import useStyles from './styles';
import {useAppSelector} from '../../../../../../hooks';
import {getAuthUserProfile} from '../../../../../../redux';

interface Post {
  id: string;
  name: string;
  avatar: string;
  images: string[];
  createAt: string;
  description: string;
  likeCount: number;
  commentCount: number;
}

const ItemListPost: React.FC = () => {
  const styles = useStyles();
  const [isLike, setIsLike] = useState(false);
  const [imageActive, setImageActive] = useState(0);

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
    <ScrollView
      onScroll={({nativeEvent}) => onChange(nativeEvent)}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      horizontal
      style={styles.scrollView}>
      {images.map((url, index) => (
        <View key={url}>
          <FastImage
            resizeMode="stretch"
            style={styles.imagePost}
            source={{uri: url}}
          />
          <View style={styles.wrapDot}>
            {images.map((e, index) => (
              <Text
                key={e}
                style={imageActive === index ? styles.dotActive : styles.dot}>
                ●
              </Text>
            ))}
          </View>
        </View>
      ))}
    </ScrollView>
  );

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
              <Text style={styles.textLike}>Like</Text>
            </View>
            <View style={styles.iconText}>
              <Text>{item.commentCount}</Text>
              <Text>Comment</Text>
            </View>
          </View>
        </View>

        <View style={styles.footerPost}>
          <TouchableOpacity style={styles.iconText} onPress={handleLikePress}>
            <Icon
              name={isLike ? 'heart' : 'heart-outline'}
              type="ionicon"
              color={
                isLike ? theme?.lightColors?.primary : theme?.lightColors?.black
              }
            />
            <Text>Like</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.iconText}
            onPress={() => NavigationService.navigate(routes.COMMENT_POST)}>
            <Icon name="commenting-o" type="font-awesome" />
            <Text>Comment</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconText} onPress={onShare}>
            <Icon name="share-social-outline" type="ionicon" />
            <Text>Share</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
  );
};

export default ItemListPost;

const data: Post[] = [
  {
    id: '1',
    name: 'Ronaldo',
    avatar:
      'https://cdnimg.vietnamplus.vn/t660/uploaded/mzdic/2023_03_24/cristiano_ronaldo_portugal_2403.jpg',
    images: [
      'https://media.istockphoto.com/id/1465749930/vi/anh/b%E1%BB%A5c-%C4%91%E1%BA%BFm-%C4%91%C6%B0%E1%BB%9Dng-cong-xi-m%C4%83ng-m%C3%A0u-be-tr%E1%BB%91ng-v%E1%BB%9Bi-k%E1%BA%BFt-c%E1%BA%A5u-%C3%A1nh-s%C3%A1ng-m%E1%BA%B7t-tr%E1%BB%9Di-l%E1%BA%A5p-l%C3%A1nh-%C4%91%E1%BA%B9p-m%E1%BA%AFt-b%C3%B3ng-l%C3%A1.jpg?s=1024x1024&w=is&k=20&c=Zatsv8qCewj9kSWT2YpmbCkf5TDWthAZHLhiHfOzFiU=',
      'https://media.istockphoto.com/id/1419410282/vi/anh/khu-r%E1%BB%ABng-y%C3%AAn-t%C4%A9nh-v%C3%A0o-m%C3%B9a-xu%C3%A2n-v%E1%BB%9Bi-nh%E1%BB%AFng-tia-n%E1%BA%AFng-m%E1%BA%B7t-tr%E1%BB%9Di-tuy%E1%BB%87t-%C4%91%E1%BA%B9p.jpg?s=1024x1024&w=is&k=20&c=pEiyT1qoCFUAk1_9NkuGweIt3LPCgbatYHDEETbXXLI=',
    ],
    createAt: '18/02/2023 at 22:23',
    description:
      "Amidst the roaring crowd, the striker's precision and the goalie's reflexes created a mesmerizing dance on the pitch",
    likeCount: 456,
    commentCount: 1233,
  },
  {
    id: '2',
    name: 'Messi',
    avatar:
      'data:image/jpeg;base64,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',
    images: [
      'https://media.istockphoto.com/id/1465749930/vi/anh/b%E1%BB%A5c-%C4%91%E1%BA%BFm-%C4%91%C6%B0%E1%BB%9Dng-cong-xi-m%C4%83ng-m%C3%A0u-be-tr%E1%BB%91ng-v%E1%BB%9Bi-k%E1%BA%BFt-c%E1%BA%A5u-%C3%A1nh-s%C3%A1ng-m%E1%BA%B7t-tr%E1%BB%9Di-l%E1%BA%A5p-l%C3%A1nh-%C4%91%E1%BA%B9p-m%E1%BA%AFt-b%C3%B3ng-l%C3%A1.jpg?s=1024x1024&w=is&k=20&c=Zatsv8qCewj9kSWT2YpmbCkf5TDWthAZHLhiHfOzFiU=',
      'https://media.istockphoto.com/id/1419410282/vi/anh/khu-r%E1%BB%ABng-y%C3%AAn-t%C4%A9nh-v%C3%A0o-m%C3%B9a-xu%C3%A2n-v%E1%BB%9Bi-nh%E1%BB%AFng-tia-n%E1%BA%AFng-m%E1%BA%B7t-tr%E1%BB%9Di-tuy%E1%BB%87t-%C4%91%E1%BA%B9p.jpg?s=1024x1024&w=is&k=20&c=pEiyT1qoCFUAk1_9NkuGweIt3LPCgbatYHDEETbXXLI=',
    ],

    createAt: '18/02/2023 at 22:23',
    description:
      "Amidst the roaring crowd, the striker's precision and the goalie's reflexes created a mesmerizing dance on the pitch",
    likeCount: 456,
    commentCount: 1233,
  },
];
