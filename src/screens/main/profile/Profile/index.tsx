import React, { FunctionComponent } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { HeaderCustom } from '../../../../components';
import { routes } from '../../../../constants';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { NavigationService } from '../../../../navigation';
import { AuthActions, getAuthUserProfile } from '../../../../redux';
import { Itemlish } from './components';
import useStyles from './styles';

const Profile: FunctionComponent = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  dispatch(AuthActions.getUserInfo());
  const user = useAppSelector(getAuthUserProfile);
  console.log(user);
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'user', type: 'font-awesome'}}
        title="My profile"
      />
      <View style={styles.viewAvatar}>
        <Image source={{uri: `${user.image_url}`}} style={styles.avatar} />
        <TouchableOpacity
          style={styles.btnMyProfile}
          onPress={() => NavigationService.navigate(routes.MYPROFILE)}>
          <Text style={styles.nameUser}>{user.fullname}</Text>
          <Text style={styles.email}>{user.email}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <View style={styles.viewList}>
        <Itemlish />
      </View>
    </View>
  );
};

export default Profile;
