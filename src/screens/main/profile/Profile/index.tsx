import React, { FunctionComponent } from 'react';
import { View, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import useStyles from './styles';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { getAuthEnableSignIn } from '../../../../redux/selectors/auth.selector';
import { AuthActions } from '../../../../redux/reducer';
import TextCustom from '../../../../components/customs/Text';
import { NavigationService } from '../../../../navigation';
import { routes } from '../../../../constants';
import HeaderCustom from '../../../../components/customs/HeaderCustom';
import { images } from '../../../../assets';
import TableofContent from './Components/Table-of-contents';


const Profile: FunctionComponent = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <HeaderCustom leftIcon={{ name: 'user', type: 'font-awesome' }} title="My profile" />
      <View style={styles.viewAvatar}>
        <View style={styles.viewAvatar}>
          <Image source={images.avata} style={styles.avatar} />
          <TouchableOpacity style={styles.ViewText} onPress={() => NavigationService.navigate(routes.MYPROFILE)}>
            <TextCustom textBold title='Drake Kun' />
            <TextCustom textLight title='drake@gmail.com' />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{ flex: 1 }}>
        <TableofContent />
      </View>


    </View>
  );
};

export default Profile;


