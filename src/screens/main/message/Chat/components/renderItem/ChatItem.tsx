import {Icon, Text} from '@rneui/base';
import {Image, TouchableOpacity, View} from 'react-native';
import {routes} from '../../../../../../constants';
import {NavigationService} from '../../../../../../navigation';
import useStyles from '../../styles';
import {ItemProps} from '../../types';

export const ChatItem = ({item}: ItemProps) => {
  const styles = useStyles();

  return (
    <TouchableOpacity
      onPress={() => NavigationService.navigate(routes.MESSAGES)}
      style={styles.item}>
      <View style={styles.view0}>
        <View style={styles.view1}>
          <View style={styles.viewItem}>
            <View style={styles.viewCenter}>
              <Image source={{uri: item.image}} style={styles.viewImage} />
            </View>
            <View>
              <View style={styles.viewTextTime}>
                <Text style={styles.textName}>{item.name}</Text>
                <Text style={styles.textTime}>{item.time}</Text>
              </View>
              <View style={styles.viewRowText}>
                <View>
                  <Text style={styles.textAuthor}>{item.author}</Text>
                </View>
                <View>
                  <Text style={styles.textFollow}>• {item.follow}</Text>
                </View>
              </View>
              <View style={styles.view2}>
                {Array(5)
                  .fill(0)
                  .map((_, index) => (
                    <Icon
                      key={index}
                      name="star"
                      color={styles.iconStar.color}
                      size={12}
                      type="font-awesome"
                      style={{marginEnd: 6}}
                    />
                  ))}
              </View>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
