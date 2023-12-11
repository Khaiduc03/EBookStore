import {Icon} from '@rneui/themed';
import moment from 'moment';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';
import {useAppSelector} from '../../../../../../hooks';
import {getAuthUserProfile} from '../../../../../../redux';
import useStyles from './styles';

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

  return (
    <View style={styles.viewRow}>
      <Image
        style={styles.imageTitle}
        source={{
          uri:
            userAvatar ||
            'https://cdn3d.iconscout.com/3d/premium/thumb/colombian-people-9437719-7665524.png?f=webp',
        }}
      />
      <View style={styles.viewTextPost}>
        <Text style={styles.name}>{userFullName || 'Anonymous'}</Text>
        <View
          style={[styles.viewRow, styles.viewImageText, styles.marginTopDate]}>
          <Text style={styles.createAt}>
            {moment(createdAt).format('YYYY-MM-DD [at] HH:mm')}
          </Text>
          <Icon name="public" type="material" size={16} color={'#626162'} />
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
          />
        </View>
      )}
    </View>
  );
};

export default PostHeader;
