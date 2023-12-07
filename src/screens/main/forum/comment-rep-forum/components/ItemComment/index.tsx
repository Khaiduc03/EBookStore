import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import useStyles from './styles';
import FastImage from 'react-native-fast-image';
import {Icon} from '@rneui/base';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import {CommentChapterType} from '../../../../../../redux/types/comment.chapter.type';
import {useAppDispatch} from '../../../../../../hooks';
import {CommentChapterAction} from '../../../../../../redux/reducer/comment.chapter.reducer';
import moment from 'moment';
import {CommentForumAction} from '../../../../../../redux/reducer/comment.forum.reducer';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
interface CommentDataProps {
  data: CommentChapterType;
  setOpen: () => void;
  setUserRep: (text: string) => void;
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

  const commentIncludesFullname = comment.includes(fullname);
  const fullnameIndex = comment.indexOf(fullname);

  const textBeforeFullname = comment.slice(0, fullnameIndex);

  const onPressLikeComment = () => {
    if (is_like) {
      dispatch(
        CommentForumAction.deleteLikeCommentForum({
          comment_uuid: uuid,
        }),
      );
    } else {
      dispatch(
        CommentForumAction.postLikeCommentForum({
          comment_uuid: uuid,
        }),
      );
    }
  };

  const onPressRep = (text: string) => {
    props.setUserRep(text);
    props.setOpen();
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
        <Text style={styles.day}>
          {moment(created_at).format('YYYY-MM-DD-HH:mm') + ''}
        </Text>
        <Text style={styles.commentStyle}>
          {commentIncludesFullname ? (
            <>
              <Text style={{color: 'blue'}}>{textBeforeFullname}</Text>

              <Text style={{color: 'blue'}}>{fullname}</Text>

              {comment.slice(fullnameIndex + fullname.length)}
            </>
          ) : (
            comment
          )}
        </Text>
        <View style={styles.repContent}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => onPressRep(fullname)}
              style={styles.rep}>
              <Icon
                name="chatbox-outline"
                type="ionicon"
                color={styles.iconStyleBlur.color}
                size={15}
              />
            </TouchableOpacity>

            <TouchableOpacity onPress={onPressLikeComment} style={styles.like}>
              <IconMaterialIcons
                name={is_like ? 'thumb-up-alt' : 'thumb-up-off-alt'}
                color={
                  is_like
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
