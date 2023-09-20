import {
  Keyboard,
  View,
  TouchableOpacity,
  TextInput,
  FlatList,
  Image,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text} from '@rneui/base';
import React from 'react';
import useStyles from './styles';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import {Headers} from '../../../../../../components';
import {Icon} from '@rneui/themed';

type ItemData = {
  id: number;
  image: string;
  name: string;
  author: string;
};

const data: ItemData[] = [
  {
    id: 1,
    image:
      'https://images.generated.photos/x-rGb01zu7zgHaarxWSzh6EZYZ1QZR21zPh2GCaTLNk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njk4MTA3LmpwZw.jpg',
    name: 'Gennie Baynham',
    author: 'Gennie',
  },
  {
    id: 2,
    image:
      'https://images.generated.photos/_N__HWJKpSkoAqDBebtHfwbUeW1pkq3n08PNzGrd7WM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wOTE4NzgzLnBu/Zw.png',
    name: 'Ermentrude Milward',
    author: 'Ermentrude',
  },
  {
    id: 3,
    image:
      'https://images.generated.photos/6VRzGapHP9cMC__AjlPfJghkMRbBh-S1WdoQ-pt2YTg/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNDg2NjAzLnBu/Zw.png',
    name: 'Calv Keelinge',
    author: 'Calv',
  },
  {
    id: 4,
    image:
      'https://images.generated.photos/Ove_18hhgFWYAaRnztaEHW1NCOguyRhn6v-cLUBM1Po/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wMTIwOTYxLnBu/Zw.png',
    name: 'Sadye Cordel',
    author: 'Sadye',
  },
  {
    id: 5,
    image:
      'https://images.generated.photos/CaT5vL9Tt9ifPyCSHhfy_9BhDkiwSJXWJh_imFR3oxE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wMjQ5OTg1LnBu/Zw.png',
    name: 'Pollyanna Samwell',
    author: 'Pollyanna',
  },
  {
    id: 6,
    image:
      'https://images.generated.photos/Gi_QRGl0J9UTNjLD1oUcYPnImWotLlmbSkpV09jdaC4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wMjg1NTAzLnBu/Zw.png',
    name: 'Janith Gomersall',
    author: 'Janith',
  },
  {
    id: 7,
    image:
      'https://images.generated.photos/6YJxJTCsdMWa3foast7txLcDyGl7Y3WRfUgffIoonr8/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wMDEwODY1LnBu/Zw.png',
    name: 'Kennett Jeandin',
    author: 'Kennett',
  },
  {
    id: 8,
    image:
      'https://images.generated.photos/a_WKjzMMoN9si191Bqu3ZguRWeu76z96FUcIEV5kIq8/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wODcxODI2LnBu/Zw.png',
    name: 'Christalle Tills',
    author: 'Christalle',
  },
  {
    id: 9,
    image:
      'https://images.generated.photos/SbRoawUtaTNpDAP5BG3s5h_OeDAof0DPXVONYsEhKos/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNDM1ODI5LnBu/Zw.png',
    name: 'Ricca Groarty',
    author: 'Ricca',
  },
  {
    id: 10,
    image:
      'https://images.generated.photos/LgDxyMd4lSekL3dncl58ySAg9OZcG908fgQaZSLvaDU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wOTc3Nzc0LnBu/Zw.png',
    name: 'Daune Loyd',
    author: 'Daune',
  },
  {
    id: 11,
    image:
      'https://images.generated.photos/x-rGb01zu7zgHaarxWSzh6EZYZ1QZR21zPh2GCaTLNk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njk4MTA3LmpwZw.jpg',
    name: 'Gennie Baynham',
    author: 'Gennie',
  },
  {
    id: 12,
    image:
      'https://images.generated.photos/_N__HWJKpSkoAqDBebtHfwbUeW1pkq3n08PNzGrd7WM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wOTE4NzgzLnBu/Zw.png',
    name: 'Ermentrude Milward',
    author: 'Ermentrude',
  },
  {
    id: 13,
    image:
      'https://images.generated.photos/6VRzGapHP9cMC__AjlPfJghkMRbBh-S1WdoQ-pt2YTg/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNDg2NjAzLnBu/Zw.png',
    name: 'Calv Keelinge',
    author: 'Calv',
  },
  {
    id: 14,
    image:
      'https://images.generated.photos/Ove_18hhgFWYAaRnztaEHW1NCOguyRhn6v-cLUBM1Po/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wMTIwOTYxLnBu/Zw.png',
    name: 'Sadye Cordel',
    author: 'Sadye',
  },
  {
    id: 15,
    image:
      'https://images.generated.photos/CaT5vL9Tt9ifPyCSHhfy_9BhDkiwSJXWJh_imFR3oxE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wMjQ5OTg1LnBu/Zw.png',
    name: 'Pollyanna Samwell',
    author: 'Pollyanna',
  },
  {
    id: 16,
    image:
      'https://images.generated.photos/Gi_QRGl0J9UTNjLD1oUcYPnImWotLlmbSkpV09jdaC4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wMjg1NTAzLnBu/Zw.png',
    name: 'Janith Gomersall',
    author: 'Janith',
  },
  {
    id: 17,
    image:
      'https://images.generated.photos/6YJxJTCsdMWa3foast7txLcDyGl7Y3WRfUgffIoonr8/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wMDEwODY1LnBu/Zw.png',
    name: 'Kennett Jeandin',
    author: 'Kennett',
  },
  {
    id: 18,
    image:
      'https://images.generated.photos/a_WKjzMMoN9si191Bqu3ZguRWeu76z96FUcIEV5kIq8/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wODcxODI2LnBu/Zw.png',
    name: 'Christalle Tills',
    author: 'Christalle',
  },
  {
    id: 19,
    image:
      'https://images.generated.photos/SbRoawUtaTNpDAP5BG3s5h_OeDAof0DPXVONYsEhKos/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNDM1ODI5LnBu/Zw.png',
    name: 'Ricca Groarty',
    author: 'Ricca',
  },
  {
    id: 20,
    image:
      'https://images.generated.photos/LgDxyMd4lSekL3dncl58ySAg9OZcG908fgQaZSLvaDU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wOTc3Nzc0LnBu/Zw.png',
    name: 'Daune Loyd',
    author: 'Daune',
  },
  {
    id: 21,
    image:
      'https://images.generated.photos/x-rGb01zu7zgHaarxWSzh6EZYZ1QZR21zPh2GCaTLNk/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy92M18w/Njk4MTA3LmpwZw.jpg',
    name: 'Gennie Baynham',
    author: 'Gennie',
  },
  {
    id: 22,
    image:
      'https://images.generated.photos/_N__HWJKpSkoAqDBebtHfwbUeW1pkq3n08PNzGrd7WM/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wOTE4NzgzLnBu/Zw.png',
    name: 'Ermentrude Milward',
    author: 'Ermentrude',
  },
  {
    id: 23,
    image:
      'https://images.generated.photos/6VRzGapHP9cMC__AjlPfJghkMRbBh-S1WdoQ-pt2YTg/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNDg2NjAzLnBu/Zw.png',
    name: 'Calv Keelinge',
    author: 'Calv',
  },
  {
    id: 24,
    image:
      'https://images.generated.photos/Ove_18hhgFWYAaRnztaEHW1NCOguyRhn6v-cLUBM1Po/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wMTIwOTYxLnBu/Zw.png',
    name: 'Sadye Cordel',
    author: 'Sadye',
  },
  {
    id: 25,
    image:
      'https://images.generated.photos/CaT5vL9Tt9ifPyCSHhfy_9BhDkiwSJXWJh_imFR3oxE/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wMjQ5OTg1LnBu/Zw.png',
    name: 'Pollyanna Samwell',
    author: 'Pollyanna',
  },
  {
    id: 26,
    image:
      'https://images.generated.photos/Gi_QRGl0J9UTNjLD1oUcYPnImWotLlmbSkpV09jdaC4/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wMjg1NTAzLnBu/Zw.png',
    name: 'Janith Gomersall',
    author: 'Janith',
  },
  {
    id: 27,
    image:
      'https://images.generated.photos/6YJxJTCsdMWa3foast7txLcDyGl7Y3WRfUgffIoonr8/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wMDEwODY1LnBu/Zw.png',
    name: 'Kennett Jeandin',
    author: 'Kennett',
  },
  {
    id: 28,
    image:
      'https://images.generated.photos/a_WKjzMMoN9si191Bqu3ZguRWeu76z96FUcIEV5kIq8/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wODcxODI2LnBu/Zw.png',
    name: 'Christalle Tills',
    author: 'Christalle',
  },
  {
    id: 29,
    image:
      'https://images.generated.photos/SbRoawUtaTNpDAP5BG3s5h_OeDAof0DPXVONYsEhKos/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wNDM1ODI5LnBu/Zw.png',
    name: 'Ricca Groarty',
    author: 'Ricca',
  },
  {
    id: 30,
    image:
      'https://images.generated.photos/LgDxyMd4lSekL3dncl58ySAg9OZcG908fgQaZSLvaDU/rs:fit:256:256/czM6Ly9pY29uczgu/Z3Bob3Rvcy1wcm9k/LnBob3Rvcy90cmFu/c3BhcmVudF92My92/M18wOTc3Nzc0LnBu/Zw.png',
    name: 'Daune Loyd',
    author: 'Daune',
  },
];

