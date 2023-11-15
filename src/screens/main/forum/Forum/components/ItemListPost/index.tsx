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
import {Post} from './types';

const ItemListPost: React.FC<Post> = () => {
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
      'https://static01.nyt.com/images/2022/12/30/multimedia/30soccer-ronaldo-1-76fd/30soccer-ronaldo-1-76fd-videoSixteenByNine3000.jpg',
      'https://nld.mediacdn.vn/291774122806476800/2022/12/9/13-ronaldo-16705925694541880121770.jpg',
    ],
    createAt: '18/02/2023 at 22:23',
    description: 'Champion in the hearts of fans',
    likeCount: 999999,
    commentCount: 4564,
  },
  {
    id: '2',
    name: 'Messi',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoRfqVdN2MYZFFzupxTtLYQhdWjIV6B5zFjg&usqp=CAU',
    images: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPsOPB-a3bhbczpXyXl8A_R2gvuCJ_HYmyrw&usqp=CAU',
      'https://media.sot.com.al/sot.com.al/media3/-800-0-6468604ada513.jpg',
    ],
    createAt: '18/02/2023 at 22:23',
    description: 'World Cup champion',
    likeCount: 456,
    commentCount: 1233,
  },
];
