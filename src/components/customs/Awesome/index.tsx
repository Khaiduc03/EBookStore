import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import AwesomeAlert, {AwesomeAlertProps} from 'react-native-awesome-alerts';
import useStyles from './styles';

const Awesome: React.FunctionComponent<AwesomeAlertProps> = props => {
  const styles = useStyles();
  return (
    <AwesomeAlert
      show={props.show}
      showProgress={false}
      title={props.title}
      message={props.message}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={false}
      showCancelButton={true}
      showConfirmButton={true}
      cancelText={props.cancelText}
      cancelButtonColor={props.cancelButtonColor}
      confirmText={props.confirmText}
      confirmButtonColor={props.confirmButtonColor}
      onCancelPressed={props.onCancelPressed}
      onConfirmPressed={props.onConfirmPressed}
      titleStyle={props.titleStyle || styles.textTitleAlert}
      messageStyle={props.messageStyle || styles.textMessageAlert}
      cancelButtonTextStyle={
        props.cancelButtonTextStyle || styles.textCancelAlert
      }
      confirmButtonTextStyle={
        props.confirmButtonTextStyle || styles.textConfirmAlert
      }
      cancelButtonStyle={props.cancelButtonStyle}
      confirmButtonStyle={props.confirmButtonStyle}
      onDismiss={props.onDismiss}
    />
  );
};

export default Awesome;
