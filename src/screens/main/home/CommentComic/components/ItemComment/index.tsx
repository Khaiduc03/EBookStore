import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';
import FastImage from 'react-native-fast-image';
import {Icon} from '@rneui/base';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import {CommentChapterType} from '../../../../../../redux/types/comment.chapter.type';
import {CommentChapterAction} from '../../../../../../redux/reducer/comment.chapter.reducer';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import moment from 'moment';
import {getAuthUserProfile} from '../../../../../../redux';
import Awesome from '../../../../../../components/customs/Awesome';

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
    user_uuid,
  } = props.data;
  const styles = useStyles();

  const dispatch = useAppDispatch();
  const [show, setShow] = useState(false);

  const dataUser = useAppSelector(getAuthUserProfile);

  const onPressLikeComment = () => {
    if (is_like) {
      dispatch(
        CommentChapterAction.postUnlikeCommentChapter({comment_uuid: uuid}),
      );
    } else {
      dispatch(
        CommentChapterAction.postLikeCommentChapter({comment_uuid: uuid}),
      );
    }
  };

  const onPressDeleteComment = () => {
    dispatch(CommentChapterAction.deleteCommentChater(uuid));
    setShow(false);
  };

  return (
    <View style={styles.container}>
      <FastImage
        style={styles.avatarStyle}
        source={{
          uri:
            user_avatar ||
            'https://static.thenounproject.com/png/5034901-200.png',
        }}
      />
      <View style={styles.content}>
        <Text style={styles.nameStyle}>{fullname || 'Anonymous'}</Text>
        <Text style={styles.day}>
          {created_at
            ? moment(created_at).format('YYYY-MM-DD-HH:mm') + ''
            : '2023-12-12-22:56'}
        </Text>
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
                color={styles.iconStyle.color}
                size={15}
              />
              <Text style={styles.numberRepStyle}>
                {re_comment_count ? re_comment_count : '0'}
              </Text>
            </TouchableOpacity>

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
          {dataUser.uuid == user_uuid ? (
            <Icon
              onPress={() => setShow(!show)}
              name="trash-outline"
              type="ionicon"
              size={15}
              color={styles.iconStyle.color}
            />
          ) : (
            <View />
          )}
          <Awesome
            show={show}
            title="Do you want to delete your comment?"
            message="Please choose yes or no"
            cancelText="No, later"
            confirmText="Yes,delete it"
            confirmButtonColor="#00BFFF"
            onConfirmPressed={onPressDeleteComment}
            onCancelPressed={() => setShow(!show)}
            cancelButtonColor="#F89300"
            onDismiss={() => setShow(false)}
          />
        </View>
      </View>
    </View>
  );
};

export default ItemCommnent;
