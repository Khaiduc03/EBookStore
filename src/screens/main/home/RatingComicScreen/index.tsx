import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import RatingComic from '../ComicsDetail/Components/Preview/components/Rating';
import {ItemListButton, ItemRating} from './components';

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
        <View style={{paddingVertical: 30}}>
          <ItemRating />
        </View>
        <View style={styles.content}>
          <ItemListButton />
        </View>
      </View>
    </ScrollView>
  );
};

export default RatingComicScreen;
