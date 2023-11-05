import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {Skeleton} from '@rneui/base';
import useStyles from './styles';
import {useAppSelector} from '../../../hooks';
import {getIsLoadingMain} from '../../../redux/selectors/loading.selector';
import {Device} from '../../../utils';

const WIDTH = Device.getDeviceWidth();
const HEIGHT = Device.getDeviceHeight();

const LoadingMain = () => {
  const styles = useStyles();
  const loading = useAppSelector(getIsLoadingMain);

  if (!loading) {
    return <View />;
  }

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Skeleton style={{marginTop: 20}} height={150} width={120} />
        <View style={{marginLeft: 20, gap: 10}}>
          <Skeleton style={{borderRadius: 5}} width={150} height={15} />
          <Skeleton style={{borderRadius: 5}} width={100} height={15} />
          <Skeleton style={{borderRadius: 5}} width={150} height={15} />
          <View style={{flexDirection: 'row', gap: 10}}>
            <Skeleton style={{borderRadius: 5}} width={40} height={20} />
            <Skeleton style={{borderRadius: 5}} width={40} height={20} />
            <Skeleton style={{borderRadius: 5}} width={40} height={20} />
          </View>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 30,
        }}>
        <Skeleton width={70} height={40} />
        <Skeleton width={70} height={40} />
        <Skeleton width={70} height={40} />
        <Skeleton width={70} height={40} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          justifyContent: 'space-around',
        }}>
        <Skeleton width={150} height={50} />
        <Skeleton width={150} height={50} />
      </View>

      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          justifyContent: 'space-around',
        }}>
        <Skeleton width={'100%'} height={300} />
      </View>
    </View>
  );
};

export default LoadingMain;
