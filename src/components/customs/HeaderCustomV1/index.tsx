import {Header, Icon} from '@rneui/base';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import useStyles from './styles';
import {CustomHeaderProps} from './types';

const HeaderCustomV1: React.FunctionComponent<CustomHeaderProps> = props => {
  const styles = useStyles();
  return (
    <Header
      barStyle="dark-content"
      centerComponent={
        <TouchableOpacity
          style={styles.viewCenterMiddle}
          onPress={props.onPressIconMiddle}>
          {props.iconMiddle?.name && (
            <Icon
              type={props.iconMiddle.type}
              name={props.iconMiddle.name}
              size={30}
              color={props.iconMiddle.color || styles.centerIcon.color}
            />
          )}
          <Text style={props.titleStyle || styles.textTitle}>
            {props.title}
          </Text>
        </TouchableOpacity>
      }
      centerContainerStyle={{
        justifyContent: 'center',
        paddingHorizontal: 0,
      }}
      containerStyle={styles.container}
      leftComponent={
        <View style={styles.viewRow}>
          <TouchableOpacity
            style={styles.viewiconLeft}
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
            style={styles.rightIconRight}
            onPress={props.onPressRightIconRight}>
            {props.rightIconRight?.name && (
              <Icon
                type={props.rightIconRight?.type}
                color={props.rightIconRight.color || styles.rightIcon.color}
                size={30}
                name={props.rightIconRight?.name}
              />
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
export default HeaderCustomV1;
