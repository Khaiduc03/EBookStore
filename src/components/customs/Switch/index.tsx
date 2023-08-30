import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from '../Switch/styles';
import { Switch } from '@rneui/themed';

type SwitchComponentProps = {};

const Switch_custom: React.FunctionComponent<SwitchComponentProps> = () => {
  const [checked, setChecked] = useState(false);

  const toggleSwitch = () => {
    setChecked(!checked);
  };
  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: '#F4DDBD', true: '#F89300' }}
        thumbColor={checked ? '#ffffff' : '#ffffff'}
        ios_backgroundColor="#3e3e3e"
        value={checked}
        onValueChange={(value) => setChecked(value)}
        style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }} // size adjustment 
      />
    </View>
  );
};
export const Switch_Notification1: React.FC<SwitchComponentProps> = props => {

  return (
    <View style={styles.view}>
      <Text style={styles.txt}>Có một khuyến nghị mới</Text>
      <Switch_custom />
    </View>
  );
};
export const Switch_Notification2: React.FC<SwitchComponentProps> = props => {

  return (
    <View style={styles.view}>
      <Text style={styles.txt}>Có một bộ sách mới</Text>
      <Switch_custom />
    </View>
  );
};
export const Switch_Notification3: React.FC<SwitchComponentProps> = props => {

  return (
    <View style={styles.view}>
      <Text style={styles.txt}>Có bản cập nhật từ Tác giả</Text>
      <Switch_custom />
    </View>
  );
};
export const Switch_Notification4: React.FC<SwitchComponentProps> = props => {

  return (
    <View style={styles.view}>
      <Text style={styles.txt}>Có sẵn các đợt giảm giá</Text>
      <Switch_custom />
    </View>
  );
};
export const Switch_Notification5: React.FC<SwitchComponentProps> = props => {

  return (
    <View style={styles.view}>
      <Text style={styles.txt}>Khi tôi mua hàng</Text>
      <Switch_custom />
    </View>
  );
};
export const Switch_Notification6: React.FC<SwitchComponentProps> = props => {

  return (
    <View style={styles.view}>
      <Text style={styles.txt}>Bật thông báo hệ thống ứng dụng</Text>
      <Switch_custom />
    </View>
  );
};
export const Switch_Notification7: React.FC<SwitchComponentProps> = props => {

  return (
    <View style={styles.view}>
      <Text style={styles.txt}>Các mẹo và dịch vụ mới có sẵn</Text>
      <Switch_custom />
    </View>
  );
};
export const Switch_Notification8: React.FC<SwitchComponentProps> = props => {

  return (
    <View style={styles.view}>
      <Text style={styles.txt}>Tham gia khảo sát</Text>
      <Switch_custom />
    </View>
  );
};
export const Switch_Security1: React.FC<SwitchComponentProps> = props => {

  return (
    <View style={styles.view}>
      <Text style={styles.txt}>Lưu mật khẩu</Text>
      <Switch_custom />
    </View>
  );
};
export const Switch_Security2: React.FC<SwitchComponentProps> = props => {

  return (
    <View style={styles.view}>
      <Text style={styles.txt}>Đăng nhập bằng vân tay</Text>
      <Switch_custom />
    </View>
  );
};
export const Switch_Security3: React.FC<SwitchComponentProps> = props => {

  return (
    <View style={styles.view}>
      <Text style={styles.txt}>Trình xác thực SMS</Text>
      <Switch_custom />
    </View>
  );
};
export const Switch_Security4: React.FC<SwitchComponentProps> = props => {

  return (
    <View style={styles.view}>
      <Text style={styles.txt}>Trình xác thực Google</Text>
      <Switch_custom />
    </View>
  );
};

export default Switch_custom