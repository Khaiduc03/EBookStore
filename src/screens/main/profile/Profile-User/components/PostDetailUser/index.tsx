import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {HeaderCustom} from '../../../../../../components';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import TextCustom from '../../../../../../components/customs/Text';
import {Icon} from '@rneui/themed';
import useStyles from './styles';
import {images} from '../../../../../../assets';
import Icon_Comment from '../../../MyProfile/components/Icon-Comment';

const PostDetailUser: React.FC = props => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.navigate(routes.PROFILEUSER);
  };

  const [selectedIcon, setSelectedIcon] = useState('');

  const handleIconClick = (iconName: string) => {
    setSelectedIcon(iconName);
  };
  const [isPressed, setIsPressed] = useState(false);
  const [buttonText, setButtonText] = useState('Follow');

  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-left', type: 'font-awesome-5'}}
        title="Post by User"
        onPressLeftIcon={handlePressGoback}
        buttonProps={{
          onPress: () => {
            setIsPressed(!isPressed);
            setButtonText(isPressed ? 'Follow' : 'unFollow');
          },
          title: {
            text: buttonText,
            size: 16,
          },
        }}
      />
      <View style={styles.viewInformation}>
        <View style={styles.viewimage}>
          <Image style={styles.avatarUser} source={images.avata} />
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

export default PostDetailUser;
