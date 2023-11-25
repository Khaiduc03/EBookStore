import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import useStyles from './styles';
import FastImage from 'react-native-fast-image';
import {Icon} from '@rneui/base';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import {CommentChapterType} from '../../../../../../redux/types/comment.chapter.type';
import {useAppDispatch} from '../../../../../../hooks';
import {CommentChapterAction} from '../../../../../../redux/reducer/comment.chapter.reducer';
interface CommentDataProps {
  data: CommentChapterType;
}

const ItemCommnent: React.FunctionComponent<CommentDataProps> = props => {
  const {
    comment,
    created_at,
    fullname,
    re_comment_count,
    user_avatar,
    parents_comment_uuid,
    chapter_uuid,
    like_count,
    type,
    uuid,
    is_like,
  } = props.data;
  const styles = useStyles();
  const dispatch = useAppDispatch();

  const onPressLikeComment = () => {
    if (is_like) {
      dispatch(
        CommentChapterAction.postUnlikeCommentChapter({
          comment_uuid: uuid,
          type: 'rep',
        }),
      );
    } else {
      dispatch(
        CommentChapterAction.postLikeCommentChapter({
          comment_uuid: uuid,
          type: 'rep',
        }),
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
            <Icon
              name="chatbox-outline"
              type="ionicon"
              color={styles.iconStyle.color}
              size={15}
            />

            <TouchableOpacity onPress={onPressLikeComment} style={styles.like}>
              <Icon
                name="thumbs-up"
                type="feather"
                color={is_like ? '#F89300' : styles.iconStyle.color}
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
            color={styles.iconStyle.color}
          />
        </View>
      </View>
    </View>
  );
};

export default ItemCommnent;
