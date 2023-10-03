import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {SearchCustom} from '../../../../components';

import useStyles from './styles';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {Icon} from '@rneui/themed';
import {getListComic} from '../../../../redux/selectors/comic.selector';
import {ComicActions} from '../../../../redux';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {backScreen} from '../../../../utils';

const Search = () => {
  const dispatch = useAppDispatch();
  const dataComic = useAppSelector(getListComic);
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
    </View>
  );
};

export default Search;
