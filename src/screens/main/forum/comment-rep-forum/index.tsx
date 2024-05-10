import {useRoute} from '@react-navigation/native';
import {Icon} from '@rneui/themed';
import moment from 'moment';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Keyboard,
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
import ItemRepCommnent from './components/ItemRepComment';
import useStyles from './styles';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import CustomAwesomeAlert from './components/AwesomeAlertProps/CustomAwesomeAlert';

interface ParentsUuidComment {
  parents_comment_uuid: string;
  data: CommentForumType;
}

const CommentRepForum = () => {
  const styles = useStyles();
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

  const TextInputRef = useRef<TextInput>(null);
  const {
    comment,
    created_at,
    fullname,
    re_comment_count,
    user_avatar,
    like_count,
    user_uuid,
    forum_uuid,
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

  const setCountRepComment = () => {
    setCountComment(countComment - 1);
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
          setCountRepComment={setCountRepComment}
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
    <View style={styles.container}>
      <FlatList
        key={dataRepComment?.length}
        data={dataRepComment}
        renderItem={renderItem}
        initialNumToRender={21}
        ListHeaderComponent={() => {
          return (
            <View style={styles.parentCommentStyle}>
              <FastImage
                style={styles.avatarStyle}
                source={{
                  uri: user_avatar
                    ? user_avatar
                    : 'https://cdn3d.iconscout.com/3d/premium/thumb/colombian-people-9437719-7665524.png?f=webp',
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
                      <Text
                        style={[
                          styles.numberRepStyle,
                          {
                            color: like
                              ? '#F89300'
                              : styles.iconStyleBlur.color,
                          },
                        ]}>
                        {countLike}
                      </Text>
                    </TouchableOpacity>
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
          console.log('size content', sizeContent);

          if (isNearBottom) {
            loadMoreComic();
          }
        }}
        ListFooterComponent={isLoading ? listFooterComponent() : <View />}
        showsVerticalScrollIndicator={false}
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
    </View>
  );
};

export default CommentRepForum;
