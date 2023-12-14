import {useRoute} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import moment from 'moment';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import FastImage from 'react-native-fast-image';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {getAuthUserProfile} from '../../../../redux';
import {CommentForumAction} from '../../../../redux/reducer/comment.forum.reducer';
import {
  getCurrenPageRepCommentForum,
  getListRepCommentForum,
  getNextPageRepCommentForum,
} from '../../../../redux/selectors/comment.forum.selector';
import {getIsLoadingPage} from '../../../../redux/selectors/loading.selector';
import {CommentForumType} from '../../../../redux/types/comment.forum.type';
import {HeaderRepComment} from './components';
import ItemRepCommnent from './components/ItemComment';
import useStyles from './styles';

interface ParentsUuidComment {
  parents_comment_uuid: string;
  data: CommentForumType;
}

const CommentRepForum = () => {
  const route = useRoute();

  const data = (route.params as ParentsUuidComment).data;

  const [value, setvalue] = useState('');

  const dispatch = useAppDispatch();
  const dataRepComment = useAppSelector(getListRepCommentForum);
  const isLoading = useAppSelector(getIsLoadingPage);
  const flatListRef = useRef<FlatList<CommentForumType>>(null);
  const canNext = useAppSelector(getNextPageRepCommentForum);
  const currentPage = useAppSelector(getCurrenPageRepCommentForum);
  const [sizeContent, setSizeContent] = useState<number>(0);
  const [size, setSize] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const [showAlert, setShowAlert] = useState(false);

  const user = useAppSelector(getAuthUserProfile);

  console.log('======>', open);

  console.log('canNext', canNext);
  console.log('isLoading', isLoading);
  const TextInputRef = useRef<TextInput>(null);

  const styles = useStyles();

  const {
    comment,
    created_at,
    fullname,
    re_comment_count,
    user_avatar,
    like_count,
    user_uuid,
    parents_comment_uuid,
    forum_uuid,
    type,
    uuid,
    is_like,
  } = data;

  const [countComment, setCountComment] = useState<number>(re_comment_count);
  const [like, setLike] = useState<Boolean>(is_like);
  const [countLike, setCountLike] = useState<number>(like_count);

  useEffect(() => {
    dispatch(
      CommentForumAction.getRepCommentForum({
        parents_comment_uuid: uuid,
        page: 1,
      }),
    );
  }, []);
  useEffect(() => {
    if (open) {
      TextInputRef.current?.focus();
    }
  }, [open]);

  const openInput = () => {
    setOpen(!open);
  };

  const setUserRep = (text: string) => {
    setvalue('Reply ' + '@' + text + ': ');
  };

  const onPressPostComment = () => {
    dispatch(
      CommentForumAction.postRepCommentForum({
        forum_uuid: forum_uuid,
        comment: value,
        parents_comment_uuid: uuid,
      }),
    );
    setCountComment(countComment + 1);
    setvalue('');
    console.log(
      'forum_uuid:  ' +
        forum_uuid +
        '\ncomment:  ' +
        value +
        '\nparents_comment_uuid:  ' +
        forum_uuid,
    );
  };

  const onPressDeleteComment = () => {
    dispatch(CommentForumAction.deleteCommentForum({comment_uuid: uuid}));
    dispatch(
      CommentForumAction.getRepCommentForum({
        parents_comment_uuid: forum_uuid,
        page: currentPage ? currentPage + 1 : 1,
      }),
    );
  };

  const loadMoreComic = () => {
    if (canNext && !isLoading) {
      dispatch(
        CommentForumAction.getRepCommentForum({
          parents_comment_uuid: forum_uuid,
          page: currentPage ? currentPage + 1 : 1,
        }),
      );
      setSize(true);
    }
  };

  const onContentSizeChange = useCallback(
    (contentWidth: number, contentHeight: number) => {
      flatListRef.current?.setNativeProps({
        contentSize: {width: contentWidth, height: contentHeight},
      });
      setSizeContent(contentHeight);
      if (size) {
        setSizeContent(sizeContent + 3000);
        setSize(false);
      }
    },
    [size, sizeContent],
  );

  const onPressLikeComment = () => {
    if (like) {
      dispatch(
        CommentForumAction.deleteLikeCommentForum({
          comment_uuid: uuid,
        }),
      );
      setLike(false);
      setCountLike(countLike - 1);
    } else {
      dispatch(
        CommentForumAction.postLikeCommentForum({
          comment_uuid: uuid,
        }),
      );
      setLike(true);
      setCountLike(countLike + 1);
    }
  };

  const listFooterComponent = useCallback(() => {
    return <ActivityIndicator color={'#F89300'} size={'large'} />;
  }, []);

  const renderItem = ({
    item,
    index,
  }: {
    item: CommentForumType;
    index: number;
  }) => {
    return (
      <View>
        <ItemRepCommnent
          setUserRep={setUserRep}
          setOpen={openInput}
          data={item}
        />
      </View>
    );
  };

  const getTimeElapsed = () => {
    const now = moment();
    const postTime = moment(created_at);
    const duration = moment.duration(now.diff(postTime));

    if (duration.asMinutes() < 1) {
      return 'Just now';
    } else if (duration.asHours() < 1) {
      return `${Math.floor(duration.asMinutes())}m ago`;
    } else if (duration.asDays() < 1) {
      return `${Math.floor(duration.asHours())}h ago`;
    } else {
      return `${Math.floor(duration.asDays())}d ago`;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataRepComment}
        keyExtractor={item => item.uuid}
        initialNumToRender={21}
        ListHeaderComponent={() => {
          return (
            <View style={styles.parentCommentStyle}>
              <FastImage
                style={styles.avatarStyle}
                source={{
                  uri: user_avatar,
                }}
              />
              <View style={styles.content}>
                <Text style={styles.nameStyle}>{fullname}</Text>
                <Text style={styles.day}>{getTimeElapsed()}</Text>
                <Text style={styles.commentStyle}>{comment}</Text>
                <View style={styles.repContent}>
                  <View style={styles.viewItemBtn}>
                    <Icon
                      name="comment"
                      type="font-awesome-5"
                      color={styles.iconStyleBlur.color}
                      size={15}
                    />
                    <Text style={styles.numberRepStyle}>{countComment}</Text>

                    <TouchableOpacity
                      onPress={onPressLikeComment}
                      style={styles.like}>
                      <IconMaterialIcons
                        name={like ? 'thumb-up-alt' : 'thumb-up-off-alt'}
                        color={
                          like
                            ? styles.iconStyleFocus.color
                            : styles.iconStyleBlur.color
                        }
                        size={15}
                      />
                      <Text style={styles.numberRepStyle}>{countLike}</Text>
                    </TouchableOpacity>

                    {user.uuid === user_uuid && (
                      <TouchableOpacity
                        onPress={() => {
                          setShowAlert(!showAlert);
                        }}>
                        <Icon
                          name="trash-outline"
                          type="ionicon"
                          size={15}
                          color={styles.iconStyleBlur.color}
                        />
                        <AwesomeAlert
                          show={showAlert}
                          showProgress={false}
                          title="Delete Your Comment 😕"
                          message="Are you sure you want to delete your comment?"
                          closeOnTouchOutside={true}
                          closeOnHardwareBackPress={false}
                          showCancelButton={true}
                          showConfirmButton={true}
                          cancelText="No, cancel"
                          cancelButtonColor="blue"
                          confirmText="Yes, delete it"
                          confirmButtonColor="red"
                          onCancelPressed={() => {
                            setShowAlert(false);
                          }}
                          onConfirmPressed={() => {
                            setShowAlert(false);
                            onPressDeleteComment();
                          }}
                          titleStyle={styles.textTitleAlert}
                          messageStyle={styles.textMessageAlert}
                          cancelButtonTextStyle={styles.textCancelAlert}
                          confirmButtonTextStyle={styles.textConfirmAlert}
                          contentContainerStyle={styles.contentContainerStyle}
                        />
                      </TouchableOpacity>
                    )}
                  </View>
                </View>
              </View>
            </View>
          );
        }}
        onContentSizeChange={onContentSizeChange}
        onScroll={({nativeEvent}) => {
          const {contentOffset, contentSize, layoutMeasurement} = nativeEvent;
          const numberOfPixelsFromBottomThreshold = 100;
          const isNearBottom =
            contentOffset.y + layoutMeasurement.height >=
            sizeContent - numberOfPixelsFromBottomThreshold;
          console.log(
            'size scroll',
            contentOffset.y + layoutMeasurement.height,
          );
          console.log('sỉze content', sizeContent);

          if (isNearBottom) {
            loadMoreComic();
          }
        }}
        ListFooterComponent={isLoading ? listFooterComponent() : <View />}
        showsVerticalScrollIndicator={false}
        renderItem={renderItem}
        contentContainerStyle={{paddingVertical: 65}}
      />

      <View style={styles.viewTextInput}>
        <TextInput
          ref={TextInputRef}
          value={value}
          onChangeText={text => setvalue(text)}
          placeholder="Shoot your comment..."
          placeholderTextColor={'#939297'}
          onSubmitEditing={onPressPostComment}
          returnKeyType="send"
          style={styles.textInput}
        />
      </View>

      <HeaderRepComment currentRepCommentCount={dataRepComment?.length ?? 0} />
    </SafeAreaView>
  );
};

export default CommentRepForum;
