import React from 'react';
import {Image, View, Text} from 'react-native';
import {images} from '../../../../assets';
import {HeaderCustom, SearchCustom} from '../../../../components';
import useStyles from './styles';
import {Icon} from '@rneui/themed';

const Forum: React.FC = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'users', type: 'font-awesome'}}
        title="Forum"
      />
      <View style={styles.header}>
        <View style={styles.itemHeader}>
          <Image style={styles.image} source={images.avata} />
          <SearchCustom
            containerStyle={styles.searchContainer}
            inputStyle={{alignItems: 'center'}}
          />
          <Image style={styles.image} source={images.image_default} />
        </View>
      </View>
      <View style={styles.content}>
        <View style={styles.post}>
          <View style={{flexDirection: 'row'}}>
            <Image style={styles.image} source={images.avata} />
            <View style={styles.viewTextPost}>
              <Text style={styles.name}>Ronaldo</Text>
              <Text style={styles.createAt}>18/02/2023 at 22:23</Text>
            </View>
          </View>

          <View style={styles.viewIconPost}>
            <Icon name="ellipsis-horizontal" type="ionicon" size={28} />
            <Icon name="close-outline" type="ionicon" size={28} />
          </View>
        </View>
        <View style={styles.description}>
          <Text style={styles.textDescription}>
            Amidst the roaring crowd, the striker's precision and the goalie's
            reflexes created a mesmerizing dance on the pitch
          </Text>
        </View>
        <View>
          <Image style={styles.imagePost} source={images.avata} />
          <Text>1,123</Text>
          <Text>Favorites</Text>
        </View>
      </View>
    </View>
  );
};

export default Forum;
