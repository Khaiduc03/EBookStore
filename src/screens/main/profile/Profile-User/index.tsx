import React, {useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import HeaderCustom from '../../../../components/customs/HeaderCustom';
import TextCustom from '../../../../components/customs/Text';
import {routes} from '../../../../constants';
import {NavigationService} from '../../../../navigation';
import AddFriend from './components/AddFriend';
import ItemFollow from './components/ItemFollow';
import ItemListProfileUser from './components/ItemListProfileUser';
import ItemPostUser from './components/ItemPostUser';
import useStyles from './styles';

const ProfileUser: React.FC = props => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.navigate(routes.MYPROFILE);
  };
  const handlePressMessage = () => {
    NavigationService.navigate(routes.MESSAGES);
  };
  const [isFollowed, setIsFollowed] = useState(true);
  const handleFollowButtonClick = () => {
    setIsFollowed(!isFollowed);
  };
  const renderItem = ({item}: {item: (typeof data2)[0]}) => (
    <ItemListProfileUser {...item} />
  );

  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'chevron-left', type: 'font-awesome-5'}}
        title="Profile User"
        onPressLeftIcon={handlePressGoback}
        rightIconRight={{name: 'ellipsis-vertical', type: 'ionicon'}}
      />
      <View>
        <ItemFollow />
      </View>
      <View style={styles.nameUser}>
        <TextCustom textBold title="Drake Kun" />
        <TextCustom textLight title="Biographic this here !!!!! 😎" />
      </View>
      <View style={styles.viewbtnFollow}>
        <TouchableOpacity
          style={[
            styles.btnFollow,
            {
              backgroundColor: isFollowed ? '#0075FF' : 'gray',
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
    images: require('../../../../assets/images/png/avatar.jpg'),
  },
  {
    id: '2',
    images: require('../../../../assets/images/png/avatar.jpg'),
  },
  {
    id: '3',
    images: require('../../../../assets/images/png/avatar.jpg'),
  },
  {
    id: '4',
    images: require('../../../../assets/images/png/avatar.jpg'),
  },
  {
    id: '5',
    images: require('../../../../assets/images/png/avatar.jpg'),
  },
  {
    id: '6',
    images: require('../../../../assets/images/png/avatar.jpg'),
  },
  {
    id: '7',
    images: require('../../../../assets/images/png/avatar.jpg'),
  },
  {
    id: '8',
    images: require('../../../../assets/images/png/avatar.jpg'),
  },
  {
    id: '9',
    images: require('../../../../assets/images/png/avatar.jpg'),
  },
  {
    id: '10',
    images: require('../../../../assets/images/png/avatar.jpg'),
  },
  {
    id: '11',
    images: require('../../../../assets/images/png/avatar.jpg'),
  },
  {
    id: '12',
    images: require('../../../../assets/images/png/avatar.jpg'),
  },
  {
    id: '13',
    images: require('../../../../assets/images/png/avatar.jpg'),
  },
  {
    id: '14',
    images: require('../../../../assets/images/png/avatar.jpg'),
  },
  {
    id: '15',
    images: require('../../../../assets/images/png/avatar.jpg'),
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
  },
  {
    id: '2',
    avatarDummy: true,
    name: 'Peter 2',
    title: 'Suggestions for you',
    button: true,
    textButton: 'Follow',
  },
  {
    id: '3',
    avatarDummy: true,
    name: 'Peter 3',
    title: 'Suggestions for you',
    button: true,
    textButton: 'Follow',
  },
  {
    id: '4',
    avatarDummy: true,
    name: 'Peter 4',
    title: 'Suggestions for you',
    button: true,
    textButton: 'Follow',
  },
  {
    id: '5',
    avatarDummy: true,
    name: 'Peter 5',
    title: 'Suggestions for you',
    button: true,
    textButton: 'Follow',
  },
];
