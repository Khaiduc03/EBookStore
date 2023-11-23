import {
  FlatList,
  TextInput,
  SafeAreaView,
  ActivityIndicator,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {HeaderComment, ItemComment} from './components';
import useStyles from '../RepComments/styles';

import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {CommentChapterAction} from '../../../../redux/reducer/comment.chapter.reducer';

import {getDataDetailChapter} from '../../../../redux/selectors/comic.selector';
import {
  getCurrenPageCommentChapter,
  getListComment,
  getNextPageCommentChapter,
} from '../../../../redux/selectors/comment.chapter.selector';
import {CommentChapterType} from '../../../../redux/types/comment.chapter.type';
import {getIsLoadingPage} from '../../../../redux/selectors/loading.selector';

const CommentComic = () => {
  const styles = useStyles();
  const dataDetailChapter = useAppSelector(getDataDetailChapter);
  const dataComment = useAppSelector(getListComment);
  const canNext = useAppSelector(getNextPageCommentChapter);
  const currentPage = useAppSelector(getCurrenPageCommentChapter);
  const [value, setvalue] = useState('');
  const isLoading = useAppSelector(getIsLoadingPage);
  const flatListRef = useRef<FlatList<CommentChapterType>>(null);

  const [sizeContent, setSizeContent] = useState<number>(0);
  const [size, setSize] = useState<boolean>(false);
  console.log('canNext', canNext);
  console.log('isLoading', isLoading);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(
      CommentChapterAction.getCommentChapter({
        chapter_uuid: dataDetailChapter && dataDetailChapter[0].chapter_uuid,
        page: 1,
      }),
    );
  }, []);

  const onPressPostComment = () => {
    dispatch(
      CommentChapterAction.postCommentChapter({
        chapter_uuid: dataDetailChapter && dataDetailChapter[0].chapter_uuid,
        comment: value,
      }),
    );
  };
  const loadMoreComic = () => {
    if (canNext && !isLoading) {
      dispatch(
        CommentChapterAction.getCommentChapter({
          chapter_uuid: dataDetailChapter && dataDetailChapter[0].chapter_uuid,
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

  const renderItem = ({
    item,
    index,
  }: {
    item: CommentChapterType;
    index: number;
  }) => {
    return <ItemComment data={item} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={dataComment}
        keyExtractor={item => item.uuid}
        renderItem={renderItem}
        contentContainerStyle={{paddingVertical: 65, paddingHorizontal: 16}}
        initialNumToRender={21}
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
      <TextInput
        value={value}
        onChangeText={text => setvalue(text)}
        placeholder="Shoot your comment..."
        onSubmitEditing={onPressPostComment}
        returnKeyType="send"
        style={styles.inputStyle}
      />
      <HeaderComment />
    </SafeAreaView>
  );
};

export default CommentComic;
