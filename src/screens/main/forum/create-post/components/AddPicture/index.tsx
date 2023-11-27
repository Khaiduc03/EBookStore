// AddPicture.tsx
import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {
  ImageLibraryOptions,
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import useStyles from './styles';

interface AddPictureProps {
  onImagesSelected: (images: string[]) => void;
  formData: FormData;
}

const AddPicture: React.FC<AddPictureProps> = ({
  onImagesSelected,
  formData,
}) => {
  const styles = useStyles();
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const openGallery = () => {
    const options: ImageLibraryOptions = {
      mediaType: 'photo',
      quality: 1,
      selectionLimit: 0,
    };

    setLoading(true);

    launchImageLibrary(options, (response: ImagePickerResponse) => {
      setLoading(false);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.errorMessage) {
        console.log('Error', `ImagePicker Error: ${response.errorMessage}`);
      } else if (response.assets && response.assets.length > 0) {
        console.log('abc ', response.assets);
        response.assets.forEach(asset => {
          formData.append(`images`, {
            uri: asset.uri,
            name: asset.fileName,
            type: asset.type,
          });
        });
        console.log('bbbb: ', formData);
      }
    });
  };

  return (
    <TouchableOpacity
      style={styles.buttonImage}
      onPress={openGallery}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator size="small" color={styles.icon.color} />
      ) : (
        <>
          <Icon
            name="add-outline"
            type="ionicon"
            color={styles.icon.color}
            size={18}
          />
          <Text style={styles.textbtnImage}>Add picture</Text>
        </>
      )}
    </TouchableOpacity>
  );
};

export default AddPicture;
