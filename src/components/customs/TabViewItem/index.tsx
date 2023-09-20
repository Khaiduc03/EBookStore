import {StyleSheet, View} from 'react-native';
import {Tab, Text, TabView} from '@rneui/themed';
import React from 'react';
import {CustomTabViewItemProps} from './types';
import useStyles from './styles';

const TabViewItem: React.FunctionComponent<CustomTabViewItemProps> = props => {
  const [index, setIndex] = React.useState(0);
  const styles = useStyles();
  return (
    <>
      <Tab
        containerStyle={styles.container}
        buttonStyle={{backgroundColor: '#fff'}}
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'black',
          height: 3,
        }}
        variant="default"
        titleStyle={styles.titleStyle}>
        <Tab.Item title={props.title1} />
        <Tab.Item title={props.title2} />
      </Tab>

      <TabView
        containerStyle={props.viewStyle}
        value={index}
        onChange={setIndex}
        animationType="spring">
        <TabView.Item style={styles.containerTabView}>
          {props.screen1}
        </TabView.Item>
        <TabView.Item style={styles.containerTabView}>
          {props.screen2}
        </TabView.Item>
      </TabView>
    </>
  );
};

export default TabViewItem;
