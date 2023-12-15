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
import AwesomeAlert from 'react-native-awesome-alerts';
import {useRatingDetail} from './hook/useRatingDetail.hook';
interface RouteParamsIdComic {
  uuid?: string;
}

const RatingDetailComic: React.FC<RouteParamsIdComic> = () => {
  const route = useRoute();
  const uuid = (route.params as RouteParamsIdComic).uuid;
  const styles = useStyles();

  const {
    handleGoback,
    handleSend,
    handleTextChange,
    inputText,
    isTextInputEmpty,
    ratingCompleted,
    showAlert,
    maxCharacters,
    setShowAlert,
  } = useRatingDetail({uuid: uuid});

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
        onPressRightIconRight={() => {
          setShowAlert(!showAlert);
        }}
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
      <AwesomeAlert
        show={showAlert}
        showProgress={false}
        title="Post rating 😕"
        message="Are you sure you want to post your rating?"
        closeOnTouchOutside={true}
        closeOnHardwareBackPress={false}
        showCancelButton={true}
        showConfirmButton={true}
        cancelText="No, cancel"
        cancelButtonColor="blue"
        confirmText="Yes, post"
        confirmButtonColor="red"
        onCancelPressed={() => {
          setShowAlert(false);
        }}
        onConfirmPressed={handleSend}
        titleStyle={styles.textTitleAlert}
        messageStyle={styles.textMessageAlert}
        cancelButtonTextStyle={styles.textCancelAlert}
        confirmButtonTextStyle={styles.textConfirmAlert}
      />
    </View>
  );
};

export default RatingDetailComic;
