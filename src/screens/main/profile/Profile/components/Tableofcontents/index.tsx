import React, {FunctionComponent} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import ItemListProfile from '../../../../../../components/customs/ItemListProfile';
import {routes} from '../../../../../../constants';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {NavigationService} from '../../../../../../navigation';
import {AuthActions, ComicActions} from '../../../../../../redux/reducer';
import {getAuthEnableSignIn} from '../../../../../../redux/selectors/auth.selector';
import useStyles from './styles';

const TableofContent: FunctionComponent = props => {
  const dispatch = useAppDispatch();
  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  const handleLogout = () => {
    dispatch(AuthActions.handleLogout());
  };

  const darkModeStyles = {
    viewClick: {
      padding: 15,
    },
  };

  const styles = useStyles();
  return (
    <View>
      <FlatList
        data={[
          {
            route: routes.PAYMENTSMETHOD,
            title: 'Payment methods',
            colorBackground: '#D1F1E4',
            name: 'wallet',
            type: 'font-awsome-5',
            color: '#12912B',
            rightIcon: true,
          },
          {
            route: routes.FAVORITE,
            title: 'Favorite',
            colorBackground: '#FFF2F3',
            name: 'heart',
            type: 'font-awesome',
            color: '#F2AC9D',
            rightIcon: true,
          },
          {
            route: routes.SECURITY,
            title: 'Security',
            colorBackground: '#EDF9F1',
            name: 'user-shield',
            type: 'font-awesome-5',
            color: '#12912B',
            rightIcon: true,
          },
          {
            route: routes.BECOMEVIP,
            title: 'Become a VIP member',
            colorBackground: '#FFFDEA',
            name: 'crown',
            type: 'font-awesome-5',
            color: 'yellow',
            rightIcon: true,
          },
          {
            route: routes.HISTORY,
            title: 'History',
            colorBackground: '#ECEBEB',
            name: 'history',
            type: 'font-awesome-5',
            color: '#959090',
            rightIcon: true,
          },
          {
            route: routes.HELPCENTER,
            title: 'Help Center',
            colorBackground: '#EDF9F1',
            name: 'hire-a-helper',
            type: 'font-awesome-5',
            color: '#12912B',
            rightIcon: true,
          },
          {
            route: routes.ABOUTAPP,
            title: 'About the App',
            colorBackground: '#FFF7EB',
            name: 'book',
            color: '#FCA72B',
            type: 'font-awesome',
            rightIcon: true,
          },
          {
            title: 'Dark Mode',
            colorBackground: '#EEF4FF',
            name: 'eye',
            type: 'font-awesome-5',
            color: '#007BE5',
            switchRight: true,
          },
          {
            title: enableSignIn ? 'Logout' : 'Login',
            colorBackground: '#FFF2F3',
            name: enableSignIn ? 'door-open' : 'door-closed',
            type: 'font-awesome-5',
            color: '#FF707B',
            rightIcon: true,
          },
        ]}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({item}) =>
          item.title === 'Dark Mode' ? (
            <View style={styles.viewDarkMode}>
              <ItemListProfile
                title={item.title}
                colorBackground={item.colorBackground}
                name={item.name}
                type={item.type}
                color={item.color}
                rightIcon={item.rightIcon}
                switchRight={item.switchRight}
              />
            </View>
          ) : (
            <TouchableOpacity
              style={styles.viewClick}
              onPress={() => {
                if (item.route) {
                  NavigationService.navigate(item.route);
                } else {
                  handleLogout();
                }
              }}>
              <ItemListProfile
                title={item.title}
                colorBackground={item.colorBackground}
                name={item.name}
                type={item.type}
                color={item.color}
                rightIcon={item.rightIcon}
                switchRight={item.switchRight}
              />
            </TouchableOpacity>
          )
        }
      />
    </View>
  );
};

export default TableofContent;
