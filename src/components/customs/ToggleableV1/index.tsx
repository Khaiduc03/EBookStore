import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import {ToggleableViewProps} from '../Toggleable/types';
import {images} from '../../../assets/images/png';
import {Icon} from '@rneui/themed';
import useStyles from './styles';

const ToggleableV1: React.FC<ToggleableViewProps> = ({title, content}) => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const styles = useStyles();

  const toggleContent = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={toggleContent} style={{alignItems: 'center'}}>
        <View style={styles.viewItem}>
          <View style={{flex: 6}}>
            <Text style={styles.Name}>{title}</Text>
            {isContentVisible && (
              <>
                <View style={styles.line}></View>
                <Text style={styles.content}>{content}</Text>
              </>
            )}
          </View>

          <View style={{flex: 0.5}}>
            {isContentVisible ? (
              <Icon name="caret-up-outline" type="ionicon" size={19} />
            ) : (
              <Icon name="caret-down-outline" type="ionicon" size={19} />
            )}
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default ToggleableV1;
