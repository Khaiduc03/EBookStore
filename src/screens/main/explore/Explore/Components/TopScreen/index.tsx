import {View, Text} from 'react-native';
import React, {useEffect} from 'react';
import useStyles from './styles';
import {Tab, TabView} from '@rneui/themed';
import {HeaderCustom} from '../../../../../../components';
import {NavigationService} from '../../../../../../navigation';
import TopListFavorite from '../TopListFavorite';
import TopListRating from '../TopListRating';
import TopViewComic from '../TopViewComic';
import TopViewList from '../TopViewComic/components/TopViewList';
import {useAppDispatch} from '../../../../../../hooks';
import {ComicActions} from '../../../../../../redux';

const TopScreen: React.FC = () => {
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
        title="Top Comic"
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
        <Tab.Item title={'Rating'} />
        <Tab.Item title={'View'} />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
        <TabView.Item style={styles.containerTabView}>
          <TopListFavorite />
        </TabView.Item>

        <TabView.Item style={styles.containerTabView}>
          <TopListRating />
        </TabView.Item>
        <TabView.Item style={styles.containerTabView}>
          <TopViewList />
        </TabView.Item>
      </TabView>
    </View>
  );
};

export default TopScreen;
