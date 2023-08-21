import React, { FunctionComponent } from 'react';

import { makeStyles } from '@rneui/themed';
import { StyleProp, ViewStyle, View } from 'react-native';
import RNModal, { ModalProps as RNModalProps } from 'react-native-modal';
import { useBackHandler } from '../../../hooks';



interface ModalProps extends Partial<RNModalProps> {
  isVisible: boolean;
  onRequestClose?: () => void;
  contentStyle?: StyleProp<ViewStyle>;
}

const ModalWrapContent: FunctionComponent<ModalProps> = (props) => {
  const {
    isVisible,
    onRequestClose = () => {},
    children,
    contentStyle,
    style,
    ...rest
  } = props;
  const styles = useStyle();

  useBackHandler({
    enabled: isVisible,
    callback: onRequestClose,
  });

  return (
    <RNModal
      isVisible={isVisible}
      presentationStyle="overFullScreen"
      style={[style, { margin: 0 }]}
      animationIn={'slideInUp'}
      animationOut={'slideOutDown'}
      useNativeDriver
      animationInTiming={500}
      {...rest}
    >
      <View style={[styles.container, contentStyle]}>{children}</View>
    </RNModal>
  );
};

const useStyle = makeStyles(({ colors }) => ({
  container: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: colors.white,
  },
}));

export default ModalWrapContent;
