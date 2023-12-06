import React, {useEffect} from 'react';
import {Text, View, FlatList} from 'react-native';
import useStyles from './styles';
import {Skeleton} from '@rneui/themed';
import {HeaderCustom, TopicItem} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {ScrollView} from 'react-native-gesture-handler';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {TopicActions, TopicType} from '../../../../redux';
import {getListTopic} from '../../../../redux/selectors/topic.selector';

const Topics: React.FunctionComponent = () => {
  const dataTopic = useAppSelector(getListTopic);

  const handlePressSearch = () => {
    NavigationService.navigate(routes.SEARCH);
  };
  const handlePressBack = () => {
    NavigationService.goBack();
  };
  const styles = useStyles();

  const RenderItem = ({index, item}: {item: TopicType; index: number}) => (
    <TopicItem
      item={item}
      viewStyle={styles.imgContainer}
      textStyle={styles.titleStyle}
    />
  );
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIconStyle={styles.leftIcon}
        leftIcon={{
          name: 'arrow-back',
          type: 'ionicon',
          color: styles.leftIcon.color,
          size: styles.leftIcon.fontSize,
        }}
        title="Explore by Genre"
        rightIconRight={{name: 'search', size: styles.rightLeftIcon.fontSize}}
        onPressLeftIcon={handlePressBack}
        onPressRightIconRight={handlePressSearch}
      />

      <View style={styles.listTopicContainer}>
        <FlatList
          data={dataTopic}
          renderItem={RenderItem}
          keyExtractor={item => item.uuid.toString()}
          showsVerticalScrollIndicator={false}
          numColumns={2}
          columnWrapperStyle={styles.columnStyle}
        />
      </View>
    </View>
  );
};

export default Topics;
