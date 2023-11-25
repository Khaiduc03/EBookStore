import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import useStyles from './styles';
import {Icon} from '@rneui/themed';
import {theme} from '../../../../../../../../theme';

const ItemFiveStar: React.FC = () => {
  const styles = useStyles();
  const [isIcon, setisIcon] = useState(false);
  const clickIcon = () => {
    setisIcon(!isIcon);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.view1}>
          <Image
            style={styles.avatar}
            source={{
              uri: 'https://assets.goal.com/v3/assets/bltcc7a7ffd2fbf71f5/blt3a48501789cdf113/60db790b47339c0fc01c188c/3e947186d512164cf8dbe0987a865dd2b714eea6.png?auto=webp&format=pjpg&width=3840&quality=60',
            }}
          />
          <Text style={styles.nameUser}>David Beckham</Text>
        </View>

        <View style={styles.view1}>
          <View style={styles.btnRating}>
            <Icon name="star" type="antdesign" color="#F89300" size={20} />
            <Text style={styles.textbtnRating}>5</Text>
          </View>
          <Icon
            name="ellipsis-horizontal-circle-outline"
            type="ionicon"
            size={24}
            style={styles.iconFooter}
          />
        </View>
      </View>

      <Text style={styles.description}>
        As a person who has hard time picking up a book to read
      </Text>

      <View style={styles.footer}>
        <View style={{flexDirection: 'row', gap: 10}}>
          <TouchableOpacity onPress={clickIcon}>
            <Icon
              name={isIcon ? 'heart-outline' : 'heart'}
              type="ionicon"
              color={isIcon ? '' : '#F89300'}
              style={styles.iconFooter}
            />
          </TouchableOpacity>

          <Text style={styles.countLike}>123</Text>
        </View>
        <Text style={styles.createAt}>6 months ago</Text>
      </View>
    </View>
  );
};

export default ItemFiveStar;
