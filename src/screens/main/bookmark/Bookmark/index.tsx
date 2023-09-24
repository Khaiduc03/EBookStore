import React, {FunctionComponent, useState} from 'react';

import {View, Switch} from 'react-native';

import {Text} from '@rneui/base';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {getMode} from '../../../../redux/selectors/thems.selector';
import {ThemeActions} from '../../../../redux';
import useStyles from './styles';
import {HeaderCustom} from '../../../../components';
import ComicFavorite, {data} from './ComicFavorite';
import {images} from '../../../../assets';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';

const Bookmark: React.FC = () => {
  const styles = useStyles();
  const handlePressSearch = () => {
    NavigationService.navigate(routes.SEARCHBOOKMARK);
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'book', type: 'font-awesome'}}
        title="Favorite"
        rightIconleft={{name: 'magnifying-glass', type: 'entypo'}}
        onPressLeftIcon={handlePressSearch}
        rightIconRight={{name: 'sliders', type: 'font-awesome'}}
      />
      <ComicFavorite data={data} />
    </View>
  );
};

export default Bookmark;
