import {useState, useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../../../../../hooks';
import {getListRating} from '../../../../../redux/selectors/rating.selector';
import {RatingType} from '../../../../../redux/types/rating.type';
import {RatingActions} from '../../../../../redux/reducer/rating.reducer';

export const useRating = () => {
  const dataRating = useAppSelector(getListRating);
  const [show, setShow] = useState(false);

  const [selectedRating, setSelectedRating] = useState<number | null>(null);
  const [displayedData, setDisplayedData] = useState<RatingType[]>();
  const [showAlert, setShowAlert] = useState(false);
  const dispatch = useAppDispatch();

  useEffect(() => {
    setDisplayedData(dataRating);
    return () => {};
  }, [dataRating]);

  const handleRatingClick = (rating: number | null) => {
    setSelectedRating(rating);

    if (rating === null) {
      setDisplayedData(dataRating!);
    } else {
      const filteredData = dataRating!.filter(item => item.rating === rating);
      setDisplayedData(filteredData);
    }
  };

  const onPressLikeRating = (item: RatingType) => {
    if (item.is_like) {
      dispatch(RatingActions.unLikeRating(item.uuid));
    } else {
      dispatch(RatingActions.likeRating(item.uuid));
    }
  };

  const onPressDeleteRating = (uuid: string) => {
    console.log('===========>', uuid);
    dispatch(RatingActions.deleteRating(uuid));
    setShow(false);
  };

  return {
    handleRatingClick,
    selectedRating,
    dataRating,
    displayedData,
    onPressLikeRating,
    onPressDeleteRating,
    showAlert,
    setShowAlert,
    show,
    setShow,
  };
};
