import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import Share from 'react-native-share';
import {routes} from '../../../../../../constants';
import {NavigationService} from '../../../../../../navigation';
import {theme} from '../../../../../../theme';
import useStyles from './styles';

interface Post {
  id: string;
  name: string;
  createAt: string;
  description: string;
  likeCount: number;
  commentCount: number;
}

const ItemListPost: React.FC = () => {
  const styles = useStyles();
  const [islike, setlike] = useState(false);
  const handlelikePress = () => {
    setlike(!islike);
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

  const renderItem = ({item}: {item: Post}) => (
    <View style={styles.content}>
      <View style={styles.post}>
        <View style={{flexDirection: 'row'}}>
          <Image
            style={styles.image}
            source={{
              uri: 'https://images2.thanhnien.vn/528068263637045248/2023/9/30/cristiano-ronaldo--169604187049959114942.jpeg',
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
        <Image
          style={styles.imagePost}
          source={{
            uri: 'https://images2.thanhnien.vn/528068263637045248/2023/9/30/cristiano-ronaldo--169604187049959114942.jpeg',
          }}
        />
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
          <TouchableOpacity style={styles.iconText} onPress={handlelikePress}>
            <Icon
              name={islike ? 'heart' : 'heart-outline'}
              type="ionicon"
              color={
                islike ? theme?.lightColors?.primary : theme?.lightColors?.black
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
    createAt: '18/02/2023 at 22:23',
    description:
      "Amidst the roaring crowd, the striker's precision and the goalie's reflexes created a mesmerizing dance on the pitch",
    likeCount: 456,
    commentCount: 1233,
  },
  {
    id: '2',
    name: 'Messi',
    createAt: '18/02/2023 at 22:23',
    description:
      "Amidst the roaring crowd, the striker's precision and the goalie's reflexes created a mesmerizing dance on the pitch",
    likeCount: 123,
    commentCount: 456,
  },
];
