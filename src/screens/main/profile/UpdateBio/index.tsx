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
  const maxCharacters = 120;
  const [isTextInputEmpty, setIsTextInputEmpty] = useState(true);

  const handleTextChange = (text: string) => {
    setIsTextInputEmpty(text.trim() === '');
    if (text.length <= maxCharacters) {
      setvalue(text);
    }
  };

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
        onChangeText={handleTextChange}
        style={styles.inputStyle}
      />
      <Text style={styles.countText}>{`${value.length}/${maxCharacters}`}</Text>
    </View>
  );
};

export default UpdateBio;
