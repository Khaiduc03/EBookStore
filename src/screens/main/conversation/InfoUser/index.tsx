import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect} from 'react';
import {useRoute} from '@react-navigation/native';
import useStyles from './styles';
import {HeaderCustom} from '../../../../components';
import {backScreen} from '../../../../utils';
import FastImage from 'react-native-fast-image';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {UserAction} from '../../../../redux/reducer/user.reducer';
import {getUserById} from '../../../../redux/selectors/user.selector';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
interface RouteParamsProfile {
  uuid?: string;
}

const InfoUser = () => {
  const styles = useStyles();
  const route = useRoute();
  const uuid = (route.params as RouteParamsProfile).uuid;
  const dispatch = useAppDispatch();
  const dataById = useAppSelector(getUserById);
  console.log(dataById);

  useEffect(() => {
    dispatch(UserAction.clearUserById());
    dispatch(UserAction.getUserById(uuid ? uuid : ''));
  }, [uuid]);

  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIconStyle={styles.leftIconStyle}
        leftIcon={{name: 'arrow-back', color: styles.leftIconStyle.color}}
        onPressLeftIcon={() => backScreen()}
      />
      <View style={styles.content}>
        <FastImage
          style={styles.imgStyle}
          source={{
            uri: dataById ? dataById[0].image_url : 'anonymous',
          }}
        />
        <Text style={styles.name}>
          {dataById ? dataById[0].fullname : 'anonymous'}
        </Text>
        <Text style={styles.nameApp}>Comic verse</Text>
        <Text style={styles.title}>You guys are friends on Comic verse</Text>
        <Text style={styles.title}>
          {dataById && dataById[0].summary !== null
            ? dataById[0].summary
            : 'Welcome to my profile page'}
        </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            NavigationService.navigate(routes.PROFILEUSER, {
              data: dataById && dataById[0],
            })
          }>
          <Text style={styles.textButton}>View profile page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InfoUser;
