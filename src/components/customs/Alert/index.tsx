import React, {FunctionComponent, useCallback, useEffect} from 'react';

import {Text} from '@rneui/themed';
import {TouchableOpacity, View} from 'react-native';
import Animated, {
  Extrapolate,
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

import LottieView from 'lottie-react-native';
import {useAppDispatch, useAppSelector, useBackHandler} from '../../../hooks';
import {AlertActions} from '../../../redux/reducer/alert.reducer';
import {getAlertState} from '../../../redux/selectors/alert.selector';
import useStyles from './styles';

const AnimatedView = Animated.createAnimatedComponent(View);

const Alert: FunctionComponent = () => {
  // hooks
  const styles = useStyles();
  const {
    imageTitle,
    isShow,
    title,
    description,
    onAccept,
    onCancel = () => {},
    isAccept,
    isCancel,
  } = useAppSelector(getAlertState);

  const onRequestClose = useCallback(() => {
    dispatch(AlertActions.cleanDataAlert());
  }, []);

  const dispatch = useAppDispatch();
  useBackHandler({
    enabled: isShow,
    callback: onRequestClose,
  });

  // animation
  const progress = useSharedValue(0.5);

  // when is show changed => run animation and reverse animation
  useEffect(() => {
    if (isShow) {
      progress.value = withSpring(1);
    } else {
      progress.value = withSpring(0.5);
    }
  }, [isShow]);

  // when animation run => update overlayStyle
  const overlayStyle = useAnimatedStyle(() => {
    const background = interpolateColor(
      progress.value,
      [0, 1, 0],
      ['rgba(0, 0, 0, 0)', 'rgba(0, 0, 0, 0.6)', 'rgba(0, 0, 0, 0)'],
    );

    return {
      backgroundColor: background,
    };
  }, []);

  // when animation run => update containerStyle
  const containerStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      progress.value,
      [0, 1, 0],
      [0.3, 1, 0.3],
      Extrapolate.CLAMP,
    );

    return {
      transform: [{scale: scale}],
    };
  }, []);

  // if isShow = false => not show anything
  if (!isShow) {
    return <View />;
  }

  return (
    <AnimatedView style={[styles.overlay, overlayStyle]}>
      <AnimatedView style={[styles.container, containerStyle]}>
        <View style={styles.topContainer}>
          <LottieView
            style={styles.lottieView}
            source={imageTitle}
            autoPlay
            loop={false}
          />

          <Text style={styles.titleStyle}>{`${title} `}</Text>
          <Text style={styles.descriptionStyle}>{description}</Text>
        </View>
        {(isAccept || isCancel) && (
          <View style={styles.bottomContainer}>
            {isAccept && (
              <TouchableOpacity
                style={styles.buttonOkStyle}
                onPress={() => {
                  onRequestClose();
                  onAccept && onAccept();
                }}>
                <Text style={styles.buttonTextStyle}>ok</Text>
              </TouchableOpacity>
            )}
            {isCancel && (
              <TouchableOpacity
                style={styles.buttonCancelStyle}
                onPress={() => {
                  onRequestClose();
                  onCancel && onCancel();
                }}>
                <Text style={styles.buttonTextStyle}>Cancel</Text>
              </TouchableOpacity>
            )}
          </View>
        )}
      </AnimatedView>
    </AnimatedView>
  );
};

export default Alert;
