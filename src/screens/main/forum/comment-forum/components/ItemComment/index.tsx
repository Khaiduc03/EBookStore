import {Icon} from '@rneui/base';
import moment from 'moment';
import React, {useCallback, useRef, useState} from 'react';
import {FlatList, Text, TextInput, TouchableOpacity, View} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import FastImage from 'react-native-fast-image';
import IconMaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {getAuthUserProfile} from '../../../../../../redux';
import {CommentForumAction} from '../../../../../../redux/reducer/comment.forum.reducer';
import {getListRepCommentForum} from '../../../../../../redux/selectors/comment.forum.selector';
import {CommentForumType} from '../../../../../../redux/types/comment.forum.type';
import useStyles from './styles';
import ItemRepCommnent from '../../../comment-rep-forum/components/ItemComment';

interface CommentDataProps {
  data: Partial<CommentForumType>;
  replyText: string;
  showTextInput: boolean;
  showTextInputRep: boolean;
  onReplyPress: () => void;
  onFocusTextInput: () => void;
  onBlurTextInput: () => void;
  onChangeText: (text: string) => void;
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
  const [showAlert, setShowAlert] = useState(false);
  const user = useAppSelector(getAuthUserProfile);
  const flatListRef = useRef<FlatList<CommentForumType>>(null);
  const [sizeContent, setSizeContent] = useState<number>(0);
  const [size, setSize] = useState<boolean>(false);
  const dataRepComment = useAppSelector(getListRepCommentForum);

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

  const [showTextInputRep, setShowTextInputRep] = useState(props.showTextInput);
  const [reply, setReply] = useState(props.replyText);

  const onChangeText = (text: string) => {
    setReply(text);
    // If the onChangeText callback is provided, call it to notify the parent.
    props.onChangeText && props.onChangeText(text);
    console.log('abc  ===', text);
  };

  const onFocusTextInput = () => {
    // Call the parent onFocusTextInput when TextInput is focused
    props.onFocusTextInput();
  };

  const onBlurTextInput = () => {
    // Call the parent onBlurTextInput when TextInput loses focus
    props.onBlurTextInput();
  };

  const setUserRep = (text: string) => {
    setReply('Reply ' + '@' + text + ': ');
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: CommentForumType;
    index: number;
  }) => {
    return (
      <View>
        <ItemRepCommnent setUserRep={setUserRep} data={item} />
      </View>
    );
  };

  const renderReplies = () => {
    return (
      <FlatList
        data={dataRepComment}
        renderItem={renderItem}
        keyExtractor={item => item.uuid}
        initialNumToRender={21}
        onContentSizeChange={onContentSizeChange}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{paddingVertical: 65}}
      />
    );
  };

  const renderTextInput = () => {
    return (
      <View>
        <View style={styles.textInputReply}>
          <Icon
            name="arrow-undo-outline"
            type="ionicon"
            size={22}
            color={styles.iconStyleBlur.color}
            style={{transform: [{rotate: '180deg'}]}}
          />
          <TextInput
            onFocus={onFocusTextInput}
            onBlur={onBlurTextInput}
            style={{borderBottomWidth: 1, borderColor: 'gray', flex: 1}}
            placeholder="Reply..."
            placeholderTextColor={styles.iconStyleBlur.color}
            value={reply}
            onChangeText={onChangeText}
            onSubmitEditing={props.onReplyPress}
          />
        </View>
      </View>
    );
  };

  console.log('reply ', reply);

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
        <Text style={styles.day}>{getTimeElapsed()}</Text>
        <Text style={styles.commentStyle}>{comment}</Text>
        <View style={styles.repContent}>
          <View style={styles.viewItemBtn}>
            <TouchableOpacity
              onPress={() => {
                setShowTextInputRep(!showTextInputRep);
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
              <Text style={styles.numberRepStyle}>
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
        {renderTextInput()}
        {!showTextInputRep && renderReplies()}
      </View>
    </View>
  );
};

export default ItemCommnent;
