import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import HeaderCustom from '../../../../components/customs/HeaderCustom';
import TextCustom from '../../../../components/customs/Text';
import {routes} from '../../../../constants';
import {NavigationService} from '../../../../navigation';
import {
  AddFriend,
  ItemFollow,
  ItemListProfileUSer,
  ItemPostUser,
} from './components';
import useStyles from './styles';
import {theme} from '../../../../theme';
import {User} from '../../../../redux';
import {useRoute} from '@react-navigation/native';
interface RouteParamsProfile {
  data: User;
}

const ProfileUser: React.FC = props => {
  const route = useRoute();
  const dataUser = (route.params as RouteParamsProfile).data;

  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.goBack();
  };
  const handlePressMessage = () => {
    NavigationService.navigate(routes.MESSAGE);
  };
  const [isFollowed, setIsFollowed] = useState(true);
  const handleFollowButtonClick = () => {
    setIsFollowed(!isFollowed);
  };
  const renderItem = ({item}: {item: (typeof data2)[0]}) => (
    <ItemListProfileUSer {...item} />
  );

  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        title="Profile User"
        onPressLeftIcon={handlePressGoback}
        rightIconRight={{name: 'ellipsis-vertical', type: 'ionicon'}}
      />
      <View>
        <ItemFollow data={dataUser} />
      </View>
      <View style={styles.nameUser}>
        <TextCustom textBold title={dataUser.fullname} />
        <TextCustom textLight title="Biographic this here !!!!! 😎" />
      </View>
      <View style={styles.viewbtnFollow}>
        <TouchableOpacity
          style={[
            styles.btnFollow,
            {
              backgroundColor: isFollowed
                ? theme?.lightColors?.blue
                : theme?.lightColors?.grey5,
            },
          ]}
          onPress={handleFollowButtonClick}>
          <Text style={styles.textFollow}>
            {isFollowed ? 'Follow' : 'unFollow'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnFollow} onPress={handlePressMessage}>
          <Text style={styles.textFollow}>Messenger</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnAddUser}>
          <AddFriend />
        </TouchableOpacity>
      </View>
      <View style={styles.viewExplore}>
        <FlatList
          data={data2}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="start"
          snapToInterval={10}
          decelerationRate={0.5}
        />
      </View>

      <View style={styles.viewMyPost}>
        <Text style={styles.textPost}>Post by User</Text>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={data}
          renderItem={({item}) => <ItemPostUser data={item} />}
          numColumns={3}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator
        />
      </View>
    </View>
  );
};

export default ProfileUser;

const data = [
  {
    id: '1',
    images:
      'https://cdn.tuoitre.vn/thumb_w/480/2022/10/21/27958068910656830706859984149185904941451476n-16663380420601714216182.jpeg',
  },
  {
    id: '2',
    images:
      'https://cdn.tuoitre.vn/thumb_w/480/2022/10/21/27958068910656830706859984149185904941451476n-16663380420601714216182.jpeg',
  },
  {
    id: '3',
    images:
      'https://cdn.tuoitre.vn/thumb_w/480/2022/10/21/27958068910656830706859984149185904941451476n-16663380420601714216182.jpeg',
  },
  {
    id: '4',
    images:
      'https://cdn.tuoitre.vn/thumb_w/480/2022/10/21/27958068910656830706859984149185904941451476n-16663380420601714216182.jpeg',
  },
  {
    id: '5',
    images:
      'https://cdn.tuoitre.vn/thumb_w/480/2022/10/21/27958068910656830706859984149185904941451476n-16663380420601714216182.jpeg',
  },
  {
    id: '6',
    images:
      'https://cdn.tuoitre.vn/thumb_w/480/2022/10/21/27958068910656830706859984149185904941451476n-16663380420601714216182.jpeg',
  },
  {
    id: '7',
    images:
      'https://cdn.tuoitre.vn/thumb_w/480/2022/10/21/27958068910656830706859984149185904941451476n-16663380420601714216182.jpeg',
  },
  {
    id: '8',
    images:
      'https://cdn.tuoitre.vn/thumb_w/480/2022/10/21/27958068910656830706859984149185904941451476n-16663380420601714216182.jpeg',
  },
  {
    id: '9',
    images:
      'https://cdn.tuoitre.vn/thumb_w/480/2022/10/21/27958068910656830706859984149185904941451476n-16663380420601714216182.jpeg',
  },
  {
    id: '10',
    images:
      'https://cdn.tuoitre.vn/thumb_w/480/2022/10/21/27958068910656830706859984149185904941451476n-16663380420601714216182.jpeg',
  },
  {
    id: '11',
    images:
      'https://cdn.tuoitre.vn/thumb_w/480/2022/10/21/27958068910656830706859984149185904941451476n-16663380420601714216182.jpeg',
  },
  {
    id: '12',
    images:
      'https://cdn.tuoitre.vn/thumb_w/480/2022/10/21/27958068910656830706859984149185904941451476n-16663380420601714216182.jpeg',
  },
  {
    id: '13',
    images:
      'https://cdn.tuoitre.vn/thumb_w/480/2022/10/21/27958068910656830706859984149185904941451476n-16663380420601714216182.jpeg',
  },
  {
    id: '14',
    images:
      'https://cdn.tuoitre.vn/thumb_w/480/2022/10/21/27958068910656830706859984149185904941451476n-16663380420601714216182.jpeg',
  },
  {
    id: '15',
    images:
      'https://cdn.tuoitre.vn/thumb_w/480/2022/10/21/27958068910656830706859984149185904941451476n-16663380420601714216182.jpeg',
  },
];
const data2 = [
  {
    id: '1',
    avatarDummy: true,
    name: 'Peter 1',
    title: 'Suggestions for you',
    button: true,
    textButton: 'Follow',
    closeIcon: true,
  },
  {
    id: '2',
    avatarDummy: true,
    name: 'Peter 2',
    title: 'Suggestions for you',
    button: true,
    closeIcon: true,
    textButton: 'Follow',
  },
  {
    id: '3',
    avatarDummy: true,
    name: 'Peter 3',
    title: 'Suggestions for you',
    button: true,
    textButton: 'Follow',
    closeIcon: true,
  },
  {
    id: '4',
    avatarDummy: true,
    name: 'Peter 4',
    title: 'Suggestions for you',
    button: true,
    textButton: 'Follow',
    closeIcon: true,
  },
  {
    id: '5',
    avatarDummy: true,
    name: 'Peter 5',
    title: 'Suggestions for you',
    button: true,
    textButton: 'Follow',
    closeIcon: true,
  },
];