type ItemProps = {
  item: ItemData;
  onPress: () => void;
  backgroundColor: string;
  textColor1: string;
  textColor2: string;
  iconSel: React.ReactNode;
};

const Item = ({
  item,
  onPress,
  backgroundColor,
  textColor1,
  textColor2,
  iconSel,
}: ItemProps) => {
  const styles = useStyles();
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.item, {backgroundColor}]}>
      <View style={styles.view0}>
        <View style={styles.view1}>
          <View style={styles.viewJA}>
            <Image source={{uri: item.image}} style={styles.viewImage} />
          </View>
          <View>
            <Text style={[styles.textName, {color: textColor1}]}>
              {item.name}
            </Text>
            <Text style={[styles.textAuthor, {color: textColor2}]}>
              {item.author}
            </Text>
            <View style={styles.view2}>{iconSel}</View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const Chat: React.FC = () => {
  const styles = useStyles();

  const [isPressedComment, setIsPressedComment] = React.useState(false);
  const [isPressedSearch, setIsPressedSearch] = React.useState(false);
  const [isPressedNotifications, setIsPressedNotifications] =
    React.useState(false);
  const [selectedId, setSelectedId] = React.useState<string>();

  const renderItem = ({item}: {item: ItemData}) => {
    const backgroundColor =
      item.id.toString() === selectedId ? '#F89300' : '#fff';
    const backgroundColorIcon =
      item.id.toString() !== selectedId ? '#F89300' : '#fff';
    const color1 = item.id.toString() === selectedId ? 'white' : 'black';
    const color2 = item.id.toString() === selectedId ? '#e6e6e6' : 'gray';

    const iconColor = (
      <>
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <Icon
              key={index}
              name="star"
              color={backgroundColorIcon}
              size={18}
              type="font-awesome"
              style={{marginEnd: 6}}
            />
          ))}
      </>
    );

    return (
      <Item
        item={item}
        onPress={() => setSelectedId(item.id.toString())}
        backgroundColor={backgroundColor}
        textColor1={color1}
        textColor2={color2}
        iconSel={iconColor}
      />
    );
  };

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
      style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.header}>
          <TouchableOpacity
            style={[
              styles.btnComment,
              {
                backgroundColor: isPressedComment ? '#999999' : 'transparent',
              },
            ]}
            onPressIn={() => setIsPressedComment(true)}
            onPressOut={() => setIsPressedComment(false)}>
            <Icon name="comment" type="font-awesome" color={'#F89300'} />
          </TouchableOpacity>
          <View style={styles.view3}>
            <Text style={styles.text1}>Message</Text>
          </View>
          <View style={styles.view4}>
            <TouchableOpacity
              style={[
                styles.btnSearch,
                {
                  backgroundColor: isPressedSearch ? '#999999' : 'transparent',
                },
              ]}
              onPressIn={() => setIsPressedSearch(true)}
              onPressOut={() => setIsPressedSearch(false)}>
              <Icon name="search-outline" type="ionicon" color={'black'} />
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.btnNotifications,
                {
                  backgroundColor: isPressedNotifications
                    ? '#999999'
                    : 'transparent',
                },
              ]}
              onPressIn={() => setIsPressedNotifications(true)}
              onPressOut={() => setIsPressedNotifications(false)}>
              <Icon
                name="notifications-outline"
                type="ionicon"
                color={'black'}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.body}>
          <View style={styles.view5}>
            <TextInput style={styles.textInput} placeholder="Search" />
            <View style={styles.view6}>
              <Icon name="search" type="font-awesome" color={'gray'} />
            </View>
          </View>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.id.toString()}
            extraData={selectedId}
          />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Chat;
