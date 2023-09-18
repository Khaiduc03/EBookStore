import React from 'react';

import { TouchableOpacity, View, Text, Image } from 'react-native';

import { Icon } from '@rneui/themed';
import useStyles from './styles';
import { HeaderProps } from './types';

import { CaseIcon } from '../../../assets/icons';
//import { Image } from 'react-native-svg';
import { images } from '../../../assets/images/png';

// import StyledText from '../StyledText';

const Header: React.FunctionComponent<HeaderProps> = props => {
  const {
    leftIcon,
    onPressLeftIcon,
    onPressRightIcon,
    rightIcon,
    style,
    logo,
    iconColor,
    menu,
    title,
    istitle,
    logobook,
    ic_Add,
    ic_Edit,
  } = props;
  const styles = useStyles();
  const leftPress = () => {
    if (leftIcon) {
      onPressLeftIcon && onPressLeftIcon();
    }
  };

  const rightPress = () => {
    if (leftIcon) {
      onPressRightIcon && onPressRightIcon();
    }
  };

  return (
    <View style={[styles.container, style]}>
      {leftIcon && (
        <TouchableOpacity onPress={leftPress} style={styles.iconleft}>
          <Icon
            name={'arrow-back-outline'}
            type="ionicon"
            size={24}
            color={styles.colorBlack.color}
          />
        </TouchableOpacity>
      )}


      {logo && <View style={styles.caseIcon}>
        <CaseIcon colors={props.iconColor} />
      </View>}
      {logobook && <View style={styles.iconleft}>
        <Image source={images.logo_book} />

      </View>}
      {istitle && <View style={styles.NameProfile}>
        <Text style={styles.Title}>{title}</Text>
      </View>}
      {menu && <TouchableOpacity style={styles.iconRight}>
        <Image source={images.ic_Menu} />
      </TouchableOpacity>}
      {ic_Add && <TouchableOpacity style={styles.iconAdd} >
        <Image source={images.ic_Add} />
      </TouchableOpacity>}
      {ic_Edit && <TouchableOpacity style={styles.iconRight}>
        <Image source={images.ic_Edit2} />
      </TouchableOpacity>}



      {rightIcon && (
        <TouchableOpacity onPress={rightPress} style={styles.iconRight}>
          <Icon
            name={'arrow-forward-outline'}
            type="ionicon"
            size={24}
            color={styles.colorBlack.color}
          />
        </TouchableOpacity>
      )}

     
    </View>
  );
};

export default Header;
