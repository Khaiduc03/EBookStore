import {AirbnbRating} from '@rneui/themed';
import React, {useState, useEffect} from 'react';
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import {HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {getAuthUserProfile} from '../../../../redux';
import useStyles from './styles';
import {useAppDispatch, useAppSelector} from '../../../../hooks';
import {RatingActions} from '../../../../redux/reducer/rating.reducer';
import {useRoute} from '@react-navigation/native';
import {getListRating} from '../../../../redux/selectors/rating.selector';
interface RouteParamsIdComic {
  uuid: string;
}

const RatingDetailComic: React.FC<RouteParamsIdComic> = () => {
  const styles = useStyles();

  const handleGoback = () => {
    NavigationService.goBack();
  };
  const ratingCompleted = (rating: number) => {
    console.log('Rating is: ' + rating);
  };
  const [inputText, setInputText] = useState('');
  const [isTextInputEmpty, setIsTextInputEmpty] = useState(true);
  const maxCharacters = 500;

  const handleTextChange = (text: string) => {
    setIsTextInputEmpty(text.trim() === '');
    if (text.length <= maxCharacters) {
      setInputText(text);
    }
  };
  const handleSend = () => {
    if (isTextInputEmpty) {
      Alert.alert('Failed', 'Please enter text before sending rating');
    } else {
      Alert.alert('Success', 'Thanks for your rating');
    }
  };
  const user = useSelector(getAuthUserProfile);
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        title="Solo Leveling"
        rightIconRight={{
          name: 'cloud-upload-outline',
          type: 'ionicon',
        }}
        onPressLeftIcon={handleGoback}
        onPressRightIconRight={handleSend}
      />
      <View style={styles.content}>
        <Image
          style={styles.avatar}
          source={{
            uri: user.image_url,
          }}
        />
        <View style={{gap: 5}}>
          <Text style={styles.nameUser}>{user.fullname}</Text>
          <Text style={styles.description}>
            Edits are public unless you delete the review.
            <TouchableOpacity>
              <Text style={styles.detailMore}>Find out more</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
      <AirbnbRating
        defaultRating={0}
        selectedColor="#FFC911"
        showRating={false}
        size={26}
        starContainerStyle={styles.star}
        ratingContainerStyle={styles.viewstar}
        onFinishRating={ratingCompleted}
      />
      <View style={styles.footer}>
        <TextInput
          textAlignVertical="top"
          multiline
          style={styles.textInput}
          placeholder="Please update app"
          value={inputText}
          onChangeText={handleTextChange}
        />
        <Text
          style={
            styles.countText
          }>{`${inputText.length}/${maxCharacters}`}</Text>
      </View>
    </View>
  );
};

export default RatingDetailComic;
