import {View, Text, NativeModules, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {HeaderCustom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {images} from '../../../../assets';
import {Icon} from '@rneui/themed';

const CreatePost: React.FC = () => {
  const styles = useStyles();
  const handleGoBack = () => {
    NavigationService.goBack();
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        title="Create Your Post"
        rightIconRight={{name: 'checkmark', type: 'ionicon'}}
        onPressLeftIcon={handleGoBack}
      />
      <View style={styles.header}>
        <Image style={styles.image} source={images.avata} />
        <Text>Drake</Text>
        <TouchableOpacity>
          <Icon name="public" type="material" />
          <Text>Public</Text>
          <Icon name="caret-down-sharp" type="ionicon" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CreatePost;
