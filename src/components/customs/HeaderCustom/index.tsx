import { View, Text } from 'react-native';
import { Header, Icon } from '@rneui/base';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { TouchableOpacity } from 'react-native';
import { CustomHeaderProps } from './types';
import useStyles from './styles';

const HeaderCustom: React.FunctionComponent<CustomHeaderProps> = props => {
  const styles = useStyles();
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
              <TouchableOpacity onPress={props.buttonProps.onPress}>
                {props.buttonProps.icon && (
                  <Icon
                    type={props.buttonProps.icon.type}
                    name={props.buttonProps.icon.name}
                    size={props.buttonProps.icon.size || 24}
                    color={props.buttonProps.icon.color || styles.button.color}
                  />
                )}
                {props.buttonProps.title && (
                  <Text
                    style={{
                      fontSize: props.buttonProps.title.size || 16,
                      color: props.buttonProps.title.color || styles.button.color,
                    }}
                  >
                    {props.buttonProps.title.text}
                  </Text>
                )}
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
