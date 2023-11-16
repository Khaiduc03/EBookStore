import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {HeaderCustom} from '../../../../components';
import {useAppSelector} from '../../../../hooks';
import {getAuthUserProfile} from '../../../../redux';
import {ItemListPost} from './components';
import useStyles from './styles';
import {images} from '../../../../assets';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';

const Forum: React.FC = () => {
  const styles = useStyles();
  const user = useAppSelector(getAuthUserProfile);
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'users', type: 'font-awesome'}}
        title="Forum"
      />
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.MYPROFILE)}>
          <Image style={styles.image} source={{uri: user.image_url}} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.buttonHeader}
          onPress={() => NavigationService.navigate(routes.CREATEPOST)}>
          <Text>What are you thinking?</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{justifyContent: 'center'}}
          onPress={() => NavigationService.navigate(routes.CREATEPOST)}>
          <Image style={styles.img_default} source={images.image_default} />
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <ItemListPost data={data} />
      </View>
    </View>
  );
};

export default Forum;
const data = [
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
