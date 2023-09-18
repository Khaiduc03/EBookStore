import { StyleSheet, View } from 'react-native';
import { Tab, Text, TabView } from '@rneui/themed';
import React from 'react';
import { CustomTabViewItemProps } from './types';
import useStyles from './styles';

const TabViewItem: React.FunctionComponent<CustomTabViewItemProps> = props => {
  const [index, setIndex] = React.useState(0);
  const styles = useStyles();
  const { nameTabView } = props;
  return (
    <>
      <Tab
        containerStyle={styles.container}
        buttonStyle={{ backgroundColor: '#fff' }}
        value={index}
        onChange={e => setIndex(e)}
        indicatorStyle={{
          backgroundColor: 'black',
          height: 3,
        }}
        variant="default"
        titleStyle={styles.titleStyleProfile}>
        <Tab.Item title="FAQ" />
        <Tab.Item title="Contact US" />
      </Tab>

      <TabView value={index} onChange={setIndex} animationType="spring">
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
