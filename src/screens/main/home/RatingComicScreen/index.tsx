import React, {useEffect} from 'react';
import {ScrollView, View} from 'react-native';
import {HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {ItemRating} from './components';
import ItemRatingStar from './components/ItemListButton';
import {data} from './components/ItemListButton/index';
import useStyles from './styles';
import {routes} from '../../../../constants';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {useRoute} from '@react-navigation/native';
import {RatingActions} from '../../../../redux/reducer/rating.reducer';
import {getListRating} from '../../../../redux/selectors/rating.selector';
interface RouteParamsIdComic {
  uuid: string;
}

const RatingComicScreen: React.FC<RouteParamsIdComic> = () => {
  const styles = useStyles();
  const handleGoback = () => {
    NavigationService.goBack();
  };
  const dispatch = useAppDispatch();
  const route = useRoute();
  const uuid = (route.params as RouteParamsIdComic).uuid;

  useEffect(() => {
    dispatch(RatingActions.getListRating(uuid));
  }, []);

  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        title="Rating & Reviews"
        rightIconRight={{
          name: 'ellipsis-horizontal-circle-outline',
          type: 'ionicon',
        }}
        onPressLeftIcon={handleGoback}
        onPressRightIconRight={() =>
          NavigationService.navigate(routes.RATINGDETAILCOMIC)
        }
      />
      <View style={styles.content}>
        <ItemRating />
      </View>

      <ItemRatingStar {...data} />
    </View>
  );
};

export default RatingComicScreen;
