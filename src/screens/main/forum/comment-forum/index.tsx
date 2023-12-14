import {useRoute} from '@react-navigation/native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  TextInput,
  View,
} from 'react-native';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {CommentForumAction} from '../../../../redux/reducer/comment.forum.reducer';
import {
  getCurrenPageCommentForum,
  getCurrenPageRepCommentForum,
  getListCommentForum,
  getNextPageCommentForum,
} from '../../../../redux/selectors/comment.forum.selector';
import {getIsLoadingPage} from '../../../../redux/selectors/loading.selector';
import {CommentForumType} from '../../../../redux/types/comment.forum.type';
import {HeaderComment, ItemComment} from './components';
import useStyles from './styles';

const CommentForum: React.FC = () => {
  const styles = useStyles();
  const route = useRoute();

  const uuid = (route.params as {uuid?: CommentForumType})?.uuid;

  const dataComment = useAppSelector(getListCommentForum);
  const canNext = useAppSelector(getNextPageCommentForum);
  const currentPage = useAppSelector(getCurrenPageCommentForum);
  const currentPageRep = useAppSelector(getCurrenPageRepCommentForum);
  const [value, setvalue] = useState('');
  const [valueRep, setvalueRep] = useState('');
  const isLoading = useAppSelector(getIsLoadingPage);
  const flatListRef = useRef<FlatList<CommentForumType>>();
  const [showTextInput, setShowTextInput] = useState(true);
  const [showTextInputRep, setShowTextInputRep] = useState(false);

  const [sizeContent, setSizeContent] = useState<number>(0);
  const [size, setSize] = useState<boolean>(false);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(
      CommentForumAction.getCommentForum({
        forum_uuid: uuid,
        page: 1,
      }),
    );
    dispatch(
      CommentForumAction.getRepCommentForum({
        parents_comment_uuid: uuid,
        page: currentPageRep ? currentPageRep + 1 : 1,
      }),
    );
  }, []);

  const onPressPostComment = () => {
    dispatch(
      CommentForumAction.postCommentForum({
        forum_uuid: uuid,
        comment: value,
      }),
    );
    console.log('forum_uuid: ', uuid, '\ncomment: ', value);
    setvalue('');
  };

  const onPressPostRepComment = (item: CommentForumType) => {
    dispatch(
      CommentForumAction.postRepCommentForum({
        forum_uuid: item.forum_uuid,
        comment: valueRep,
        parents_comment_uuid: uuid,
      }),
    );

    setvalueRep('');
    setShowTextInput(true);
    setShowTextInputRep(false);
    // setCountComment(countComment + 1);
    console.log(
      'forum_uuid:  ' +
        item.forum_uuid +
        '\ncomment:  ' +
        value +
        '\nparents_comment_uuid:  ' +
        uuid,
    );
  };

  const loadMoreComic = () => {
    if (canNext && !isLoading) {
      dispatch(
        CommentForumAction.getCommentForum({
          forum_uuid: uuid,
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

  const listFooterComponent = useCallback(() => {
    return <ActivityIndicator color={'#F89300'} size={'large'} />;
  }, []);

  const onFocusTextInput = () => {
    setShowTextInput(false);
  };

  const onBlurTextInput = () => {
    setShowTextInput(true);
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: CommentForumType;
    index: number;
  }) => {
    return (
      <ItemComment
        data={item}
        replyText={valueRep}
        onChangeText={text => setvalueRep(text)}
        onReplyPress={() => onPressPostRepComment(item)}
        showTextInput={showTextInput}
        showTextInputRep={showTextInputRep}
        onFocusTextInput={onFocusTextInput}
        onBlurTextInput={onBlurTextInput}
      />
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        key={dataComment?.length}
        data={dataComment}
        keyExtractor={item => item.uuid}
        renderItem={renderItem}
        contentContainerStyle={{paddingVertical: 65, paddingHorizontal: 16}}
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
        ListFooterComponent={isLoading ? listFooterComponent() : <View />}
        showsVerticalScrollIndicator={false}
      />

      {showTextInput && (
        <View style={styles.viewTextInput}>
          <TextInput
            value={value}
            onChangeText={text => setvalue(text)}
            placeholder="Shoot your comment..."
            placeholderTextColor={'#939297'}
            onSubmitEditing={onPressPostComment}
            returnKeyType="send"
            style={styles.textInput}
          />
        </View>
      )}

      <HeaderComment currentCommentCount={dataComment?.length ?? 0} />
    </SafeAreaView>
  );
};

export default CommentForum;
