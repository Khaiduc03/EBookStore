import { View, TouchableOpacity, Image, Text, FlatList, Dimensions } from 'react-native'
import React from 'react'
import useStyles from '../MyProfile/styles'
import Header from '../../../../components/customs/Headers';
import { images } from '../../../../assets';
import TextCustom from '../../../../components/customs/Text';
import { Circle } from '../../../../components';
import Squares from '../../../../components/customs/Squares';
import { ScrollView } from 'react-native-gesture-handler';
import { NavigationService } from '../../../../navigation';
import { routes } from '../../../../constants';
import ItemPost from './ItemPost/ItemPost';



const MyProfile: React.FC = (props) => {
  const styles = useStyles();
  const itemWidth = Dimensions.get('window').width / 3;

  const handlePressGoback = () => {
    NavigationService.navigate(routes.PROFILE);
  };
  const renderItem = ({ item }: { item: typeof data[0] }) => (
    <Squares {...item} />
  );
  const renderItemPost = ({ item }: { item: typeof data2[0] }) => (
    <Image style={{ width: itemWidth, height: itemWidth }} source={images.avata} />
  );

  return (
    <View style={styles.container}>
      <Header leftIcon onPressLeftIcon={handlePressGoback} title='My Profile' istitle ic_Add ic_Edit />
      <View style={styles.View}>
        <Image style={styles.Avatar} source={images.avata} />
        <TouchableOpacity style={styles.viewFollow}>
          <TextCustom number={100} />
          <TextCustom textLight title='Follower' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewFollow}>
          <TextCustom number={100} />
          <TextCustom textLight title='Follow' />
        </TouchableOpacity>
        <TouchableOpacity style={styles.viewFollow}>
          <TextCustom number={100} />
          <TextCustom textLight title='Post' />
        </TouchableOpacity>
      </View>
      <View style={styles.NameUser}>
        <TextCustom textBold title='Drake Kun' />
        <TextCustom textLight title='Biographic this here !!!!! 😎' />
      </View>
      <View style={styles.ViewExplore}>
        <TextCustom textBold title='Explore everyone' />
        <TouchableOpacity>
          <TextCustom textPrimary title='See all' />
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
      <View style={{ alignItems: 'center', borderBottomWidth: 0.5, borderColor: '#8a8a8a', marginTop: 15 }}>
        <TextCustom textBold title='MY POST' />
      </View>
      <View style={{ flex: 1 }}>
        <FlatList
          data={data2}
          renderItem={({ item }) => <ItemPost data={item} />}
          numColumns={3}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator
        />
      </View>
    </View>
  )
}

export default MyProfile
const data = [
  { id: '1', avatarDummy: true, name: 'Peter 1', title: 'Suggestions for you', button: true, textButton: 'Follow' },
  { id: '2', avatarDummy: true, name: 'Peter 2', title: 'Suggestions for you', button: true, textButton: 'Follow' },
  { id: '3', avatarDummy: true, name: 'Peter 3', title: 'Suggestions for you', button: true, textButton: 'Follow' },
  { id: '4', avatarDummy: true, name: 'Peter 4', title: 'Suggestions for you', button: true, textButton: 'Follow' },
  { id: '5', avatarDummy: true, name: 'Peter 5', title: 'Suggestions for you', button: true, textButton: 'Follow' },
];

const data2 = [
  {
    id: '1',
    images: require('../../../../assets/images/png/avatar.jpg'),
  },
  {
    id: '2',
    images: require('../../../../assets/images/png/avatar.jpg'),
  }, {
    id: '3',
    images: require('../../../../assets/images/png/avatar.jpg'),
  }, {
    id: '4',
    images: require('../../../../assets/images/png/avatar.jpg'),
  }, {
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
