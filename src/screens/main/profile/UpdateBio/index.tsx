import {StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';
import {HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {useAppDispatch} from '../../../../hooks';
import {UserAction} from '../../../../redux/reducer/user.reducer';

const UpdateBio = () => {
  const styles = useStyles();
  const [value, setvalue] = useState('');

  const dispatch = useAppDispatch();

  const handlePressGoback = () => {
    NavigationService.goBack();
  };
  const handlePressUpdateSummary = () => {
    dispatch(UserAction.putSummary(value));
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        title="Biographic"
        leftIcon={{
          name: 'close',
          color: styles.iconLeftStyle.color,
          type: 'ionicon',
        }}
        onPressLeftIcon={handlePressGoback}
        rightIconRight={{
          name: 'checkmark-sharp',
          type: 'ionicon',
        }}
        onPressRightIconRight={handlePressUpdateSummary}
      />
      <TextInput
        value={value}
        onChangeText={text => setvalue(text)}
        style={styles.inputStyle}
      />
    </View>
  );
};

export default UpdateBio;
