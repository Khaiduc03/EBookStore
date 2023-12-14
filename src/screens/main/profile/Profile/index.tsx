import React, {FunctionComponent} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {HeaderCustom} from '../../../../components';
import {routes} from '../../../../constants';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {NavigationService} from '../../../../navigation';
import {getAuthUserProfile} from '../../../../redux';
import {UserAction} from '../../../../redux/reducer/user.reducer';
import {Itemlist} from './components';
import useStyles from './styles';

const Profile: FunctionComponent = () => {
  const user = useAppSelector(getAuthUserProfile);
  const dispatch = useAppDispatch();
  const onPressMyProfile = () => {
    dispatch(UserAction.clearListPostByUser());
    NavigationService.navigate(routes.MYPROFILE);
  };

  const styles = useStyles();
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'user', type: 'font-awesome'}}
        title="Profile"
      />
      <View style={styles.viewAvatar}>
        <Image
          source={{
            uri:
              user.image_url ||
              'https://static.thenounproject.com/png/5034901-200.png',
          }}
          style={styles.avatar}
        />
        <TouchableOpacity
          style={styles.btnMyProfile}
          onPress={onPressMyProfile}>
          <Text style={styles.nameUser}>{user.fullname}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewList}>
        <Itemlist />
      </View>
    </View>
  );
};

export default Profile;
