// SelectedImages.tsx
import React from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {Asset} from 'react-native-image-picker';
import {ForumType} from '../../../../../redux/types/forum.type';
import useStyles from '../styles';

interface SelectedImagesProps {
  images: Asset[];
  forum: ForumType;
}

const SelectedImages: React.FC<SelectedImagesProps> = props => {
  const styles = useStyles();

  const screenWidth = Dimensions.get('window').width;

  return (
    <View style={{width: screenWidth, height: 460}}>
      <FlatList
        style={styles.container}
        data={props.images}
        renderItem={({item}) => {
          if (item.uri === '' || item.uri == null) {
            return <View />;
          }
          return (
            <View style={styles.viewCenter}>
              <AutoHeightImage
                source={{
                  uri:
                    item.uri?.toString() ||
                    'https://static.chotot.com/storage/chotot-kinhnghiem/c2c/2023/01/35b2793b-hinh-nen-dien-thoai-mang-lai-may-man-2-548x1024.jpg',
                }}
                width={screenWidth}
              />
            </View>
          );
        }}
      />
    </View>
  );
};

export default SelectedImages;
