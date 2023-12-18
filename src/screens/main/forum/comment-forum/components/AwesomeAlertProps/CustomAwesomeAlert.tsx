import React from 'react';
import AwesomeAlert from 'react-native-awesome-alerts';
import useStyles from './styles';

interface CustomAwesomeAlertProps {
  title: string;
  message: string;
  cancelText: string;
  confirmText: string;
  showAlert: boolean;
  setShowAlert: (show: boolean) => void;
  onPressConfirm: () => void;
}

const CustomAwesomeAlert: React.FC<CustomAwesomeAlertProps> = ({
  title,
  message,
  cancelText,
  confirmText,
  showAlert,
  setShowAlert,
  onPressConfirm,
}) => {
  const styles = useStyles();

  return (
    <AwesomeAlert
      show={showAlert}
      showProgress={false}
      title={title}
      message={message}
      closeOnTouchOutside={true}
      closeOnHardwareBackPress={false}
      showCancelButton={true}
      showConfirmButton={true}
      cancelText={cancelText}
      cancelButtonColor="blue"
      confirmText={confirmText}
      confirmButtonColor="red"
      onCancelPressed={() => {
        setShowAlert(false);
      }}
      onConfirmPressed={() => {
        setShowAlert(false);
        onPressConfirm();
      }}
      onDismiss={() => {
        setShowAlert(false);
      }}
      titleStyle={styles.textTitleAlert}
      messageStyle={styles.textMessageAlert}
      cancelButtonTextStyle={styles.textCancelAlert}
      confirmButtonTextStyle={styles.textConfirmAlert}
      contentContainerStyle={styles.contentContainerStyle}
    />
  );
};

export default CustomAwesomeAlert;
