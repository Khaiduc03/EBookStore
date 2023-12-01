import React, {useEffect} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import HeaderCustom from '../../../../components/customs/HeaderCustom';
import TextCustom from '../../../../components/customs/Text';
import {routes} from '../../../../constants';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {NavigationService} from '../../../../navigation';
import {getAuthUserProfile} from '../../../../redux';
import useStyles from '../MyProfile/styles';
import {ItemFollow, ItemListMyProfile, ItemPost} from './components';
import {getAllUser} from '../../../../redux/selectors/user.selector';
import {UserAction} from '../../../../redux/reducer/user.reducer';
import {UserType} from '../../../../redux/types/user.type';
import HeaderCustomV1 from '../../../../components/customs/HeaderCustomV1';

const MyProfile: React.FC = props => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const handlePressGoback = () => {
    NavigationService.goBack();
  };

  const dataUser = useAppSelector(getAllUser);

  useEffect(() => {
    dispatch(UserAction.getListUser());
  }, []);

  const renderItem = ({item}: {item: UserType}) => (
    <ItemListMyProfile data={item} />
  );
  const user = useAppSelector(getAuthUserProfile);

  return (
    <View style={styles.container}>
      <HeaderCustom
        title="My Profile"
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        onPressLeftIcon={handlePressGoback}
        rightIconleft={{name: 'plus-square-o', type: 'font-awesome'}}
        rightIconRight={
          {
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
          data={dataUser}
          renderItem={renderItem}
          keyExtractor={item => item.uuid}
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
          data={data}
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
    images:
      'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/366528471_807331801180366_1410045474469152646_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=U3UaRwTVaGgAX8StWEu&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBgmgtY8pff7kGMLvzmtUXWF_b7nhR4k1a0bJkFzuAZIQ&oe=656EF691',
  },
  {
    id: '2',
    images:
      'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/366550872_807304151183131_8706730264232329873_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=J5NaCMLPbvoAX_Hyhgm&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfDt6l7mISNGLCPzi6BxYqAvS752fRIHLihrGkprwmEX_A&oe=656F0DA5',
  },
  {
    id: '3',
    images:
      'https://scontent.fsgn8-3.fna.fbcdn.net/v/t1.6435-9/127278102_147344403845779_8550163119202978909_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=7a1959&_nc_ohc=XL_01Z7Y0cQAX_4gLS5&_nc_ht=scontent.fsgn8-3.fna&oh=00_AfBb4kvKT4KIwTw_BqvjF5UhwydfEa_A9wEChJ4_YiqfkQ&oe=6591B116',
  },
  {
    id: '4',
    images:
      'https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.6435-9/123344637_113660337214186_359598388422509224_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=7a1959&_nc_ohc=No9VqkyuKckAX_Nlgxe&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBQeSl74IVrJnYx_Yy1XAcc5BwNPfn6UkmhelSCRe7hQg&oe=6591B87F',
  },
  {
    id: '5',
    images:
      'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/366340551_812802473966632_4097634686079273931_n.jpg?stp=cp6_dst-jpg&_nc_cat=107&ccb=1-7&_nc_sid=dd5e9f&_nc_ohc=YANkWkPSdjAAX8WYm7o&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfDYknthWV4BLwBI11BbGBhft3nZ8u6PUX7K5S1q-gQBBg&oe=656EF8CA',
  },
  {
    id: '6',
    images:
      'https://scontent.fsgn8-4.fna.fbcdn.net/v/t1.6435-9/161297095_217737133473172_190533056425701830_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=7a1959&_nc_ohc=4gsisoKX1c4AX8uabHw&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfBciJrUxs1XzWywxHXAIMwFNwoSWgBx7oq7H9qzcw9T3g&oe=6591BC09',
  },
  {
    id: '7',
    images:
      'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/273765253_441765144403702_7609377909328396656_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=LNsaKuQQT_gAX9ECDo2&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfC_kX-C_7Xi1znv_mKlileyxfDpJ3guy3ALmsHypmLhAw&oe=65700946',
  },
  {
    id: '8',
    images:
      'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/241227772_368351928411691_2173776367813090970_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=neRXNAbBsMIAX8UNVbf&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfCjxSvThWc9pRrGeUMsuTX8nJwUmN2qE4Uko-_Ao-HgYw&oe=656FB56A',
  },
  {
    id: '9',
    images:
      'https://scontent.fsgn8-4.fna.fbcdn.net/v/t39.30808-6/222771650_306966861216865_243755445883811087_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9c7eae&_nc_ohc=_FAC--jyRS8AX-wYH6m&_nc_ht=scontent.fsgn8-4.fna&oh=00_AfDWtJMHldSG4QbyqyiHAF_0Wv3DVNRsGqAldsD50VMevA&oe=65701BB3',
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
