// AddPicture.tsx
import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {ActivityIndicator, Text, TouchableOpacity} from 'react-native';
import {
  Asset,
  ImageLibraryOptions,
  ImagePickerResponse,
  launchImageLibrary,
} from 'react-native-image-picker';
import useStyles from '../styles';

type AddPictureProps = {
  onImagesSelected: (images: Asset[]) => void;
};

const AddPicture: React.FC<AddPictureProps> = ({onImagesSelected}) => {
  const styles = useStyles();
  const [loading, setLoading] = useState(false);

  const options: ImageLibraryOptions = {
    mediaType: 'photo',
    quality: 1,
    selectionLimit: 0,
  };

  const openGallery = async () => {
    const result = await launchImageLibrary(options);
    result && onImagesSelected(result.assets || []);
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
