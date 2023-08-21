import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import useStyles from './styles';
import {OnbroadProps} from './types';
import {Button, ButtonGroup, Image, Text} from '@rneui/themed';
import {Svg} from 'react-native-svg';
import {Device} from '../../../utils';

import {CaseIcon} from '../../../assets/icons';

const Onbroad: React.FunctionComponent<OnbroadProps> = props => {
  const styles = useStyles();
  const HEGHIT = Device.getDeviceHeight();
  const WIGHT = Device.getDeviceWidth() / 1;
  const backPress = () => {
    if (props.onPressBackButton) {
      props.onPressBackButton();
    }
  };

  const nextPress = () => {
    if (props.onPressNextButton) {
      props.onPressNextButton();
    }
  };

  return (
    <View style={[styles.container, props.styles]}>
      <Svg width={WIGHT} height={HEGHIT / 1.7}>
        {React.cloneElement(props.image)}
      </Svg>
      <View style={styles.subContainer}>
        <View style={styles.textView}>
          <Text style={styles.title}>{props.title}</Text>
          <Text style={styles.subTitle}>{props.subTitle}</Text>
        </View>
        <View style={styles.bottom}>
          <CaseIcon colors={props.iconColor} />
          <View style={styles.viewButton}>
            {props.onPressBackButton && (
              <TouchableOpacity onPress={backPress}>
                <Text style={styles.backButtonText}>back</Text>
              </TouchableOpacity>
            )}

            {props.onPressNextButton && (
              <TouchableOpacity
                onPress={nextPress}
                style={styles.button}>
                <Text style={styles.buttonText}>{props.textButton}</Text>
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  );
};

export default Onbroad;
