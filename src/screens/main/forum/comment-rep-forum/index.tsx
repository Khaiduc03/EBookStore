import {
  FlatList,
  TextInput,
  SafeAreaView,
  ActivityIndicator,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {ItemComment} from './components';
import useStyles from './styles';
import {Icon, Input} from '@rneui/themed';
import {HeaderRepComment} from './components';
import {useRoute} from '@react-navigation/native';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {CommentChapterAction} from '../../../../redux/reducer/comment.chapter.reducer';
import {getDataDetailChapter} from '../../../../redux/selectors/comic.selector';
import {
  getCurrenPageRepCommentChapter,
  getListRepCommentChapter,
  getNextPageRepCommentChapter,
} from '../../../../redux/selectors/comment.chapter.selector';
import {CommentChapterType} from '../../../../redux/types/comment.chapter.type';
import {getIsLoadingPage} from '../../../../redux/selectors/loading.selector';
import FastImage from 'react-native-fast-image';
import moment from 'moment';
import {CommentForumType} from '../../../../redux/types/comment.forum.type';

interface ParentsUuidComment {
  parents_comment_uuid: string;
  data: CommentForumType;
}

const CommentRepForum = () => {
  const route = useRoute();
  const parents_comment_uuid = (route.params as ParentsUuidComment)
    .parents_comment_uuid;
  const data = (route.params as ParentsUuidComment).data;
  const [value, setvalue] = useState('');

  const dispatch = useAppDispatch();
  const dataDetailChapter = useAppSelector(getDataDetailChapter);
  const dataRepComment = useAppSelector(getListRepCommentChapter);
  const isLoading = useAppSelector(getIsLoadingPage);
  const flatListRef = useRef<FlatList<CommentChapterType>>(null);
  const canNext = useAppSelector(getNextPageRepCommentChapter);
  const currentPage = useAppSelector(getCurrenPageRepCommentChapter);
  const [sizeContent, setSizeContent] = useState<number>(0);
  const [size, setSize] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);

  const [user, setUser] = useState<string>('');

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
    chapter_uuid,
    like_count,
    type,
    uuid,
    is_like,
  } = data;
  const [countComment, setCountComment] = useState<number>(re_comment_count);
  const [like, setLike] = useState<Boolean>(is_like);
  const [countLike, setCountLike] = useState<number>(like_count);

  useEffect(() => {
    dispatch(
      CommentChapterAction.getRepCommentChapter({
        parents_comment_uuid: parents_comment_uuid,
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
    setvalue('Reply ' + '@' + text + ':');
  };

  const onPressPostComment = () => {
    dispatch(
      CommentChapterAction.postRepCommentChapter({
        chapter_uuid: dataDetailChapter && dataDetailChapter[0].chapter_uuid,
        comment: value,
        parents_comment_uuid: parents_comment_uuid,
      }),
    );
    setCountComment(countComment + 1);
    setvalue('');
  };
  const loadMoreComic = () => {
    if (canNext && !isLoading) {
      dispatch(
        CommentChapterAction.getRepCommentChapter({
          parents_comment_uuid: parents_comment_uuid,
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
        CommentChapterAction.postUnlikeCommentChapter({
          comment_uuid: uuid,
        }),
      );
      setLike(false);
      setCountLike(countLike - 1);
    } else {
      dispatch(
        CommentChapterAction.postLikeCommentChapter({
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
    item: CommentChapterType;
    index: number;
  }) => {
    return (
      <ItemComment setUserRep={setUserRep} setOpen={openInput} data={item} />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataRepComment}
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
                <Text style={styles.day}>
                  {moment(created_at).format('YYYY-MM-DD-HH:mm') + ''}
                </Text>
                <Text style={styles.commentStyle}>{comment}</Text>
                <View style={styles.repContent}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Icon
                      name="chatbox-outline"
                      type="ionicon"
                      color={styles.iconStyle.color}
                      size={15}
                    />
                    <Text style={styles.numberRepStyle}>{countComment}</Text>

                    <TouchableOpacity
                      onPress={onPressLikeComment}
                      style={styles.like}>
                      <Icon
                        name="thumbs-up"
                        type="feather"
                        color={like ? '#F89300' : styles.iconStyle.color}
                        size={15}
                      />
                      <Text style={styles.numberRepStyle}>{countLike}</Text>
                    </TouchableOpacity>
                  </View>
                  <Icon
                    name="ellipsis-vertical"
                    type="ionicon"
                    size={15}
                    color={styles.iconStyle.color}
                  />
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
            'sỉze scroll',
            contentOffset.y + layoutMeasurement.height,
          );
          console.log('sỉze content', sizeContent);

          if (isNearBottom) {
            loadMoreComic();
          }
        }}
        ListFooterComponent={isLoading ? listFooterComponent() : <View />}
        showsVerticalScrollIndicator={false}
        keyExtractor={item => item.uuid}
        renderItem={renderItem}
        contentContainerStyle={{paddingVertical: 65}}
      />

      <TextInput
        ref={TextInputRef}
        value={value}
        onChangeText={text => setvalue(text)}
        placeholder={'Shoot your comment...'}
        onSubmitEditing={onPressPostComment}
        returnKeyType="send"
        style={styles.inputStyle}
      />

      <HeaderRepComment />
    </SafeAreaView>
  );
};

export default CommentRepForum;
