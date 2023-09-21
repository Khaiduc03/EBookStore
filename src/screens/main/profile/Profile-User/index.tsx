import {View, TouchableOpacity, Image, FlatList, Text} from 'react-native';
import React, {useState} from 'react';
import {images} from '../../../../assets';
import TextCustom from '../../../../components/customs/Text';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import HeaderCustom from '../../../../components/customs/HeaderCustom';
import useStyles from './styles';
import ItemPostUser from './ItemPostUser/ItemPostUser';
import {Icon} from '@rneui/themed';

const ProfileUser: React.FC = props => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.navigate(routes.MYPROFILE);
  };
  const handlePressGoScreen = () => {
    NavigationService.navigate(routes.UPDATE_PROFILE2);
  };
  const [isFollowed, setIsFollowed] = useState(true);
  const handleFollowButtonClick = () => {
    setIsFollowed(!isFollowed);
  };

  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-left', type: 'font-awesome'}}
        title="Profile User"
        onPressLeftIcon={handlePressGoback}
        rightIconRight={{name: 'ellipsis-vertical', type: 'ionicon'}}
      />
      <View style={styles.View}>
        <Image style={styles.Avatar} source={images.avata} />
        <TouchableOpacity style={styles.viewFollow}>
          <TextCustom number={100} />
          <TextCustom textLight title="Follower" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewFollow}>
          <TextCustom number={100} />
          <TextCustom textLight title="Follow" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewFollow}>
          <TextCustom number={100} />
          <TextCustom textLight title="Post" />
        </TouchableOpacity>
      </View>
      <View style={styles.NameUser}>
        <TextCustom textBold title="Drake Kun" />
        <TextCustom textLight title="Biographic this here !!!!! 😎" />
      </View>
      <View style={styles.ViewButtonFollow}>
        <TouchableOpacity
          style={[
            styles.ButtonFollow,
            {
              backgroundColor: isFollowed ? '#0075FF' : 'gray',
            },
          ]}
          onPress={handleFollowButtonClick}>
          <Text style={styles.TextFollow}>
            {isFollowed ? 'Follow' : 'unFollow'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonFollow}>
          <Text style={styles.TextFollow}>Messenger</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.ButtonAddUser}>
          <Icon
            name="user-plus"
            type="font-awesome-5"
            size={18}
            color={'white'}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.ViewMyPost}>
        <Text style={styles.TextPost}>Post by User</Text>
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
