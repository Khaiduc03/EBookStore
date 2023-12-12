import React, {useCallback, useEffect, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  FlatList,
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Share from 'react-native-share';
import {ImageIcon} from '../../../../../../assets/svg';
import {routes} from '../../../../../../constants';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {NavigationService} from '../../../../../../navigation';
import {ForumActions, getAuthUserProfile} from '../../../../../../redux';
import {
  getCurrentPageForum,
  getListForum,
  getNextForum,
} from '../../../../../../redux/selectors/forum.selector';
import {getIsLoadingForum} from '../../../../../../redux/selectors/loading.selector';
import {ForumType} from '../../../../../../redux/types/forum.type';
import PostContent from '../ItemPostContent';
import PostHeader from '../ItemPostFooter';
import PostFooter from '../ItemPostHeader';
import useStyles from './styles';

interface ForumDataProps {
  data?: ForumType;
  isLoading?: boolean;
  loadMoreForum?: () => void;
}

const ItemListPost: React.FC<ForumDataProps> = props => {
  const dispatch = useAppDispatch();

  const dataAPI = useAppSelector(getListForum);
  const user = useAppSelector(getAuthUserProfile);
  const currentPage = useAppSelector(getCurrentPageForum);
  const nextPage = useAppSelector(getNextForum);
  const isLoading = useAppSelector(getIsLoadingForum);

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null) as any;
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = () => {
    setRefreshing(true);
    dispatch(ForumActions.clearListData());

    dispatch(ForumActions.getListData(1));
    setRefreshing(false);
  };

  useEffect(() => {
    dispatch(ForumActions.clearListData());
    dispatch(ForumActions.getListData(1));
  }, []);

  const loadMoreForum = () => {
    if (nextPage && !isLoading) {
      dispatch(ForumActions.getListData(currentPage ? currentPage + 1 : 1));
      console.log('nextPage', nextPage);
    }
  };

  const openModal = (image: any) => {
    setShowModal(true);
    setSelectedImage(image);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const onShare = async () => {
    const options: any = {
      url: 'https://ComicVerse.com',
      message: 'ComicVerse app đọc truyện tích hợp mạng xã hội ^__^ ! : \n',
    };
    try {
      const res = await Share.open(options);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const listFooterComponent = useCallback(() => {
    return (
      <ActivityIndicator
        color={'#F89300'}
        size={'large'}
        style={{marginBottom: 22}}
      />
    );
  }, []);

  const handleDeletePost = (forum_uuid: any) => {
    dispatch(ForumActions.deletePost({forum_uuid: forum_uuid}));
  };

  const styles = useStyles();

  const renderItem = ({item}: {item: ForumType}) => {
    const handleLike_UnlikePress = (forum_uuid: any) => {
      if (item.is_liked) {
        dispatch(ForumActions.deleteLikeForum(forum_uuid));
      } else {
        dispatch(ForumActions.postLikeForum(forum_uuid));
      }
    };

    return (
      <View>
        <View style={styles.content}>
          <PostHeader
            userUUID={item.user_uuid}
            userFullName={item.user_fullname}
            userAvatar={item.user_avatar?.toString()}
            createdAt={item.created_at}
            onDeletePost={() => handleDeletePost(item.uuid)}
          />
        </View>
        <PostContent
          content={item.content}
          images={item.images}
          onImagePress={index => {
            openModal(item.images[index]);
          }}
          onClosePress={closeModal}
          showModal={showModal}
          setShowModal={setShowModal}
          selectedImage={selectedImage}
        />
        <PostFooter
          isLiked={item.is_liked}
          likeCount={item.like_count}
          commentCount={item.comment_count}
          onLikePress={() => handleLike_UnlikePress(item.uuid)}
          onCommentPress={() =>
            NavigationService.navigate(routes.COMMENT_FORUM, {
              uuid: item.uuid,
              comment_count: item.comment_count,
            })
          }
          onSharePress={onShare}
        />
      </View>
    );
  };

  return (
    <FlatList
      data={dataAPI}
      renderItem={renderItem}
      onScroll={({nativeEvent}) => {
        const {contentOffset, contentSize, layoutMeasurement} = nativeEvent;
        const numberOfPixelsFromBottomThreshold = 100;
        const isNearBottom =
          contentOffset.y + layoutMeasurement.height >=
          contentSize.height - numberOfPixelsFromBottomThreshold;

        if (isNearBottom && !isLoading) {
          loadMoreForum();
        }
      }}
      initialNumToRender={10}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={() => {
        return (
          <View style={styles.header}>
            <TouchableOpacity
              onPress={() => NavigationService.navigate(routes.MYPROFILE)}>
              {user.image_url && (
                <Image
                  style={styles.image}
                  source={{uri: user.image_url.toString()}}
                />
              )}
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.buttonHeader}
              onPress={() => NavigationService.navigate(routes.CREATE_POST)}>
              <Text style={styles.textButtonHeader}>Bạn đang nghĩ gì?</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => NavigationService.navigate(routes.CREATE_POST)}>
              <ImageIcon />
            </TouchableOpacity>
          </View>
        );
      }}
      ListFooterComponent={isLoading ? listFooterComponent() : <View />}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#F89300']}
        />
      }
    />
  );
};

export default ItemListPost;
