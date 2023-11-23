import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {BigButton, HeaderCustom, Switch_custom} from '../../../../components';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {useAppDispatch} from '../../../../hooks';
import {UserAction} from '../../../../redux/reducer/user.reducer';
import {CommentChapterAction} from '../../../../redux/reducer/comment.chapter.reducer';
const Security: React.FC = () => {
  const dispatch = useAppDispatch();
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.goBack();
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        title="Security"
        onPressLeftIcon={handlePressGoback}
      />

      <Switch_custom title="Save Password" />
      <Switch_custom title="Log in with fingerprint" />
      <Switch_custom title="SMS authenticator" />
      <Switch_custom title="Google Authenticator" />

      <View style={styles.viewButton}>
        <BigButton textButton="Save" />
      </View>

      <TouchableOpacity
        onPress={() =>
          dispatch(
            CommentChapterAction.getCommentChapter({
              chapter_uuid: '28f168a7-0d75-40b1-b143-e47dfbfcd6d6',
              page: 1,
            }),
          )
        }
        style={{
          width: 200,
          height: 200,
          backgroundColor: '#000',
        }}>
        <Text>GET</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Security;
