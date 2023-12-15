import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import useStyles from './styles';
import FastImage from 'react-native-fast-image';
import {Icon} from '@rneui/base';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import {CommentChapterType} from '../../../../../../redux/types/comment.chapter.type';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {CommentChapterAction} from '../../../../../../redux/reducer/comment.chapter.reducer';
import moment from 'moment';
import {getAuthUserProfile} from '../../../../../../redux';
import Awesome from '../../../../../../components/customs/Awesome';
interface CommentDataProps {
  data: CommentChapterType;
  setOpen: () => void;
  setUserRep: (text: string) => void;
  reduceCountComment: () => void;
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

  const commentIncludesFullname = props.data.comment.includes(
    props.data.fullname || 'null',
  );
  const fullnameIndex = props.data.comment.indexOf(props.data.fullname);

  const textBeforeFullname = props.data.comment.slice(0, fullnameIndex);

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

  const onPressDeleteComment = () => {
    dispatch(
      CommentChapterAction.deleteRepCommentChater({
        uuid: uuid,
        parents_comment_uuid: parents_comment_uuid,
      }),
    );
    props.reduceCountComment();
    setShow(false);
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
          uri:
            user_avatar ||
            'https://static.thenounproject.com/png/5034901-200.png',
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

              <Text style={{color: 'blue'}}>{props.data.fullname}</Text>

              {props.data.comment.slice(
                fullnameIndex + props.data.fullname.length,
              )}
            </>
          ) : (
            props.data.comment
          )}
        </Text>
        <View style={styles.repContent}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => onPressRep(props.data.fullname)}
              style={styles.rep}>
              <Icon
                name="chatbox-outline"
                type="ionicon"
                color={styles.iconStyle.color}
                size={15}
              />
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
