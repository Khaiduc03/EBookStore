import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {HeaderCustom} from '../../../../../../components';
import TextCustom from '../../../../../../components/customs/Text';
import {NavigationService} from '../../../../../../navigation';
import Icon_Comment from '../../../MyProfile/components/Icon-Comment';
import useStyles from './styles';

const PostDetailUser: React.FC = props => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.goBack();
  };

  const [isPressed, setIsPressed] = useState(false);
  const [buttonText, setButtonText] = useState('Follow');

  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
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
          <Image
            style={styles.avatarUser}
            source={{
              uri: 'https://cdn.tuoitre.vn/thumb_w/480/2022/10/21/27958068910656830706859984149185904941451476n-16663380420601714216182.jpeg',
            }}
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

export default PostDetailUser;
