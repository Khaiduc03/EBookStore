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

type AddPictureProps = {
  onImagesSelected: (images: string[]) => void;
  formData: FormData;
};

const AddPicture: React.FC<AddPictureProps> = ({
  onImagesSelected,
  formData,
}) => {
  const styles = useStyles();
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);

  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    quality: 1,
    selectionLimit: 0,
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    if (result?.assets && result.assets[0].uri) {
      result.assets.forEach(asset => {
        formData.append(`images`, {
          uri: asset.uri,
          name: asset.fileName,
          type: asset.type,
        });
      });
      console.log('data library:', formData);
    } else {
      console.log('No assets or uri in result:', result);
    }
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
