import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from 'react-native'; // Thêm ScrollView vào danh sách import

import React from 'react';

import useStyles from './styles';
import {NavigationService} from '../../../../../../navigation';
import {routes} from '../../../../../../constants';
import {
  getDataAllChapter,
  getDetailComic,
} from '../../../../../../redux/selectors/comic.selector';
import {useAppSelector} from '../../../../../../hooks';
import {Icon} from '@rneui/base';

const Episodes = () => {
  const styles = useStyles();
  const dataChapter = useAppSelector(getDataAllChapter);

  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
        {dataChapter?.map(item => (
          <TouchableOpacity
            onPress={() =>
              NavigationService.navigate(routes.CHAPTER, {
                chapter_number: item.chapter_number,
                comic_uuid: item.comic_uuid,
                chapter_name: item.chapter_name,
              })
            }
            key={item.uuid}
            style={styles.chapterContainer}>
            <View style={{alignItems: 'flex-start'}}>
              <Text style={styles.textName}>{item.chapter_name}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon name="time-outline" type="ionicon" size={20} />
                <Text style={styles.textChapter}>{item.created_at + ''}</Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon name="eye-outline" type="ionicon" size={20} />
              <Text style={styles.textChapter}>{item.views} views</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Episodes;
