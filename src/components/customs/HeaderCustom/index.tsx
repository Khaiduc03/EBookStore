import { View, Text } from 'react-native';
import { Header, Icon } from '@rneui/base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { CustomHeaderProps } from './types';
import useStyles from './styles';
import { useState } from 'react';
import { normalize } from 'path';

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
      containerStyle={[styles.container, props.viewStyle]}
      leftComponent={
        <TouchableOpacity onPress={props.onPressLeftIcon}>
          {props.leftIcon?.name && (
            <Icon
              type={props.leftIcon.type}
              name={props.leftIcon.name}
              size={30}
              color={props.leftIcon.color || styles.leftIcon.color}
            />
          )}
        </TouchableOpacity>
      }
      leftContainerStyle={{ justifyContent: 'center' }}
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
                type={props.rightIconMiddle?.type}
                size={24}
                name={props.rightIconMiddle?.name}
                color={props.rightIconMiddle?.color || styles.rightIcon.color}
              />
            )}
          </TouchableOpacity>
          <TouchableOpacity onPress={props.onPressRightIconRight}>
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
                  backgroundColor: isPressed ? 'gray' : '#0075FF',
                  borderRadius: 10,
                  width: 78,
                  alignItems: 'center'
                }}
              >
                <Text
                  style={{
                    color: 'white',
                    fontSize: 16,
                  }}
                >
                  {buttonText}
                </Text>
              </TouchableOpacity>
            )}
          </TouchableOpacity>

        </View>
      }
      rightContainerStyle={{ justifyContent: 'center' }}
      hideStatusBar={true}
      backgroundColor="transparent"
    />
  );
};
export default HeaderCustom;
