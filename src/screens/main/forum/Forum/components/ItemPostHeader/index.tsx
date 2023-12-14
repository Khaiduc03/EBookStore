import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import useStyles from './styles';
import {Icon} from '@rneui/themed';

interface PostFooterProps {
  isLiked: boolean;
  likeCount: number;
  commentCount: number;
  onLikePress: () => void;
  onCommentPress: () => void;
  onSharePress: () => void;
}

const PostFooter: React.FC<PostFooterProps> = ({
  isLiked,
  likeCount,
  commentCount,
  onLikePress,
  onCommentPress,
  onSharePress,
}) => {
  const styles = useStyles();

  return (
    <View style={styles.viewLikeComment}>
      <View style={styles.viewNumberCount}>
        <TouchableOpacity onPress={onLikePress}>
          <View style={styles.iconText}>
            <View style={[styles.iconLike, styles.viewCenter]}>
              <Icon
                name={'thumb-up-alt'}
                color={'white'}
                size={11}
                type="materialicon"
              />
            </View>
            <Text style={styles.textBlur}>{likeCount}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onCommentPress}>
          <View style={styles.iconText}>
            <Text style={styles.textBlur}>{commentCount}</Text>
            <Text style={styles.textBlur}>comment</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.footerPost}>
        <TouchableOpacity onPress={onLikePress}>
          <View style={styles.iconText}>
            <Icon
              name={isLiked ? 'thumb-up-alt' : 'thumb-up-off-alt'}
              color={
                isLiked
                  ? styles.colorIconHeartFocus.color
                  : styles.colorIconHeartBlur.color
              }
              size={24}
              type="materialicon"
            />
            <Text style={isLiked ? styles.textFocus : styles.textBlur}>
              Like
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onCommentPress}>
          <View style={styles.iconText}>
            <IconFontAwesome5
              name="comment"
              color={styles.colorIconHeartBlur.color}
              size={20}
            />
            <Text style={styles.textBlur}>Comment</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={onSharePress}>
          <View style={styles.iconText}>
            <Icon name="arrow-redo-outline" type="ionicon" size={22} />
            <Text style={styles.textBlur}>Share</Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PostFooter;
