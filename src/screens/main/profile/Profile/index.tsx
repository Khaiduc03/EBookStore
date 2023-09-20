import React, { FunctionComponent } from 'react';
import { View, ScrollView, TouchableOpacity, Image } from 'react-native';
import usestyles from './styles';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { getAuthEnableSignIn } from '../../../../redux/selectors/auth.selector';
import { AuthActions } from '../../../../redux/reducer';
import TextCustom from '../../../../components/customs/Text';
import { NavigationService } from '../../../../navigation';
import { routes } from '../../../../constants';
import HeaderCustom from '../../../../components/customs/HeaderCustom';
import { images } from '../../../../assets';
import Circle from '../../../../components/customs/Circle';


const Profile: FunctionComponent = () => {
  const dispatch = useAppDispatch();
  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  const handleLogout = () => {
    dispatch(AuthActions.handleLogout());
  };
  const styles = usestyles();
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
      <ScrollView>
        <View>
          <TouchableOpacity style={styles.ViewClick} onPress={() => NavigationService.navigate(routes.PAYMENTSMETHOD)}>
            <Circle title='Payment methods'
              colorBackground='#D1F1E4'
              name='wallet'
              type='font-awsome'
              color='#12912B'
              rightIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.ViewClick} onPress={() => NavigationService.navigate(routes.NOTIFICATION)}>
            <Circle title='Notification'
              colorBackground='#FFF2F3'
              name='bell'
              type='font-awesome'
              color='#F2AC9D'
              rightIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.ViewClick} onPress={() => NavigationService.navigate(routes.SECURITY)}>
            <Circle title='Security'
              colorBackground='#EDF9F1'
              name='user-shield'
              type='font-awesome-5'
              color='#12912B'
              rightIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.ViewClick} onPress={() => NavigationService.navigate(routes.BECOMEVIP)}>
            <Circle title='Become a VIP member'
              colorBackground='#FFFDEA'
              name='crown'
              type='font-awesome-5'
              color='yellow'
              rightIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.ViewClick} onPress={() => NavigationService.navigate(routes.HELPCENTER)}>
            <Circle title='Help Center'
              colorBackground='#EDF9F1'
              name='helicopter'
              type='font-awesome-5'
              color='#12912B'
              rightIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.ViewClick} onPress={() => NavigationService.navigate(routes.ABOUTAPP)}>
            <Circle title='About the App'
              colorBackground='#FFF7EB'
              name='book'
              color='#FCA72B'
              type='font-awesome'
              rightIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.ViewClick} onPress={() => { handleLogout() }}>
            <Circle
              title={enableSignIn ? 'Logout' : 'Login'}
              colorBackground='#FFF2F3'
              name={enableSignIn ? 'door-open' : 'door-closed'}
              type='font-awesome-5'
              color='#FF707B'
              rightIcon
            />
          </TouchableOpacity>
        </View>


      </ScrollView>
    </View>
  );
};

export default Profile;
