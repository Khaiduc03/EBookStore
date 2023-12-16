import {Icon} from '@rneui/themed';
import moment from 'moment';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import {useAppSelector} from '../../../../../../hooks';
import {getAuthUserProfile} from '../../../../../../redux';
import useStyles from './styles';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';

interface PostHeaderProps {
  userUUID: any;
  userFullName: any;
  userAvatar: any;
  createdAt: any;
  onDeletePost: () => void;
}

const PostHeader: React.FC<PostHeaderProps> = ({
  userUUID,
  userFullName,
  userAvatar,
  createdAt,
  onDeletePost,
}) => {
  const styles = useStyles();

  const user = useAppSelector(getAuthUserProfile);

  const [showAlert, setShowAlert] = useState(false);

  const getTimeElapsed = () => {
    const now = moment();
    const postTime = moment(createdAt);
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

  const handlePressUser = () => {
    NavigationService.navigate(routes.PROFILEUSER, {
      userUUID,
      userFullName,
      userAvatar,
    });
  };

  return (
    <View style={styles.viewRow}>
      <TouchableOpacity>
        <Image
          style={styles.imageTitle}
          source={{
            uri:
              userAvatar ||
              'https://cdn3d.iconscout.com/3d/premium/thumb/colombian-people-9437719-7665524.png?f=webp',
          }}
        />
      </TouchableOpacity>
      <View style={styles.viewTextPost}>
        <TouchableOpacity>
          <Text style={styles.name}>{userFullName || 'Anonymous'}</Text>
        </TouchableOpacity>
        <View style={[styles.viewRow, styles.viewCreateAt]}>
          <Text style={styles.createAt}>{getTimeElapsed()} •</Text>
          <Icon name="public" type="material" size={14} color={'#b3b3b3'} />
        </View>
      </View>

      {user.uuid === userUUID && (
        <View>
          <TouchableOpacity
            style={styles.leftIcon}
            onPress={() => {
              setShowAlert(!showAlert);
            }}>
            <Icon
              name="close-outline"
              type="ionicon"
              size={24}
              color={'#626162'}
            />
          </TouchableOpacity>
          <AwesomeAlert
            show={showAlert}
            showProgress={false}
            title="Delete Your Post 😕"
            message="Are you sure you want to delete your post?"
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
              onDeletePost();
            }}
            titleStyle={styles.textTitleAlert}
            messageStyle={styles.textMessageAlert}
            cancelButtonTextStyle={styles.textCancelAlert}
            confirmButtonTextStyle={styles.textConfirmAlert}
            contentContainerStyle={styles.contentContainerStyle}
          />
        </View>
      )}
    </View>
  );
};

export default PostHeader;
