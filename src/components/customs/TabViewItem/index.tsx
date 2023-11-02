import {StyleSheet, View} from 'react-native';
import {Tab, Text, TabView} from '@rneui/themed';
import React from 'react';
import {CustomTabViewItemProps} from './types';
import useStyles from './styles';
import {ScrollView} from 'react-native-gesture-handler';
import {HeaderDetail} from '../../../screens/main/home/ComicsDetail/Components';
import {Touchable} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native';

const TabViewItem: React.FunctionComponent<CustomTabViewItemProps> = props => {
  const [index, setIndex] = React.useState(0);
  const styles = useStyles();
  return (
    <ScrollView
      overScrollMode="never"
      stickyHeaderIndices={[1]}
      showsVerticalScrollIndicator={false}
      nestedScrollEnabled>
      {props.headerDetail}
      <Tab
        containerStyle={styles.container}
        buttonStyle={props.tabStyle || {backgroundColor: '#FFF'}}
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={styles.indicatorStyle}
        variant="default"
        titleStyle={props.titleStyle || styles.titleStyle}>
        <Tab.Item title={props.title1} />
        <Tab.Item title={props.title2} />
      </Tab>

      <TabView
        disableSwipe={true}
        containerStyle={props.viewStyle}
        value={index}
        onChange={setIndex}
        animationType="timing">
        <TabView.Item style={styles.containerTabView}>
          {props.screen1}
        </TabView.Item>

        <TabView.Item style={styles.containerTabView}>
          {props.screen2}
        </TabView.Item>
      </TabView>
    </ScrollView>
  );
};

export default TabViewItem;
