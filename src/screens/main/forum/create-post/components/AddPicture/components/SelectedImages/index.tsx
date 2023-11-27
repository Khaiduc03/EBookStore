// SelectedImages.tsx
import React from 'react';
import {Dimensions, FlatList, View} from 'react-native';
import AutoHeightImage from 'react-native-auto-height-image';
import {ForumType} from '../../../../../../../../redux/types/forum.type';
import useStyles from './styles';

interface SelectedImagesProps {
  images: string[];
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
          return (
            <View style={styles.viewCenter}>
              <AutoHeightImage
                source={{
                  uri: item,
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
