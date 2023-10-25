import React from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {ItemListProfile} from '../../../../../../components';
import {routes} from '../../../../../../constants';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {NavigationService} from '../../../../../../navigation';
import {AuthActions, getAuthEnableSignIn} from '../../../../../../redux';
import useStyles from './styles';
import {Text} from '@rneui/themed';

const Itemlish: React.FC = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  const handleLogout = () => {
    dispatch(AuthActions.handleLogout());
  };
  return (
    <ScrollView style={styles.viewList}>
      <View style={{flex: 1}}>
        <Text style={styles.textName}>Account</Text>
        <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.CHANGEPASSWORD)}>
          <ItemListProfile
            title="Change Password"
            name="key-outline"
            type="ionicon"
            color="#F89300"
            size={50}
            rightIcon
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.SECURITY)}>
          <ItemListProfile
            title="Security"
            name="shield-checkmark"
            type="ionicon"
            color="#F89300"
            size={50}
            rightIcon
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.PAYMENTSMETHOD)}>
          <ItemListProfile
            title="Wallet"
            name="wallet"
            type="entypo"
            color="#F89300"
            size={50}
            rightIcon
          />
        </TouchableOpacity>

        <View style={styles.line} />
        <Text style={styles.textName}>Comic</Text>
        <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.FAVORITE)}>
          <ItemListProfile
            title="Your favorites"
            name="menu-book"
            type="material"
            color="#F89300"
            size={50}
            rightIcon
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.HISTORY)}>
          <ItemListProfile
            title="History"
            name="history"
            type="material-community"
            color="#F89300"
            size={50}
            rightIcon
          />
        </TouchableOpacity>

        <View style={styles.line} />
        <Text style={styles.textName}>App</Text>

        <ItemListProfile
          title="Theme"
          name="paint-brush"
          type="font-awesome"
          color="#F89300"
          size={50}
          switchRight
        />

        <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.HELPCENTER)}>
          <ItemListProfile
            title="Help Center"
            name="customerservice"
            type="antdesign"
            color="#F89300"
            size={50}
            rightIcon
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.ABOUTAPP)}>
          <ItemListProfile
            title="About this app"
            name="book"
            type="font-awesome"
            color="#F89300"
            size={50}
            rightIcon
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.BECOMEVIP)}>
          <ItemListProfile
            title="Become a VIP "
            name="user-secret"
            type="font-awesome"
            color="#F89300"
            size={50}
            rightIcon
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <ItemListProfile
            title={enableSignIn ? 'Logout' : 'Login'}
            name={enableSignIn ? 'door-open' : 'door-closed'}
            type="font-awesome-5"
            color="#F89300"
            size={50}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Itemlish;
