import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import HeaderCustom from '../../../../components/customs/HeaderCustom';
import TextCustom from '../../../../components/customs/Text';
import {routes} from '../../../../constants';
import {NavigationService} from '../../../../navigation';
import useStyles from '../MyProfile/styles';
import {ItemFollow, ItemListMyProfile, ItemPost} from './components';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {AuthActions, getAuthUserProfile} from '../../../../redux';

const MyProfile: React.FC = props => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.goBack();
  };
  const handlePressGoScreen = () => {
    NavigationService.navigate(routes.UPDATE_PROFILE2);
  };
  const handlePressGoScreen2 = () => {
    NavigationService.navigate(routes.DISCOVERPEOPLE);
  };
  const renderItem = ({item}: {item: (typeof data)[0]}) => (
    <ItemListMyProfile {...item} />
  );
  const user = useAppSelector(getAuthUserProfile);
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        title="My Profile"
        onPressLeftIcon={handlePressGoback}
        rightIconRight={{name: 'plus-square', type: 'font-awesome-5'}}
        onPressRightIconRight={handlePressGoScreen}
      />
      <View>
        <ItemFollow />
      </View>
      <View style={styles.nameUser}>
        <TextCustom textBold title={user.fullname} />
        <TextCustom textLight title={user.summary} />
      </View>
      <View style={styles.viewExplore}>
        <TextCustom textBold title="Explore everyone" />
        <TouchableOpacity onPress={handlePressGoScreen2}>
          <TextCustom textPrimary title="See all" />
        </TouchableOpacity>
      </View>
      <View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="start" // Snap tới phần tử gần nhất khi cuộn
          snapToInterval={10} // Đặt khoảng cách giữa các phần tử
          decelerationRate={0.5} // Điều chỉnh tốc độ giảm dần của cuộn
        />
      </View>
      <View style={styles.viewMyPost}>
        <Text style={styles.textPost}>MY POST</Text>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={data2}
          renderItem={({item}) => <ItemPost data={item} />}
          numColumns={3}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator
        />
      </View>
    </View>
  );
};

export default MyProfile;
const data = [
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

const data2 = [
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
