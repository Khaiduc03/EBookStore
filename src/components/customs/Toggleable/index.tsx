import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import useStyles from '../Toggleable/styles';
import {ToggleableViewProps} from '../Toggleable/types';
import {images} from '../../../assets/images/png';
import {Icon} from '@rneui/themed';

const Toggleable: React.FC<ToggleableViewProps> = ({title, content}) => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const styles = useStyles();

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.Name}>{title}</Text>
        {isContentVisible && (
          <>
            <View style={styles.line}></View>
            <Text style={styles.content}>{content}</Text>
          </>
        )}
      </View>
      <TouchableOpacity style={styles.iconContainer} onPress={toggleContent}>
        {isContentVisible ? (
          <Icon name="sort-up" type="font-awesome" style={styles.icon} />
        ) : (
          <Icon name="sort-down" type="font-awesome" style={styles.icon} />
        )}
      </TouchableOpacity>
    </View>
  );
};
export default Toggleable;
