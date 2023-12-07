import React, {useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {ItemListProfile} from '../../../../../../components';
import {routes} from '../../../../../../constants';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {NavigationService} from '../../../../../../navigation';
import {
  AuthActions,
  ComicActions,
  ThemeActions,
  getAuthEnableSignIn,
} from '../../../../../../redux';
import useStyles from './styles';
import {Icon, Text} from '@rneui/themed';
import {getMode} from '../../../../../../redux/selectors/thems.selector';

const Itemlist: React.FC = () => {
  const styles = useStyles();

  const dispatch = useAppDispatch();

  const mode = useAppSelector(getMode);

  const [isEnabled, setIsEnabled] = useState(false);

  const handleTheme = () => {
    if (mode === 'light') {
      dispatch(ThemeActions.setTheme('dark'));
      setTimeout(() => {
        setIsEnabled(previousState => !previousState);
      }, 1000);
    } else {
      dispatch(ThemeActions.setTheme('light'));
      setTimeout(() => {
        setIsEnabled(previousState => !previousState);
      }, 1000);
    }
  };
  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  const handleLogout = () => {
    dispatch(ComicActions.clearListData());
    dispatch(AuthActions.handleLogout());
  };
  return (
    <ScrollView style={styles.viewList}>
      <View style={{flex: 1}}>
        <Text style={styles.textName}>Account</Text>
        <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.CHANGEPASSWORD)}>
          <View style={styles.viewItemBtn}>
            <View style={styles.viewIconLeftText}>
              <Icon
                name="key"
                type="font-awesome-5"
                color="#F89300"
                size={styles.iconSize.fontSize}
                style={styles.marginIconLeft}
              />
              <Text style={styles.textBtn}>Change Password</Text>
            </View>

            <Icon
              name="chevron-forward-outline"
              type="ionicon"
              color={styles.iconColor.color}
              size={24}
            />
          </View>
        </TouchableOpacity>

        {/* <TouchableOpacity
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
        </TouchableOpacity> */}

        {/* <View style={styles.line} /> */}

        <Text style={styles.textName}>Comic</Text>

        <TouchableOpacity
          onPress={() => {
            {
              dispatch(ComicActions.clearListHistory()),
                dispatch(ComicActions.clearListFavorite());
              NavigationService.navigate(routes.HISTORYANDFAVORITE);
            }
          }}>
          <View style={styles.viewItemBtn}>
            <View style={styles.viewIconLeftText}>
              <Icon
                name="history"
                type="material-community"
                color="#F89300"
                size={styles.iconSize.fontSize}
                style={styles.marginIconLeft}
              />
              <Text style={styles.textBtn}>Favorite and History</Text>
            </View>

            <Icon
              name="chevron-forward-outline"
              type="ionicon"
              color={styles.iconColor.color}
              size={24}
            />
          </View>
        </TouchableOpacity>

        <Text style={styles.textName}>App</Text>

        <View style={styles.viewItemBtn}>
          <View style={styles.viewIconLeftText}>
            <Icon
              name="color-palette-sharp"
              type="ionicon"
              color="#F89300"
              size={styles.iconSize.fontSize}
              style={styles.marginIconLeft}
            />
            <Text style={styles.textBtn}>Theme</Text>
          </View>

          <View style={styles.viewBtn}>
            <TouchableOpacity
              style={[styles.outter, isEnabled ? styles.on : styles.off]}
              onPress={handleTheme}
              activeOpacity={3}>
              <View style={isEnabled ? styles.innerON : styles.innerOFF} />
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.HELPCENTER)}>
          <View style={styles.viewItemBtn}>
            <View style={styles.viewIconLeftText}>
              <Icon
                name="customerservice"
                type="antdesign"
                color="#F89300"
                size={styles.iconSize.fontSize}
                style={styles.marginIconLeft}
              />
              <Text style={styles.textBtn}>Help Center</Text>
            </View>

            <Icon
              name="chevron-forward-outline"
              type="ionicon"
              color={styles.iconColor.color}
              size={24}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => NavigationService.navigate(routes.ABOUTAPP)}>
          <View style={styles.viewItemBtn}>
            <View style={styles.viewIconLeftText}>
              <Icon
                name="book"
                type="font-awesome"
                color="#F89300"
                size={styles.iconSize.fontSize}
                style={styles.marginIconLeft}
              />
              <Text style={styles.textBtn}>About this app</Text>
            </View>

            <Icon
              name="chevron-forward-outline"
              type="ionicon"
              color={styles.iconColor.color}
              size={24}
            />
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogout}>
          <View style={styles.viewItemBtn}>
            <View style={styles.viewIconLeftText}>
              <Icon
                name={'door-open'}
                type="font-awesome-5"
                color="#F89300"
                size={styles.iconSize.fontSize}
                style={styles.marginIconLeft}
              />
              <Text style={styles.textBtn}>Logout</Text>
            </View>

            <Icon
              name="log-out-outline"
              type="ionicon"
              color={styles.iconColor.color}
              size={24}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Itemlist;
