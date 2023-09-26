import { Tab, TabView } from '@rneui/themed';
import React from 'react';
import { ScrollView } from 'react-native-gesture-handler';
import useStyles from './styles';
import { CustomTabViewItemProps } from './types';

const TabViewItem: React.FunctionComponent<CustomTabViewItemProps> = props => {
  const [index, setIndex] = React.useState(0);
  const styles = useStyles();
  return (
    <ScrollView stickyHeaderIndices={[1]} showsVerticalScrollIndicator={false}>
      {props.headerDetail}
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