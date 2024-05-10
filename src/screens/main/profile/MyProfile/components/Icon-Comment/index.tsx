import {Icon} from '@rneui/themed';
import React, {useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import Share from 'react-native-share';
import {routes} from '../../../../../../constants';
import {NavigationService} from '../../../../../../navigation';
import useStyles from './styles';

const Icon_Comment: React.FC = props => {
  const styles = useStyles();

  const [selectedIcon, setSelectedIcon] = useState(false);
  const [iconBookmark, seticonBookmark] = useState(false);
  const handleClickicon = () => {
    setSelectedIcon(!selectedIcon);
  };
  const handleiconBookmark = () => {
    seticonBookmark(!iconBookmark);
  };

  const onShare = async () => {
    const options: any = {
      url: 'https://ComicVerse.com',
      message:
        'ComicVerse app vừa kiếm người yêu vừa đọc truyện hihi ^__^ ! : \n' +
        +'\n',
    };
    try {
      const res = await Share.open(options);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.avatarDummy}
        source={{
          uri: 'https://cdn.tuoitre.vn/thumb_w/480/2022/10/21/27958068910656830706859984149185904941451476n-16663380420601714216182.jpeg',
        }}
      />
      <View style={styles.viewIcon}>
        <View style={{flexDirection: 'row', gap: 15}}>
          <TouchableOpacity onPress={handleClickicon}>
            <Icon
              name="heart"
              type={selectedIcon ? 'font-awesome' : 'font-awesome-5'}
              color="#F98300"
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() =>
              NavigationService.navigate(routes.COMMENTPOSTDETAIL)
            }>
            <Icon name="comment" type={'font-awesome-5'} color={'#F98300'} />
          </TouchableOpacity>
          <TouchableOpacity onPress={onShare}>
            <Icon
              name="paper-plane"
              type={'font-awesome-5'}
              color={'#F98300'}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={handleiconBookmark}>
          <Icon
            name="bookmark"
            type={iconBookmark ? 'font-awesome' : 'font-awesome-5'}
            color="#F98300"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Icon_Comment;
