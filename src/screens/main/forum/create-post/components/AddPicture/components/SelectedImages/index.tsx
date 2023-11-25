// SelectedImages.tsx
import React from 'react';
import {View, Image, Text} from 'react-native';
import useStyles from './styles';

interface SelectedImagesProps {
  images: string[];
}

const SelectedImages: React.FC<SelectedImagesProps> = ({images}) => {
  const styles = useStyles();

  return (
    <View style={styles.container}>
      {images.map((uri, index) => (
        <View key={index} style={styles.imageContainer}>
          <Image source={{uri: uri}} style={styles.selectedImage} />
        </View>
      ))}
    </View>
  );
};

export default SelectedImages;
