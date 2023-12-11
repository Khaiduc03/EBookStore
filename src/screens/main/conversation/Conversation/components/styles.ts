import {makeStyles, normalize} from '@rneui/themed';
import {fontFamilySetup} from '../../../../../utils/font';

const useStyles = makeStyles(({colors}) => ({
  container_item: {
    marginVertical: normalize(8),
    flexDirection: 'row',
  },
  status: {
    borderRadius: normalize(100),
    width: normalize(18),
    height: normalize(18),

    position: 'absolute',
    bottom: normalize(2),
    right: normalize(2),
    borderColor: colors.white,
    borderWidth: normalize(3),
  },
  status_offline: {
    backgroundColor: colors.grey5,
  },
  status_online: {
    backgroundColor: colors.green,
  },

  avatarStyle: {},
  contentStyle: {
    flex: 1,
    marginLeft: normalize(12),
    //backgroundColor: colors.red,
    paddingVertical: normalize(4),
  },
  nameStyle: {
    fontFamily: fontFamilySetup.medium,
    fontSize: normalize(15),
    color: colors.chatText,
  },
  container_message: {
    flexDirection: 'row',
    marginTop: normalize(4),
  },
  lastmessageStyle: {
    fontFamily: fontFamilySetup.regular,
    fontSize: normalize(14),
    color: colors.chatText,
  },
  timeStyle: {
    fontFamily: fontFamilySetup.regular,
    fontSize: normalize(10),
    color: colors.chatText,
    marginLeft: normalize(8),
    position: 'absolute',
    right: normalize(5),
  },
  messageStyle: {
    paddingRight: normalize(8),
    flexWrap: 'wrap',
  },
  style_unread: {
    color: colors.unRead,
    fontFamily: fontFamilySetup.bold,
  },
}));

export default useStyles;
