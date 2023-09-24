import {View, Text, Image} from 'react-native';
import React, {useState} from 'react';
import {HeaderCustom} from '../../../../../components';
import {images} from '../../../../../assets';
import useStyles from './styles';
import TextCustom from '../../../../../components/customs/Text';
import {Icon} from '@rneui/themed';
import {TouchableOpacity} from 'react-native-gesture-handler';
import ModalWrapContent from '../../../../../components/customs/ModalWrapContent';
import {NavigationService} from '../../../../../navigation';
import {routes} from '../../../../../constants';
import Icon_Comment from './Icon-Comment';

const PostDetail: React.FC = () => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.navigate(routes.MYPROFILE);
  };

  const [selectedIcon, setSelectedIcon] = useState('');

  const handleIconClick = (iconName: string) => {
    setSelectedIcon(iconName);
  };

  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-left', type: 'font-awesome-5'}}
        title="Post Details"
        onPressLeftIcon={handlePressGoback}
      />
      <View style={styles.viewgido}>
        <View style={styles.viewimage}>
          <Image
            style={{width: 32, height: 32, borderRadius: 99}}
            source={images.avata}
          />
          <TextCustom textBold title="Drake Kun" />
        </View>
        <TouchableOpacity>
          <Icon name="ellipsis-vertical" type="ionicon" />
        </TouchableOpacity>
      </View>
      <View>
        <Icon_Comment />
        <View style={styles.test1}>
          <Text style={styles.text}>44 Like</Text>
          <Text style={styles.text}>
            DraKe Kun Phim này đỉnh cao lắm anh em à 😎😎
          </Text>
          <Text style={styles.text}>3 day ago</Text>
        </View>
      </View>
    </View>
  );
};

export default PostDetail;
