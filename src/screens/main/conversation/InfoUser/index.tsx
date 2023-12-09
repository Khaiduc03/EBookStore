import { useRoute } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import FastImage from 'react-native-fast-image';
import { HeaderCustom } from '../../../../components';
import { routes } from '../../../../constants';
import { useAppDispatch, useAppSelector } from '../../../../hooks';
import { NavigationService } from '../../../../navigation';
import { UserAction } from '../../../../redux/reducer/user.reducer';
import { getUserById } from '../../../../redux/selectors/user.selector';
import { backScreen } from '../../../../utils';
import useStyles from './styles';

interface RouteParamsProfile {
  joined_uuid?: any;
  joined_url?: any;
  joined_name?: any;
  joined_summary?: any;
}

const InfoUser = () => {
  const styles = useStyles();

  const route = useRoute();
  
  const joined_uuid = (route.params as RouteParamsProfile).joined_uuid;
  const joined_name = (route.params as RouteParamsProfile).joined_name;
  const joined_url = (route.params as RouteParamsProfile).joined_url;
  const joined_summary = (route.params as RouteParamsProfile).joined_summary;

  const dispatch = useAppDispatch();

  const dataById = useAppSelector(getUserById);

  useEffect(() => {
    if (joined_uuid) {
      dispatch(UserAction.clearUserById());
      dispatch(UserAction.getUserById(joined_uuid));
    }
  }, [joined_uuid]);

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
            uri: dataById ? joined_url : 'https://cdn3d.iconscout.com/3d/premium/thumb/colombian-people-9437719-7665524.png?f=webp',
          }}
        />
        <Text style={styles.name}>{dataById ? joined_name : 'anonymous'}</Text>
        <Text style={styles.nameApp}>Comic Verse</Text>
        <Text style={styles.title}>You guys are friends on Comic verse</Text>
        <Text style={styles.title}>
          {dataById && joined_summary !== ''
            ? joined_summary
            : 'Welcome to my profile page'}
        </Text>
        <TouchableOpacity
          style={styles.buttonStyle}
          onPress={() =>
            NavigationService.navigate(routes.PROFILEUSER, {
              data: {
                joined_uuid,
                joined_url,
                joined_name,
                joined_summary,
              },
            })
          }
          >
          <Text style={styles.textButton}>View profile page</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default InfoUser;
