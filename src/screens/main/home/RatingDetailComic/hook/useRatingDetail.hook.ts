import {useState} from 'react';
import {NavigationService} from '../../../../../navigation';
import {useAppDispatch} from '../../../../../hooks';
import {RatingActions} from '../../../../../redux/reducer/rating.reducer';
import {routes} from '../../../../../constants';
import Toast from 'react-native-toast-message';
import {ToastAndroid} from 'react-native';

interface useRatingDetailProp {
  uuid?: string;
}

export const useRatingDetail = (props: useRatingDetailProp) => {
  const [inputText, setInputText] = useState('');
  const [isTextInputEmpty, setIsTextInputEmpty] = useState(true);
  const [showAlert, setShowAlert] = useState(false);
  const [rating, setRating] = useState(0);
  const maxCharacters = 500;
  const dispatch = useAppDispatch();

  console.log(rating);
  console.log(inputText);

  const handleGoback = () => {
    NavigationService.goBack();
  };
  const ratingCompleted = (rating: number) => {
    setRating(rating);
  };

  const handleTextChange = (text: string) => {
    setIsTextInputEmpty(text.trim() === '');
    if (text.length <= maxCharacters) {
      setInputText(text);
    }
  };
  const handleSend = () => {
    if (rating) {
      dispatch(
        RatingActions.postRating({
          rating: rating + '',
          comment: inputText,
          comic_uuid: props.uuid,
        }),
      );

      setShowAlert(false);
    } else {
      ToastAndroid.show('Please enter rating !!!', ToastAndroid.SHORT);
    }
  };
  return {
    handleGoback,
    handleSend,
    handleTextChange,
    ratingCompleted,
    inputText,
    showAlert,
    isTextInputEmpty,
    maxCharacters,
    setShowAlert,
  };
};
