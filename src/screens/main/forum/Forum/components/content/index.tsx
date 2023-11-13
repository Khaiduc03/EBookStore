import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import React, {useState} from 'react';
import {Icon} from '@rneui/themed';
import useStyles from './styles';
import {images} from '../../../../../../assets';
import {theme} from '../../../../../../theme';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import Share from 'react-native-share';

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
      url: 'https://',
      message:
        'ComicVerse app vừa kiếm người yêu vừa đọc truyện hihi ^__^ ! : \n' +
        +'\n',
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
          <Image style={styles.image} source={images.avata} />
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
        <Image style={styles.imagePost} source={images.avata} />
        <View
          style={{
            alignItems: 'center',
            paddingHorizontal: 10,
          }}>
          <View style={styles.viewNumberCount}>
            <View style={styles.iconText}>
              <Text>{item.likeCount}</Text>
              <Text>Like</Text>
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
    likeCount: 1123,
    commentCount: 1123,
  },
  {
    id: '2',
    name: 'Messi',
    createAt: '18/02/2023 at 22:23',
    description:
      "Amidst the roaring crowd, the striker's precision and the goalie's reflexes created a mesmerizing dance on the pitch",
    likeCount: 1123,
    commentCount: 1123,
  },
];
