import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {images} from '../../../../assets';
import {HeaderCustom} from '../../../../components';
import useStyles from './styles';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {useAppSelector} from '../../../../hooks';
import {getAuthUserProfile} from '../../../../redux';
import {ItemListPost} from './components';

const Forum: React.FC = () => {
  const styles = useStyles();
  const user = useAppSelector(getAuthUserProfile);
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'users', type: 'font-awesome'}}
        title="Forum"
      />
      <View style={styles.header}>
        <View style={styles.itemHeader}>
          <TouchableOpacity
            onPress={() => NavigationService.navigate(routes.MYPROFILE)}>
            <Image style={styles.image} source={{uri: user.image_url}} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonHeader}
            onPress={() => NavigationService.navigate(routes.CREATEPOST)}>
            <Text style={styles.textHeader}>What are you thinking?</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => NavigationService.navigate(routes.CREATEPOST)}>
            <Image style={styles.image} source={images.image_default} />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{flex: 1}}>
        <ItemListPost />
      </View>
    </View>
  );
};

export default Forum;
