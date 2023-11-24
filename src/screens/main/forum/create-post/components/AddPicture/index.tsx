// AddPicture.tsx
import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {
  ImageLibraryOptions,
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import useStyles from './styles';

interface AddPictureProps {
  onImagesSelected: (images: string[]) => void;
}

const AddPicture: React.FC<AddPictureProps> = ({onImagesSelected}) => {
  const styles = useStyles();
  const [selectedImages, setSelectedImages] = useState<string[]>([]);

  const openGallery = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      selectionLimit: 6,
    };

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('ImagePicker Error: ', response.errorMessage);
      } else if (response.assets && response.assets.length > 0) {
        const selectedUris = response.assets.map(asset => asset.uri);
        //@ts-ignore
        setSelectedImages(selectedUris);
        //@ts-ignore
        onImagesSelected(selectedUris);
      }
    });
  };

  return (
    <TouchableOpacity style={styles.buttonImage} onPress={openGallery}>
      <Text style={styles.textbtnImage}>+ Add picture</Text>
    </TouchableOpacity>
  );
};

export default AddPicture;
