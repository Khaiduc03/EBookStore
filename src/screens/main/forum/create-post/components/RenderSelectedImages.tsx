import React from 'react';
import {Dimensions, View, FlatList} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Asset} from 'react-native-image-picker';
import useStyles from '../styles';

interface SelectedImagesProps {
  images: Asset[];
}

const SelectedImages: React.FC<SelectedImagesProps> = props => {
  const styles = useStyles();

  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  return (
    <View style={styles.viewFlatList}>
      <FlatList
        data={props.images}
        keyExtractor={(item, index) => item.uri || index.toString()}
        renderItem={({item}) => {
          if (!item.uri) {
            return <View />;
          }
          return (
            <AutoHeightImage source={{uri: item.uri}} width={screenWidth} />
          );
        }}
        style={styles.container}
      />
    </View>
  );
};

export default SelectedImages;
