import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {SearchCustom} from '../../../../components';
import useStyles from './styles';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {Icon} from '@rneui/themed';
import {
  getListComic,
  getDetailComic,
  getDataByTopic,
  getDataAllChapter,
  getDataDetailChapter,
  getDataComicBySeacrh,
} from '../../../../redux/selectors/comic.selector';
import {ComicActions, TopicActions} from '../../../../redux';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {backScreen} from '../../../../utils';

const Search = () => {
  const dispatch = useAppDispatch();
  const dataBySearch = useAppSelector(getDataComicBySeacrh);

  const styles = useStyles();
  const [search, setSearch] = useState('');

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
          <SearchCustom setValue={setSearch} value={search} />
        </View>
      </View>
      <TouchableOpacity
        onPress={() =>
          dispatch(ComicActions.getListBySearch({key: 'a', page: 1}))
        }>
        <Text style={{fontSize: 40}}>GETSEARCH</Text>
      </TouchableOpacity>
      <Text>{JSON.stringify(dataBySearch)}</Text>
    </View>
  );
};

export default Search;
