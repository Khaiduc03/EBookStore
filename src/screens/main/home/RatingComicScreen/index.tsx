import React from 'react';
import {ScrollView, View} from 'react-native';
import {HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {ItemRating} from './components';
import ItemRatingStar from './components/ItemListButton';
import {data} from './components/ItemListButton/index';
import useStyles from './styles';

const RatingComicScreen: React.FC = () => {
  const styles = useStyles();
  const handleGoback = () => {
    NavigationService.goBack();
  };
  return (
    <ScrollView nestedScrollEnabled>
      <View style={styles.container}>
        <HeaderCustom
          leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
          title="Rating & Reviews"
          rightIconRight={{
            name: 'ellipsis-horizontal-circle-outline',
            type: 'ionicon',
          }}
          onPressLeftIcon={handleGoback}
        />
        <View style={styles.content}>
          <ItemRating />
        </View>
        <View style={styles.footer}>
          <ItemRatingStar {...data} />
        </View>
      </View>
    </ScrollView>
  );
};

export default RatingComicScreen;
