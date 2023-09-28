import React from 'react';

import {View} from 'react-native';

import {HeaderCustom} from '../../../../components';
import {routes} from '../../../../constants';
import {NavigationService} from '../../../../navigation';
import ComicFavorite, {data} from './ComicFavorite';
import useStyles from './styles';

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
