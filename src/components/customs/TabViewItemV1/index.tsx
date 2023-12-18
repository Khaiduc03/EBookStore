import {Tab, TabView} from '@rneui/themed';
import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {CustomTabViewItemProps} from './types';
import useStyles from './styles';

const TabViewItemV1: React.FunctionComponent<
  CustomTabViewItemProps
> = props => {
  const [index, setIndex] = useState(0);
  const styles = useStyles();
  useEffect(() => {
    props.scrollRef?.current?.scrollTo({y: 0, animated: true});
  }, [props.scrollRef]);

  return (
    <View>
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
      <ScrollView
        ref={props.scrollRef}
        overScrollMode="never"
        stickyHeaderIndices={[1]}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled>
        {props.headerDetail}

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
    </View>
  );
};

export default TabViewItemV1;
