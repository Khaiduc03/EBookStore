import {ScrollView, Linking} from 'react-native';
import {
  ComicActions,
  ComicType,
  getUuidPostFavorite,
} from '../../../../../redux';
import {useRoute} from '@react-navigation/native';
import {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../../../../hooks';
import {NavigationService} from '../../../../../navigation';
import {RatingActions} from '../../../../../redux/reducer/rating.reducer';
import {getChartRating} from '../../../../../redux/selectors/rating.selector';
import Share from 'react-native-share';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {err} from 'react-native-svg/lib/typescript/xml';

interface RouteParamsIdComic {
  data: ComicType;
  scrollRef: React.RefObject<ScrollView>;
}
export const useComicDetail = () => {
  const dispatch = useAppDispatch();
  const route = useRoute();
  const uuidPost = useAppSelector(getUuidPostFavorite);
  const dataChart = useAppSelector(getChartRating);
  const [visible2, setVisible2] = useState(false);

  const data = (route.params as RouteParamsIdComic).data;
  const scrollRef = (route.params as RouteParamsIdComic).scrollRef;

  useEffect(() => {
    dispatch(RatingActions.getRatingChart(data.comic_uuid || data.uuid));
    dispatch(ComicActions.checkFavorite(data.comic_uuid || data.uuid));
    dispatch(ComicActions.getListChapter(data.comic_uuid || data.uuid));
    dispatch(ComicActions.getListByTopicMore({name: data.topics}));
  }, [data]);

  const postFavorite = () => {
    if (uuidPost) {
      dispatch(ComicActions.deleteFavorite(uuidPost));
    } else {
      dispatch(ComicActions.postFavorite(data.comic_uuid || data.uuid));
    }
  };

  const handlePressBack = () => {
    NavigationService.goBack();
  };

 

  const onShare = async () => {
   // const getLink = await generateLink();

    // const initialUrl = await Linking.getInitialURL();
    // console.log(initialUrl);
    // const {url: initialUrl, processing} = useInitialURL();
    const options: any = {
      url: 'getLink',
      message: 'getLink',
    };

    try {
      const res = await Share.open(options);
      setVisible2(false);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handlePressBack,
    data,

    postFavorite,
    scrollRef,
    dataChart,
    visible2,
    setVisible2,
    uuidPost,
  };
};
