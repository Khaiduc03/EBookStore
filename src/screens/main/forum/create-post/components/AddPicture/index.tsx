import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import useStyles from './styles';

const AddPicture: React.FC = () => {
  const styles = useStyles();
  return (
    <TouchableOpacity style={styles.buttonImage}>
      <Text style={styles.textbtnImage}> + Add picture</Text>
    </TouchableOpacity>
  );
};

export default AddPicture;
