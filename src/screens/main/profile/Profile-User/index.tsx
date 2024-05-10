import React, {useCallback, useEffect, useState} from 'react';
import {FlatList, ScrollView, Text, TouchableOpacity, View} from 'react-native';
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
import {ItemFollowType, UserType} from '../../../../redux/types/user.type';
import {UserAction} from '../../../../redux/reducer/user.reducer';
import {getIsLoadingTopic} from '../../../../redux/selectors/loading.selector';
import {ActivityIndicator} from 'react-native';
import {ChatActions} from '../../../../redux/reducer/chat.reducer';
import {CustomToastBottom} from '../../../../utils';
interface RouteParamsProfile {
  data?: UserType;
  dataFollow?: ItemFollowType;
  dataFollwer?: ItemFollowType;
  uuidForum?: string;
}

const ProfileUser: React.FC = props => {
  const route = useRoute();
  const dataUser = (route.params as RouteParamsProfile).data;
  const dataFollow = (route.params as RouteParamsProfile).dataFollow;
  const dataFollwer = (route.params as RouteParamsProfile).dataFollwer;
  const uuidForum = (route.params as RouteParamsProfile).uuidForum;
  const dataList = useAppSelector(getAllPostByIdUser);
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoadingTopic);
  const [sizeContent, setSizeContent] = useState<number>(0);
  const [size, setSize] = useState<boolean>(false);
  const currentpage = useAppSelector(currentPageAllPostByIdUser);
  const nextPage = useAppSelector(nextPageAllPostIdByUser);

  console.log(nextPage);
  console.log(currentpage);

  const dataUserById = useAppSelector(getUserById);
  const [isFollowed, setIsFollowed] = useState<boolean>(
    dataFollow
      ? dataFollow?.is_follower
      : dataUser
      ? dataUser.is_following
      : dataFollwer
      ? dataFollwer.is_following
      : false,
  );

  const styles = useStyles();

  useEffect(() => {
    dispatch(
      UserAction.getUserById(
        dataUser?.uuid! ||
          dataFollow?.user_follower_uuid! ||
          dataFollwer?.user_following_uuid! ||
          uuidForum!,
      ),
    );
    dispatch(UserAction.clearListAllPostByUser());
    dispatch(
      UserAction.getListAllPostByIdUser({
        page: 1,
        user_uuid:
          dataUser?.uuid ||
          dataFollow?.user_follower_uuid ||
          dataFollwer?.user_following_uuid! ||
          uuidForum!,
      }),
    );
  }, [
    dataUser?.uuid! ||
      dataFollow?.user_follower_uuid ||
      dataFollwer?.user_following_uuid! ||
      uuidForum!,
  ]);

  const loadMoreComic = () => {
    if (nextPage && !isLoading) {
      dispatch(
        UserAction.getListAllPostByIdUser({
          page: currentpage ? currentpage + 1 : 1,
          user_uuid: dataUserById ? dataUserById[0].uuid : '',
        }),
      );
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
    if (dataUserById && dataUserById[0].uuid) {
      dispatch(
        ChatActions.handleCreateConversation({
          joined_uuid: dataUserById && dataUserById[0].uuid,
        }),
      );
    } else {
      CustomToastBottom('Server have error, please try again later');
    }
  };

  const handleFollowButtonClick = () => {
    dispatch(
      UserAction.postFollowRandom(
        dataUser?.uuid ||
          dataFollow?.user_follower_uuid ||
          dataFollwer?.user_following_uuid ||
          uuidForum,
      ),
    );
    setIsFollowed(!isFollowed);
  };
  const renderItem = ({item}: {item: UserType}) => (
    <ItemListProfileUSer data={item} />
  );

  return (
    <ScrollView
      onContentSizeChange={onContentSizeChange}
      onScroll={({nativeEvent}) => {
        const {contentOffset, contentSize, layoutMeasurement} = nativeEvent;
        const numberOfPixelsFromBottomThreshold = 100;
        const isNearBottom =
          contentOffset.y + layoutMeasurement.height >=
          sizeContent - numberOfPixelsFromBottomThreshold;

        if (isNearBottom) {
          loadMoreComic();
        }
      }}
      style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        title="Profile User"
        onPressLeftIcon={handlePressGoback}
        rightIconRight={{name: 'ellipsis-vertical', type: 'ionicon'}}
      />
      <View>
        <ItemFollow data={dataUserById && dataUserById[0]} />
      </View>
      <View style={styles.nameUser}>
        <TextCustom
          textBold
          title={(dataUserById && dataUserById[0].fullname) || 'Anonymo'}
        />
        <Text style={styles.textBio} numberOfLines={1}>
          {(dataUserById && dataUserById[0].summary) || 'Biography here!'}
        </Text>
      </View>
      <View style={styles.viewbtnFollow}>
        <TouchableOpacity
          style={[
            styles.btnFollow,
            {
              backgroundColor: isFollowed
                ? theme?.lightColors?.grey5
                : theme?.lightColors?.blue,
            },
          ]}
          onPress={handleFollowButtonClick}>
          <Text style={styles.textFollow}>
            {isFollowed ? 'Unfollow' : 'Follow'}
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
          scrollEnabled={false}
          keyExtractor={item => item.uuid}
          showsVerticalScrollIndicator
          ListFooterComponent={isLoading ? listFooterComponent() : <View />}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileUser;
