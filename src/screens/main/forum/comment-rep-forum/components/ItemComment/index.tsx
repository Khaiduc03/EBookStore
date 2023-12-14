import {Icon} from '@rneui/base';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import useStyles from './styles';
import moment from 'moment';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {CommentForumAction} from '../../../../../../redux/reducer/comment.forum.reducer';
import {CommentForumType} from '../../../../../../redux/types/comment.forum.type';
import {getAuthUserProfile} from '../../../../../../redux';
import AwesomeAlert from 'react-native-awesome-alerts';

interface CommentDataProps {
  data: CommentForumType;
  setOpen: () => void;
  setUserRep: (text: string) => void;
}

const ItemRepCommnent: React.FC<CommentDataProps> = props => {
  const {
    comment,
    created_at,
    fullname,
    re_comment_count,
    user_avatar,
    like_count,
    uuid,
    is_like,
    user_uuid,
  } = props.data || {};

  const styles = useStyles();

  const dispatch = useAppDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const user = useAppSelector(getAuthUserProfile);
  const [like, setLike] = useState<Boolean>(is_like);
  const [countLike, setCountLike] = useState<number>(like_count);
  const commentIncludesFullname = comment.includes(fullname);
  const fullnameIndex = comment.indexOf(fullname);
  const textBeforeFullname = comment.slice(0, fullnameIndex);

  const onPressDeleteComment = () => {
    dispatch(CommentForumAction.deleteCommentForum({comment_uuid: uuid}));
  };

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

  const onPressRep = (text: string) => {
    props.setUserRep(text);
    props.setOpen();
    setShowAlert(false);
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
      <FastImage
        style={styles.avatarStyle}
        source={{
          uri: user_avatar,
        }}
      />
      <View style={styles.content}>
        <Text style={styles.nameStyle}>{fullname}</Text>
        <Text style={styles.day}>{getTimeElapsed()}</Text>
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
          <View style={styles.viewItemBtn}>
            <TouchableOpacity
              onPress={() => onPressRep(fullname)}
              style={styles.rep}>
              <Icon
                name="comment"
                type="font-awesome-5"
                color={styles.iconStyleBlur.color}
                size={15}
              />
            </TouchableOpacity>

            <Text style={styles.numberRepStyle}>
              {re_comment_count ? re_comment_count : 0}
            </Text>

            <TouchableOpacity onPress={onPressLikeComment} style={styles.like}>
              <IconMaterialIcons
                name={like ? 'thumb-up-alt' : 'thumb-up-off-alt'}
                color={
                  like
                    ? styles.iconStyleFocus.color
                    : styles.iconStyleBlur.color
                }
                size={15}
              />
              <Text style={styles.numberRepStyle}>
                {countLike ? countLike : '0'}
              </Text>
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
};

export default ItemRepCommnent;
