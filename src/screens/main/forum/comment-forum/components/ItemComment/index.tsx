import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import FastImage from 'react-native-fast-image';
import {Icon} from '@rneui/base';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import {CommentChapterType} from '../../../../../../redux/types/comment.chapter.type';
import {CommentChapterAction} from '../../../../../../redux/reducer/comment.chapter.reducer';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {CommentForumType} from '../../../../../../redux/types/comment.forum.type';

interface CommentDataProps {
  data: Partial<CommentForumType>;
}

const ItemCommnent: React.FunctionComponent<CommentDataProps> = props => {
  const {
    uuid,
    created_at,
    updated_at,
    deleted_at,
    comment,
    parents_comment_uuid,
    chapter_uuid,
    user_uuid,
    type,
    forum_uuid,
    fullname,
    user_avatar,
    re_comment_count,
    like_count,
    is_liked,
  } = props.data;

  const styles = useStyles();

  const dispatch = useAppDispatch();

  const onPressLikeComment = () => {
    if (is_liked) {
      dispatch(
        CommentChapterAction.postUnlikeCommentChapter({comment_uuid: uuid}),
      );
    } else {
      dispatch(
        CommentChapterAction.postLikeCommentChapter({comment_uuid: uuid}),
      );
    }
  };

  return (
    <View style={styles.container}>
      <FastImage
        style={styles.avatarStyle}
        source={{
          uri: user_avatar,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.nameStyle}>{fullname}</Text>
        <Text style={styles.day}>{created_at + ''}</Text>
        <Text style={styles.commentStyle}>{comment}</Text>
        <View style={styles.repContent}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                NavigationService.navigate(routes.COMMENT_REP, {
                  parents_comment_uuid: uuid,
                  dataFirst: props.data,
                }),
                  dispatch(CommentChapterAction.clearRepCommentChapter());
              }}
              style={styles.rep}>
              <Icon
                name="chatbox-outline"
                type="ionicon"
                color={styles.iconStyleBlur.color}
                size={15}
              />
              <Text style={styles.numberRepStyle}>
                {re_comment_count ? re_comment_count : '0'}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressLikeComment} style={styles.like}>
              <IconMaterialIcons
                name={is_liked ? 'thumb-up-alt' : 'thumb-up-off-alt'}
                color={
                  is_liked
                    ? styles.iconStyleFocus.color
                    : styles.iconStyleBlur.color
                }
                size={15}
              />
              <Text style={styles.numberRepStyle}>
                {like_count ? like_count : '0'}
              </Text>
            </TouchableOpacity>
          </View>
          <Icon
            name="ellipsis-vertical"
            type="ionicon"
            size={15}
            color={styles.iconStyleBlur.color}
          />
        </View>
      </View>
    </View>
  );
};

export default ItemCommnent;
