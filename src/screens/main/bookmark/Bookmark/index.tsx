import React from 'react';

import {View} from 'react-native';

import {HeaderCustom} from '../../../../components';
import useStyles from './styles';

const Bookmark: React.FC = () => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'book', type: 'font-awesome'}}
        title="Favorite"
        rightIconleft={{name: 'magnifying-glass', type: 'entypo'}}
        rightIconRight={{name: 'sliders', type: 'font-awesome'}}
      />
    </View>
  );
};

export default Bookmark;
