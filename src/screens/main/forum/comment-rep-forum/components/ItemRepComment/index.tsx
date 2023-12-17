import {Icon} from '@rneui/base';
import moment from 'moment';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import FastImage from 'react-native-fast-image';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {getAuthUserProfile} from '../../../../../../redux';
import {CommentForumAction} from '../../../../../../redux/reducer/comment.forum.reducer';
import {CommentForumType} from '../../../../../../redux/types/comment.forum.type';
import useStyles from './styles';
import CustomAwesomeAlert from '../AwesomeAlertProps/CustomAwesomeAlert';

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
          uri: user_avatar
            ? user_avatar
            : 'https://cdn3d.iconscout.com/3d/premium/thumb/colombian-people-9437719-7665524.png?f=webp',
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
              <Text
                style={[
                  styles.numberRepStyle,
                  {color: like ? '#F89300' : styles.iconStyleBlur.color},
                ]}>
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
                <CustomAwesomeAlert
                  showAlert={showAlert}
                  setShowAlert={showAlert => setShowAlert(showAlert)}
                  title="Delete Your Comment 😕"
                  message="Are you sure you want to delete your comment?"
                  cancelText="No, cancel"
                  confirmText="Yes, delete it"
                  onPressConfirm={onPressDeleteComment}
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
