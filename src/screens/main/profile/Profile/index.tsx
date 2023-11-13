import React, {FunctionComponent} from 'react';
import {Image, TouchableOpacity, View, Text} from 'react-native';
import {images} from '../../../../assets';
import {HeaderCustom} from '../../../../components';
import TextCustom from '../../../../components/customs/Text';
import {routes} from '../../../../constants';
import {NavigationService} from '../../../../navigation';
import useStyles from './styles';
import {Itemlish} from './components';
import {useAppSelector} from '../../../../hooks';
import {getAuthUserProfile} from '../../../../redux';

const Profile: FunctionComponent = () => {
  const user = useAppSelector(getAuthUserProfile);
  console.log(user);
  console.log(user.fullname);
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'user', type: 'font-awesome'}}
        title="My profile"
      />
      <View style={styles.viewAvatar}>
        <Image source={{uri: user.image_url}} style={styles.avatar} />
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
