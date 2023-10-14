import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SearchCustom} from '../../../../components';
import useStyles from './styles';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {Icon} from '@rneui/themed';
import {getListComic} from '../../../../redux/selectors/comic.selector';
import {ComicActions, TopicActions} from '../../../../redux';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {backScreen} from '../../../../utils';
import {getListTopic} from '../../../../redux/selectors/topic.selector';
import {TopicType} from '../../../../redux';

const Search = () => {
  const dispatch = useAppDispatch();
  const dataComic = useAppSelector(getListComic);
  console.log('=>>>>>', dataComic);
  const dataTopic = useAppSelector(getListTopic);

  const styles = useStyles();
  const [search, setSearch] = useState('');

  const handlePressSearch = () => {
    NavigationService.navigate(routes.TOPICS);
  };
  const handlePress = (page: number) => {
    dispatch(ComicActions.getListData(page));
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TouchableOpacity onPress={() => backScreen()}>
          <Icon
            name="arrow-back"
            type="ionicon"
            size={24}
            color={styles.backIcon.color}
          />
        </TouchableOpacity>
        <View style={styles.search}>
          <SearchCustom
            setValue={setSearch}
            value={search}
            onPress={handlePressSearch}
          />
        </View>
      </View>
      <TouchableOpacity onPress={() => handlePress(1)}>
        <Text style={{fontSize: 40}}>GETCOMIC</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => dispatch(TopicActions.getListTopic())}>
        <Text style={{fontSize: 40}}>GETTOPIC</Text>
      </TouchableOpacity>
      {/* <Text>{JSON.stringify(dataComic)}</Text> */}
    </View>
  );
};

export default Search;
