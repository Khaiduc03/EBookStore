import {View, Text} from 'react-native';
import {Header, Icon} from '@rneui/base';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {TouchableOpacity, Image} from 'react-native';
import {CustomHeaderProps} from './types';
import useStyles from './styles';
import {useState} from 'react';
import {theme} from '../../../theme';
import {normalize} from '@rneui/themed';

const HeaderCustom: React.FunctionComponent<CustomHeaderProps> = props => {
  const styles = useStyles();
  const [isPressed, setIsPressed] = useState(false);
  const [buttonText, setButtonText] = useState('Follow');
  return (
    <Header
      barStyle="dark-content"
      centerComponent={
        <Text style={props.titleStyle || styles.textTitle}>{props.title}</Text>
      }
      centerContainerStyle={{
        justifyContent: 'center',
        paddingHorizontal: 0,
      }}
      containerStyle={styles.container}
      leftComponent={
        <View style={styles.viewRow}>
          <TouchableOpacity
            activeOpacity={1}
            style={props.leftIconStyle || styles.viewCenter}
            onPress={props.onPressLeftIcon}>
            {props.leftIcon?.name && (
              <Icon
                type={props.leftIcon.type}
                name={props.leftIcon.name}
                size={30}
                color={props.leftIcon.color || styles.leftIcon.color}
              />
            )}
          </TouchableOpacity>

          {props.imageUri?.uri && (
            <Image
              style={styles.profileImage}
              source={{uri: `${props.imageUri.uri}`}}
            />
          )}
          <View style={styles.viewTextLeft}>
            <Text style={styles.textFullName}>{props.fullName}</Text>
            <Text style={styles.textUserStatus}>{props.userStatus}</Text>
          </View>
        </View>
      }
      leftContainerStyle={{justifyContent: 'center'}}
      linearGradientProps={{}}
      placement="left"
      rightComponent={
        <View style={styles.rightContainer}>
          <TouchableOpacity
            style={styles.rightIconLeft}
            onPress={props.onPressRightIconLeft}>
            {props.rightIconleft?.name && (
              <Icon
                type={props.rightIconleft?.type}
                size={24}
                name={props.rightIconleft?.name}
                color={props.rightIconleft?.color || styles.rightIcon.color}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.rightIconLeft}
            onPress={props.onPressRightIconMiddle}>
            {props.rightIconMiddle?.name && (
              <Icon
                type={props.rightIconMiddle.type}
                size={props.rightIconMiddle.size || 24}
                name={props.rightIconMiddle.name}
                color={props.rightIconMiddle.color || styles.rightIcon.color}
              />
            )}
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.rightIconRight}
            onPress={props.onPressRightIconRight}>
            {props.rightIconRight?.name && (
              <Icon
                type={props.rightIconRight?.type}
                color={props.rightIconRight.color || styles.rightIcon.color}
                size={24}
                name={props.rightIconRight?.name}
              />
            )}
            {props.buttonProps && (
              <TouchableOpacity
                onPress={() => {
                  setIsPressed(!isPressed);
                  setButtonText(isPressed ? 'Follow' : 'unFollow');
                }}
                style={{
                  backgroundColor: isPressed
                    ? theme?.lightColors?.grey5
                    : theme?.lightColors?.blue,
                  borderRadius: normalize(10),
                  width: normalize(78),
                  height: normalize(27),
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: 'white',
                    fontSize: normalize(16),
                  }}>
                  {buttonText}
                </Text>
              </TouchableOpacity>
            )}
          </TouchableOpacity>
        </View>
      }
      rightContainerStyle={{justifyContent: 'center'}}
      hideStatusBar={true}
      backgroundColor="transparent"
    />
  );
};
export default HeaderCustom;
