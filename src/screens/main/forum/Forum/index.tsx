import React, { useEffect } from 'react';
import {View} from 'react-native';
import {HeaderCustom} from '../../../../components';
import {ItemListPost} from './components';
import useStyles from './styles';
import dynamicLinks from '@react-native-firebase/dynamic-links';
const Forum: React.FC = () => {
  const styles = useStyles();
  useEffect(() => {
    const handleDynamicLink = async () => {
      const initialLink = await dynamicLinks().getInitialLink();

      if (initialLink) {
        // Xử lý thông tin từ liên kết động ở đây
        console.log('Initial link:', initialLink.url);
      }

      const unsubscribe = dynamicLinks().onLink(link => {
        // Xử lý thông tin từ liên kết động ở đây khi ứng dụng đã mở
        console.log('Link opened:', link.url);
      });

      return () => unsubscribe(); // Hủy đăng ký lắng nghe khi component bị unmount
    };

    handleDynamicLink();
  }, []);
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'users', type: 'font-awesome'}}
        leftIconStyle={styles.leftIcon}
        title="Forum"
      />

      <View style={styles.container}>
        <ItemListPost />
      </View>
    </View>
  );
};

export default Forum;
