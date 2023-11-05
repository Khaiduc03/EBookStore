import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {useAppDispatch} from '../../../../hooks';
import {ComicActions} from '../../../../redux';
import {HistoryList} from './components';

const Favorite: React.FC = () => {
  const dispatch = useAppDispatch();
  const styles = useStyles();
  const handlePressGoback = () => {
    dispatch(ComicActions.clearListHistory());
    NavigationService.goBack();
  };

  return (
    <View style={styles.container}>
      <HeaderCustom
        titleStyle={styles.titleStyle}
        onPressLeftIcon={handlePressGoback}
        leftIcon={{
          name: 'arrow-back-sharp',
          type: 'ionicon',
          color: styles.leftIconStyle.color,
        }}
        title="Historys List"
        rightIconRight={{
          name: 'notifications-outline',
          type: 'ionicon',
        }}
      />
      <HistoryList />
    </View>
  );
};

export default Favorite;
