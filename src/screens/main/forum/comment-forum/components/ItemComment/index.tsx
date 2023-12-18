import {Icon} from '@rneui/base';
import moment from 'moment';
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import FastImage from 'react-native-fast-image';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {routes} from '../../../../../../constants';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {NavigationService} from '../../../../../../navigation';
import {getAuthUserProfile} from '../../../../../../redux';
import {CommentForumAction} from '../../../../../../redux/reducer/comment.forum.reducer';
import {CommentForumType} from '../../../../../../redux/types/comment.forum.type';
import useStyles from './styles';
import CustomAwesomeAlert from '../AwesomeAlertProps/CustomAwesomeAlert';

interface CommentDataProps {
  data: Partial<CommentForumType>;

  setReduce: () => void;
}

const ItemCommnent: React.FunctionComponent<CommentDataProps> = props => {
  const {
    uuid,
    created_at,
    updated_at,
    deleted_at,
    forum_uuid,
    comment,
    parents_comment_uuid,
    chapter_uuid,
    user_uuid,
    type,
    fullname,
    user_avatar,
    re_comment_count,
    like_count,
    is_like,
  } = props.data;

  const styles = useStyles();

  const dispatch = useAppDispatch();

  const user = useAppSelector(getAuthUserProfile);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const onPressLikeComment = () => {
    if (is_like) {
      dispatch({
        type: 'commentForum/deleteLikeCommentForum',
        payload: {comment_uuid: uuid},
      });
    } else {
      dispatch({
        type: 'commentForum/postLikeCommentForum',
        payload: {comment_uuid: uuid},
      });
    }
  };

  const onPressDeleteComment = () => {
    dispatch(
      CommentForumAction.deleteCommentForum({
        comment_uuid: uuid,
        forum_uuid: forum_uuid,
      }),
    );
    props.setReduce();
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
        <Text style={styles.commentStyle}>{comment}</Text>
        <View style={styles.repContent}>
          <View style={styles.viewItemBtn}>
            <TouchableOpacity
              onPress={() => {
                NavigationService.navigate(routes.COMMENT_REP_FORUM, {
                  parents_comment_uuid: uuid,
                  data: props.data,
                }),
                  dispatch(CommentForumAction.clearRepCommentForum());
              }}
              style={styles.rep}>
              <Icon
                name="comment"
                type="font-awesome-5"
                color={styles.iconStyleBlur.color}
                size={15}
              />
              <Text style={styles.numberRepStyle}>
                {re_comment_count ? re_comment_count : '0'}
              </Text>
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
              <Text
                style={[
                  styles.numberRepStyle,
                  {color: is_like ? '#F89300' : styles.iconStyleBlur.color},
                ]}>
                {like_count ? like_count : '0'}
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

export default ItemCommnent;
