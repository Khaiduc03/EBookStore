import React, {FunctionComponent} from 'react';
import {View, TouchableOpacity, FlatList} from 'react-native';
import useStyles from '../../styles';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {getAuthEnableSignIn} from '../../../../../../redux/selectors/auth.selector';
import {AuthActions} from '../../../../../../redux/reducer';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import Circle from '../../../../../../components/customs/Circle';
import {Avatar} from '@rneui/themed';
import Switch_custom from '../../../../../../components/customs/Switch';

const TableofContent: FunctionComponent = props => {
  const dispatch = useAppDispatch();
  const enableSignIn: boolean = useAppSelector(getAuthEnableSignIn);
  const handleLogout = () => {
    dispatch(AuthActions.handleLogout());
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
            type: 'font-awsome',
            color: '#12912B',
            rightIcon: true,
          },
          {
            route: routes.NOTIFICATION,
            title: 'Notification',
            colorBackground: '#FFF2F3',
            name: 'bell',
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
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.ViewClick}
            onPress={() => {
              if (item.route) {
                NavigationService.navigate(item.route);
              } else {
                handleLogout();
              }
            }}>
            <Circle
              title={item.title}
              colorBackground={item.colorBackground}
              name={item.name}
              type={item.type}
              color={item.color}
              rightIcon={item.rightIcon}
              switchRight={item.switchRight}
            />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default TableofContent;
