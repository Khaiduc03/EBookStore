import React, {useEffect, useState, useCallback} from 'react';
import {
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
} from 'react-native';
import HeaderCustom from '../../../../components/customs/HeaderCustom';
import TextCustom from '../../../../components/customs/Text';
import {routes} from '../../../../constants';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {NavigationService} from '../../../../navigation';
import {getAuthUserProfile} from '../../../../redux';
import useStyles from '../MyProfile/styles';
import {ItemFollow, ItemListMyProfile, ItemPost} from './components';
import {
  currentPagePostByUser,
  getAllUser,
  getPostByUser,
  nextPagePostByUser,
} from '../../../../redux/selectors/user.selector';
import {UserAction} from '../../../../redux/reducer/user.reducer';
import {UserType} from '../../../../redux/types/user.type';
import {
  getIsLoading,
  getIsLoadingTopic,
} from '../../../../redux/selectors/loading.selector';

const MyProfile: React.FC = props => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsLoadingTopic);
  const [sizeContent, setSizeContent] = useState<number>(0);
  const [size, setSize] = useState<boolean>(false);
  const currentpage = useAppSelector(currentPagePostByUser);
  const nextPage = useAppSelector(nextPagePostByUser);
  const handlePressGoback = () => {
    NavigationService.goBack();
  };

  const dataUser = useAppSelector(getAllUser);
  const dataPost = useAppSelector(getPostByUser);

  useEffect(() => {
    dispatch(UserAction.getListUser());
    dispatch(UserAction.getListPostByUser(1));
  }, []);

  const renderItem = ({item}: {item: UserType}) => (
    <ItemListMyProfile data={item} />
  );
  const user = useAppSelector(getAuthUserProfile);

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

  return (
    <View style={styles.container}>
      <HeaderCustom
        title="My Profile"
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        onPressLeftIcon={handlePressGoback}
        rightIconleft={{name: 'plus-square-o', type: 'font-awesome'}}
        rightIconRight={{
          name: 'pencil',
          type: 'octicon',
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
          data={dataPost}
          renderItem={({item}) => <ItemPost data={item} />}
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

export default MyProfile;
