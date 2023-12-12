import {Icon, Text} from '@rneui/themed';
import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, TouchableOpacity, View} from 'react-native';
import {routes} from '../../../../../../constants';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {NavigationService} from '../../../../../../navigation';
import {
  AuthActions,
  ComicActions,
  ThemeActions,
  getAuthEnableSignIn,
} from '../../../../../../redux';
import {getMode} from '../../../../../../redux/selectors/thems.selector';
import useStyles from './styles';

const Itemlist: React.FC = () => {
  const styles = useStyles();

  const dispatch = useAppDispatch();

  const mode = useAppSelector(getMode);

  const [isEnabled, setIsEnabled] = useState(false);

  const handleTheme = useCallback(() => {
    if (mode === 'light') {
      setTimeout(() => {
        dispatch(ThemeActions.setTheme('dark'));
        setIsEnabled(false);
      }, 1200);
    } else {
      setTimeout(() => {
        dispatch(ThemeActions.setTheme('light'));
        setIsEnabled(true);
      }, 1200);
    }
  }, [mode]);

  useEffect(() => {
    // Update UI based on theme change
    setIsEnabled(mode === 'dark');
  }, [mode]);

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
                type="feather"
                color="#F89300"
                size={styles.iconSize.fontSize}
                style={styles.viewIconLeft}
              />
              <Text style={styles.textBtn}>Change Password</Text>
            </View>

            <Icon
              name="chevron-forward-outline"
              type="ionicon"
              color={styles.iconColor.color}
              size={19}
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
                style={styles.viewIconLeft}
              />
              <Text style={styles.textBtn}>Favorite and History</Text>
            </View>

            <Icon
              name="chevron-forward-outline"
              type="ionicon"
              color={styles.iconColor.color}
              size={19}
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
              style={styles.viewIconLeft}
            />
            <Text style={styles.textBtn}>Theme</Text>
          </View>

          <TouchableOpacity
            style={[styles.outter, mode && isEnabled ? styles.on : styles.off]}
            onPress={handleTheme}
            activeOpacity={3}>
            <View style={[{position: 'absolute'}]}>
              {isEnabled ? (
                <>
                  <Icon
                    name={'moon'}
                    type="ionicon"
                    color={styles.colorIconDarkMode.color}
                    size={16}
                    style={styles.innerDarkMode}
                  />
                </>
              ) : (
                <>
                  <Icon
                    name={'sunny'}
                    type="ionicon"
                    color={styles.colorIconSunny.color}
                    size={16}
                    style={styles.innerSunny}
                  />
                </>
              )}
            </View>
          </TouchableOpacity>
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
                style={styles.viewIconLeft}
              />
              <Text style={styles.textBtn}>Help Center</Text>
            </View>

            <Icon
              name="chevron-forward-outline"
              type="ionicon"
              color={styles.iconColor.color}
              size={19}
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
                style={styles.viewIconLeft}
              />
              <Text style={styles.textBtn}>About this app</Text>
            </View>

            <Icon
              name="chevron-forward-outline"
              type="ionicon"
              color={styles.iconColor.color}
              size={19}
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
                style={styles.viewIconLeft}
              />
              <Text style={styles.textBtn}>Logout</Text>
            </View>

            <Icon
              name="log-out-outline"
              type="ionicon"
              color={styles.iconColor.color}
              size={19}
            />
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Itemlist;
