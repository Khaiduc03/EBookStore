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
import {useAppDispatch, useAppSelector} from '../../../../../../hooks';
import {Icon} from '@rneui/base';
import {ComicActions} from '../../../../../../redux';
import {CommentChapterAction} from '../../../../../../redux/reducer/comment.chapter.reducer';
import moment from 'moment';

const Episodes = () => {
  const styles = useStyles();
  const dataChapter = useAppSelector(getDataAllChapter);
  const dispatch = useAppDispatch();

  return (
    <View style={styles.container}>
      <ScrollView nestedScrollEnabled showsVerticalScrollIndicator={false}>
        {dataChapter?.map(item => (
          <TouchableOpacity
            onPress={() => {
              dispatch(CommentChapterAction.clearCommentChapter());
              dispatch(ComicActions.clearListChapterDetail());
              NavigationService.navigate(routes.CHAPTER, {
                chapter_number: item.chapter_number,
                comic_uuid: item.comic_uuid,
                chapter_name: item.chapter_name,
              });
            }}
            key={item.uuid}
            style={styles.chapterContainer}>
            <View style={{alignItems: 'flex-start'}}>
              <Text style={styles.textName}>Chapter {item.chapter_number}</Text>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Icon
                  name="time-outline"
                  type="ionicon"
                  size={20}
                  color={'#F89300'}
                />
                <Text style={styles.textChapter}>
                  {moment(item.created_at).format('YYYY-MM-DD-HH:mm') + ''}
                </Text>
              </View>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Icon
                name="eye-outline"
                type="ionicon"
                size={20}
                color={'#F89300'}
              />
              <Text style={styles.textChapter}>{item.views} views</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Episodes;
