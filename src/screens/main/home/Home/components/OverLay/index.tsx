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
              uri: 'https://m.media-amazon.com/images/I/81-PLxbqw0L._AC_UF1000,1000_QL80_.jpg',
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
