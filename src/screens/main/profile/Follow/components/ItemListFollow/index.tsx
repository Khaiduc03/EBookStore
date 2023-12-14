import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';
import FastImage from 'react-native-fast-image';
import {ItemFollowType} from '../../../../../../redux/types/user.type';
import {images} from '../../../../../../assets';
import {useAppDispatch} from '../../../../../../hooks';
import {UserAction} from '../../../../../../redux/reducer/user.reducer';
import AwesomeAlert from 'react-native-awesome-alerts';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
interface FollowerProps {
  data?: ItemFollowType;
}

const ItemListFollow: React.FunctionComponent<FollowerProps> = props => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const [showAlert, setShowAlert] = useState(false);

  const onPressDelete = () => {
    dispatch(UserAction.deleteFollwer(props.data?.user_following_uuid!));
    setShowAlert(false);
  };

  const onPressFollow = () => {
    dispatch(
      UserAction.postFollowListFollower(props.data?.user_following_uuid!),
    );
  };
  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity
          onPress={() =>
            NavigationService.navigate(routes.PROFILEUSER, {
              dataFollwer: props.data,
            })
          }>
          <FastImage
            style={styles.imgStyle}
            source={{
              uri:
                props.data?.image_url ||
                'https://static.thenounproject.com/png/5034901-200.png',
            }}
          />
        </TouchableOpacity>
        <View style={styles.nameContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              flex: 1,
              justifyContent: 'space-between',
            }}>
            <Text numberOfLines={1} style={styles.name}>
              {props.data?.fullname || 'Anonymous'}
            </Text>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.dotStyle} />
              <TouchableOpacity onPress={onPressFollow}>
                <Text style={styles.textFollow}>
                  {props.data?.is_following ? 'Unfollow' : 'Follow'}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <Text numberOfLines={1} style={styles.email}>
            {props.data?.email || 'Anonymous'}
          </Text>
        </View>
      </View>
      <TouchableOpacity
        onPress={() => {
          setShowAlert(!showAlert);
        }}
        style={styles.btn}>
        <Text style={styles.textBtn}>Delete</Text>
      </TouchableOpacity>
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
        onConfirmPressed={onPressDelete}
        titleStyle={styles.textTitleAlert}
        messageStyle={styles.textMessageAlert}
        cancelButtonTextStyle={styles.textCancelAlert}
        confirmButtonTextStyle={styles.textConfirmAlert}
      />
    </View>
  );
};

export default ItemListFollow;
