import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import HeaderCustom from '../../../../components/customs/HeaderCustom';
import {routes} from '../../../../constants';
import {useAppSelector} from '../../../../hooks';
import {NavigationService} from '../../../../navigation';
import {getAuthUserProfile} from '../../../../redux';
import useStyles from '../MyProfile/styles';
import {ItemFollow, ItemListMyProfile, ItemPost} from './components';
import {data} from './components/ItemListMyProfile/types';

const MyProfile: React.FC = props => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.goBack();
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
        rightIconleft={{name: 'plus-square-o', type: 'font-awesome'}}
        rightIconRight={{
          name: 'edit',
          type: 'feather',
        }}
        onPressRightIconLeft={() =>
          NavigationService.navigate(routes.CREATEPOST)
        }
        onPressRightIconRight={() =>
          NavigationService.navigate(routes.UPDATE_PROFILE2)
        }
      />
      <View>
        <ItemFollow />
      </View>
      <View style={styles.viewTextName}>
        <Text style={styles.nameUser}>{user.fullname}</Text>
        <Text style={styles.textBio}>Biographic this here !!</Text>
      </View>

      <View style={styles.viewExplore}>
        <Text style={styles.textDiscover}>Discover People</Text>
        <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.DISCOVERPEOPLE)}>
          <Text style={styles.text}>See all</Text>
        </TouchableOpacity>
      </View>
      <View style={{paddingVertical: 10}}>
        <FlatList
          data={data}
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
        <Text style={styles.textPost}>Your Post</Text>
      </View>
      <View style={{flex: 1}}>
        <FlatList
          data={data2}
          renderItem={({item}) => <ItemPost data2={item} />}
          numColumns={3}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator
        />
      </View>
    </View>
  );
};

export default MyProfile;

const data2 = [
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
