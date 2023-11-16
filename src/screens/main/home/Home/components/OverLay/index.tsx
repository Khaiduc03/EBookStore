import React, {FunctionComponent, useState} from 'react';
import {View, Text, FlatList, TouchableOpacity} from 'react-native';
import useStyles from './styles';
import {Button, Icon, Overlay} from '@rneui/base';
import FastImage from 'react-native-fast-image';

const OverLay: FunctionComponent = () => {
  const styles = useStyles();
  const [visible, setVisible] = useState(true);

  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <Button title="Open Overlay" onPress={toggleOverlay} />
      <Overlay
        overlayStyle={styles.overLayStyle}
        isVisible={visible}
        fullScreen={true}>
        <View>
          <FastImage
            style={styles.imgStyle}
            source={{
              uri: 'https://static.wixstatic.com/media/1cf3ac_6ea6668ada5d48fe95b269a9177c2e3e~mv2.png/v1/fill/w_480,h_720,al_c,lg_1,q_85/1cf3ac_6ea6668ada5d48fe95b269a9177c2e3e~mv2.png',
            }}
          />
          <TouchableOpacity style={styles.cancelStyle} onPress={toggleOverlay}>
            <Icon name="cancel" size={30} color={'#FFF'} />
          </TouchableOpacity>
        </View>
      </Overlay>
    </View>
  );
};

export default OverLay;
