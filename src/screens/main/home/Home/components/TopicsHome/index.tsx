import {StyleSheet, Text, View, FlatList, TouchableOpacity} from 'react-native';
import React, {useState, useCallback, useEffect} from 'react';
import useStyles from './styles';
import {Topic} from '../../../../../../types/TopicType';
import {HeaderCustom, TopicItem} from '../../../../../../components';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import {TopicActions, TopicType} from '../../../../../../redux';
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {getListTopic} from '../../../../../../redux/selectors/topic.selector';

const TopicsHome = React.memo(() => {
  const dataTopic = useAppSelector(getListTopic);

  const styles = useStyles();
  const handlePressTopics = () => {
    NavigationService.navigate(routes.TOPICS);
  };

  const RenderItem = ({item, index}: {item: TopicType; index: number}) => (
    <TopicItem item={item} />
  );
  return (
    <View style={styles.container}>
      <HeaderCustom
        titleStyle={styles.textTitle}
        title="Explore by Genre"
        rightIconRight={{
          name: 'arrow-forward-outline',
          type: 'ionicon',
        }}
        onPressRightIconRight={handlePressTopics}
      />
      <FlatList
        data={dataTopic}
        renderItem={RenderItem}
        keyExtractor={item => item.uuid.toString()}
        showsHorizontalScrollIndicator={false}
        horizontal
        contentContainerStyle={{gap: 5, paddingHorizontal: 16}}
      />
    </View>
  );
});

export default TopicsHome;
