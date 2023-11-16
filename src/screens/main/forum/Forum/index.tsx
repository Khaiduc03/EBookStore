import React from 'react';
import {View} from 'react-native';
import {HeaderCustom} from '../../../../components';
import {ItemListPost} from './components';
import useStyles from './styles';

const Forum: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'users', type: 'font-awesome'}}
        title="Forum"
      />

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
    likeCount: 123,
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
  {
    id: '3',
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
  {
    id: '4',
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
  {
    id: '5',
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
  {
    id: '6',
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
  {
    id: '7',
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
