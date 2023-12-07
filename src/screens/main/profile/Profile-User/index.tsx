import React, {useCallback, useEffect, useState} from 'react';
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
import {AuthActions, User} from '../../../../redux';
import {useRoute} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {
  currentPageAllPostByIdUser,
  getAllPostByIdUser,
  getAllUser,
  getUserById,
  nextPageAllPostIdByUser,
} from '../../../../redux/selectors/user.selector';
import {UserType} from '../../../../redux/types/user.type';
import {UserAction} from '../../../../redux/reducer/user.reducer';
import {getIsLoadingTopic} from '../../../../redux/selectors/loading.selector';
import {ActivityIndicator} from 'react-native';
interface RouteParamsProfile {
  data?: UserType;
}

const ProfileUser: React.FC = props => {
  const route = useRoute();
  const dataUser = (route.params as RouteParamsProfile).data;
  const dataList = useAppSelector(getAllPostByIdUser);
  const dataById = useAppSelector(getUserById);
  const dispatch = useAppDispatch();

  console.log(dataUser);

  const isLoading = useAppSelector(getIsLoadingTopic);
  const [sizeContent, setSizeContent] = useState<number>(0);
  const [size, setSize] = useState<boolean>(false);
  const currentpage = useAppSelector(currentPageAllPostByIdUser);
  const nextPage = useAppSelector(nextPageAllPostIdByUser);
  const [isFollowed, setIsFollowed] = useState<Boolean>(
    dataUser ? dataUser?.is_follower : true,
  );

  const styles = useStyles();

  useEffect(() => {
    dispatch(UserAction.clearListAllPostByUser());
    dispatch(
      UserAction.getListAllPostByIdUser({page: 1, user_uuid: dataUser?.uuid}),
    );
  }, []);

  const loadMoreComic = () => {
    if (nextPage && !isLoading) {
      dispatch(UserAction.getListPostByUser(currentpage ? currentpage + 1 : 1));
      setSize(true);
    }
  };

  const onContentSizeChange = useCallback(
    (contentWidth: number, contentHeight: number) => {
      setSizeContent(contentHeight);
      if (size) {
        setSizeContent(sizeContent + 3000);
        setSize(false);
      }
    },
    [size, sizeContent],
  );
  const listFooterComponent = useCallback(() => {
    return <ActivityIndicator color={'#F89300'} size={'large'} />;
  }, []);

  const handlePressGoback = () => {
    NavigationService.goBack();
  };
  const handlePressMessage = () => {
    NavigationService.navigate(routes.MESSAGE);
  };

  const handleFollowButtonClick = () => {
    dispatch(UserAction.postFollowRandom(dataUser?.uuid));
    setIsFollowed(!isFollowed);
  };
  const renderItem = ({item}: {item: UserType}) => (
    <ItemListProfileUSer data={item} />
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
        <TextCustom textBold title={dataUser && dataUser.fullname} />
        <Text style={styles.textBio} numberOfLines={1}>
          {dataUser?.summary || 'I am hacker'}
        </Text>
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
            {isFollowed ? 'Follow' : 'UnFollow'}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnMess} onPress={handlePressMessage}>
          <Text style={styles.textFollow}>Messenger</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity style={styles.btnAddUser}>
          <AddFriend />
        </TouchableOpacity> */}
      </View>
      {/* <View style={styles.viewExplore}>
        <FlatList
          data={dataList}
          renderItem={renderItem}
          keyExtractor={item => item.uuid}
          horizontal
          showsHorizontalScrollIndicator={false}
          snapToAlignment="start"
          snapToInterval={10}
          decelerationRate={0.5}
        />
      </View> */}

      <View style={{flex: 1}}>
        <View style={styles.viewMyPost}>
          <Text style={styles.textPost}>Post by User</Text>
        </View>
        <FlatList
          data={dataList}
          renderItem={({item}) => <ItemPostUser data={item} />}
          numColumns={3}
          keyExtractor={item => item.uuid}
          showsVerticalScrollIndicator
          onContentSizeChange={onContentSizeChange}
          onScroll={({nativeEvent}) => {
            const {contentOffset, contentSize, layoutMeasurement} = nativeEvent;
            const numberOfPixelsFromBottomThreshold = 100;
            const isNearBottom =
              contentOffset.y + layoutMeasurement.height >=
              sizeContent - numberOfPixelsFromBottomThreshold;
            console.log(
              'sỉze scroll',
              contentOffset.y + layoutMeasurement.height,
            );
            console.log('sỉze content', sizeContent);

            if (isNearBottom) {
              loadMoreComic();
            }
          }}
          ListFooterComponent={isLoading ? listFooterComponent() : <View />}
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
