import { makeStyles, normalize } from '@rneui/themed';
import { fontFamilySetup } from '../../../../../utils/font';

const useStyles = makeStyles(({ colors }) => ({
  container_item: {
    marginVertical: normalize(8),
    flexDirection: 'row',
  },
  status: {
    borderRadius: normalize(100),
    width: normalize(18),
    height: normalize(18),
    position: 'absolute',
    bottom: normalize(-4),
    right: normalize(2),
    borderColor: colors.statusBorderColor,
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
    paddingVertical: normalize(4),
  },
  nameStyle: {
    fontFamily: fontFamilySetup.medium,
    fontSize: normalize(15),
    color: colors.black,
  },
  container_message: {
    flexDirection: 'row',
    marginTop: normalize(4),
  },
  lastmessageStyle: {
    marginTop: normalize(3),
    fontFamily: fontFamilySetup.regular,
    fontSize: normalize(14),
    color: colors.chatText,
  },
  timeStyle: {
    fontFamily: fontFamilySetup.regular,
    fontSize: normalize(10),
    fontStyle: 'italic',
    color: colors.chatText,
    paddingBottom: normalize(4),
  },
  messageStyle: {
    marginTop: normalize(4),
    paddingRight: normalize(8),
    flexWrap: 'wrap',
  },
  style_unread: {
    color: colors.unRead,
    fontFamily: fontFamilySetup.bold,
  },
  viewTime: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: normalize(8),
    position: 'absolute',
    right: normalize(3),
  }
}));

export default useStyles;
