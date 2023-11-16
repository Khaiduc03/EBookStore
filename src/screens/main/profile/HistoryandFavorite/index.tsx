import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Tab, TabView} from '@rneui/themed';
import {HeaderCustom, TabViewItem} from '../../../../components';

import {NavigationService} from '../../../../navigation';
import Favorite from './components/Favorite';
import History from './components/History';

const HistoryandFavorite: React.FC = () => {
  const [index, setIndex] = React.useState(0);
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.goBack();
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        titleStyle={styles.titleStyleHeader}
        onPressLeftIcon={handlePressGoback}
        leftIcon={{
          name: 'arrow-back-sharp',
          type: 'ionicon',
          color: styles.leftIconStyle.color,
        }}
        title="Favorites List"
        rightIconRight={{
          name: 'notifications-outline',
          type: 'ionicon',
        }}
      />
      <Tab
        containerStyle={styles.container}
        buttonStyle={{backgroundColor: '#181A20'}}
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={styles.indicatorStyle}
        variant="default"
        titleStyle={styles.titleStyle}>
        <Tab.Item title={'Favorite'} />
        <Tab.Item title={'History'} />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={styles.containerTabView}>
          <Favorite />
        </TabView.Item>

        <TabView.Item style={styles.containerTabView}>
          <History />
        </TabView.Item>
      </TabView>
    </View>
  );
};

export default HistoryandFavorite;
