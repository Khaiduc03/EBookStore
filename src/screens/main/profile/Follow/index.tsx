import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import useStyles from './styles';
import {HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {UserAction} from '../../../../redux/reducer/user.reducer';
import {Tab, TabView} from '@rneui/base';
import {ItemListFollow} from './components';
import FollowerList from './components/FollowerList';
import FollowingList from './components/FollowingList';
import {getAuthUserProfile} from '../../../../redux';

const Follow = () => {
  const styles = useStyles();
  const dispatch = useAppDispatch();
  const user = useAppSelector(getAuthUserProfile);

  useEffect(() => {
    dispatch(UserAction.getListFollow());
  }, []);

  const handlePressGoback = () => {
    NavigationService.goBack();
  };
  const [index, setIndex] = React.useState(0);
  return (
    <View style={styles.container}>
      <HeaderCustom
        title={user.fullname}
        leftIcon={{
          name: 'arrow-back',
          color: styles.iconLeftStyle.color,
          type: 'ionicon',
        }}
        onPressLeftIcon={handlePressGoback}
      />
      <Tab
        containerStyle={styles.container}
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={styles.indicatorStyle}
        variant="default"
        titleStyle={styles.titleStyleTab}>
        <Tab.Item title={'Following'} />
        <Tab.Item title={'Follower'} />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={styles.containerTabView}>
          <FollowingList />
        </TabView.Item>

        <TabView.Item style={styles.containerTabView}>
          <FollowerList />
        </TabView.Item>
      </TabView>
    </View>
  );
};

export default Follow;
