import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {images} from '../../../../assets';
import {HeaderCustom} from '../../../../components';
import {ItemListPost} from './components';
import useStyles from './styles';

const Forum: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'users', type: 'font-awesome'}}
        title="Forum"
      />
      <View style={styles.header}>
        <View style={styles.itemHeader}>
          <Image style={styles.image} source={images.avata} />
          <TouchableOpacity style={styles.buttonHeader}>
            <Text style={styles.textHeader}>What are you thinking?</Text>
          </TouchableOpacity>
          <Image style={styles.image} source={images.image_default} />
        </View>
      </View>
      <View style={{flex: 1}}>
        <ItemListPost />
      </View>
    </View>
  );
};

export default Forum;
