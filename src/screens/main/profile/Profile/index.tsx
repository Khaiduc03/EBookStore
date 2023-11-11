import React, {FunctionComponent} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {HeaderCustom} from '../../../../components';
import TextCustom from '../../../../components/customs/Text';
import {routes} from '../../../../constants';
import {useAppSelector} from '../../../../hooks';
import {NavigationService} from '../../../../navigation';
import {getAuthUserProfile} from '../../../../redux';
import {Itemlish} from './components';
import useStyles from './styles';

const Profile: FunctionComponent = () => {
  const styles = useStyles();

  const user = useAppSelector(getAuthUserProfile);
  console.log(user);
  console.log(user.fullname);
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
          <TextCustom textBold title={user.fullname} />
          <TextCustom textLight title={user.email} />
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
