import {Icon} from '@rneui/base';
import moment from 'moment';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {routes} from '../../../../../../constants';
import {useAppDispatch} from '../../../../../../hooks';
import {NavigationService} from '../../../../../../navigation';
import {CommentForumAction} from '../../../../../../redux/reducer/comment.forum.reducer';
import {CommentForumType} from '../../../../../../redux/types/comment.forum.type';
import useStyles from './styles';

interface CommentDataProps {
  data: Partial<CommentForumType>;
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
    dispatch(CommentForumAction.deleteCommentForum({comment_uuid: uuid}));

    dispatch(
      CommentForumAction.getCommentForum({
        forum_uuid: forum_uuid,
        page: 1,
      }),
    );
  };

  return (
    <View style={styles.container}>
      <FastImage
        style={styles.avatarStyle}
        source={{
          uri:
            user_avatar ||
            'https://cdn3d.iconscout.com/3d/premium/thumb/colombian-people-9437719-7665524.png?f=webp',
        }}
      />
      <View style={styles.content}>
        <Text style={styles.nameStyle}>{fullname}</Text>
        <Text style={styles.day}>
          {moment(created_at).format('YYYY-MM-DD [at] HH:mm')}
        </Text>
        <Text style={styles.commentStyle}>{comment}</Text>
        <View style={styles.repContent}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <TouchableOpacity
              onPress={() => {
                NavigationService.navigate(routes.COMMENT_REP_FORUM, {
                  parents_comment_uuid: parents_comment_uuid,
                  data: props.data,
                }),
                  dispatch(CommentForumAction.clearRepCommentForum());
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

          <TouchableOpacity onPress={onPressDeleteComment}>
            <Icon
              name="ellipsis-vertical"
              type="ionicon"
              size={25}
              color={styles.iconStyleBlur.color}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ItemCommnent;
