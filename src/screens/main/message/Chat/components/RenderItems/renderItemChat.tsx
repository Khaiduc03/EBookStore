import {Icon, Text} from '@rneui/base';
import {Image, TouchableOpacity, View} from 'react-native';
import useStyles from '../../styles';
import {ItemProps} from '../../types';

export const ChatItem = ({item, onPress, isSelected}: ItemProps) => {
  const styles = useStyles();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.item,
        {
          backgroundColor: isSelected
            ? styles.item1.backgroundColor
            : styles.item2.backgroundColor,
        },
      ]}>
      <View style={styles.view0}>
        <View style={styles.view1}>
          <View style={styles.viewJA}>
            <Image source={{uri: item.image}} style={styles.viewImage} />
          </View>
          <View>
            <Text
              style={[
                styles.textName,
                {
                  color: isSelected
                    ? styles.textName1.color
                    : styles.textName2.color,
                },
              ]}>
              {item.name}
            </Text>
            <Text
              style={[
                styles.textAuthor,
                {
                  color: isSelected
                    ? styles.textAuthor1.color
                    : styles.textAuthor2.color,
                },
              ]}>
              {item.author}
            </Text>
            <View style={styles.view2}>
              {Array(5)
                .fill(0)
                .map((_, index) => (
                  <Icon
                    key={index}
                    name="star"
                    color={isSelected ? '#fff' : '#F89300'}
                    size={18}
                    type="font-awesome"
                    style={{marginEnd: 6}}
                  />
                ))}
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
