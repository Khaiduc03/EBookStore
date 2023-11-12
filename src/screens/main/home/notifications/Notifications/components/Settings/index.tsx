import React, {useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import HeaderCustomV1 from '../../../../../../../components/customs/HeaderCustomV1';
import {NavigationService} from '../../../../../../../navigation';
import useStyles from '../../../styles';

const SettingsScreen: React.FC = () => {
  const [isEnabled1, setIsEnabled1] = useState(false);
  const [isEnabled2, setIsEnabled2] = useState(false);
  const [isEnabled3, setIsEnabled3] = useState(false);
  const [isEnabled4, setIsEnabled4] = useState(false);
  const toggleSwitch1 = () => setIsEnabled1(previousState => !previousState);
  const toggleSwitch2 = () => setIsEnabled2(previousState => !previousState);
  const toggleSwitch3 = () => setIsEnabled3(previousState => !previousState);
  const toggleSwitch4 = () => setIsEnabled4(previousState => !previousState);

  const styles = useStyles();

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <View style={styles.body}>
          <HeaderCustomV1
            title="Notification"
            leftIcon={{
              name: 'arrow-back-outline',
              type: 'ionicon',
              color: styles.colorIconSetting.color,
            }}
            onPressLeftIcon={() => NavigationService.goBack()}
          />
          <View>
            <View style={[styles.viewRowCenter, styles.viewItemSettings]}>
              <Text style={styles.textSettings}>
                There is a new recommendation
              </Text>
              <View>
                <TouchableOpacity
                  style={[styles.outter, isEnabled1 ? styles.off : styles.on]}
                  onPress={toggleSwitch1}
                  activeOpacity={3}>
                  <View style={isEnabled1 ? styles.innerOFF : styles.innerON} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.viewItemSettings, styles.viewStart]}>
              <Text style={styles.textSettings}>
                There is a new set of books
              </Text>
            </View>
            <View style={[styles.viewItemSettings, styles.viewStart]}>
              <Text style={styles.textSettings}>
                There is an update from the Author
              </Text>
            </View>
            <View style={[styles.viewRowCenter, styles.viewItemSettings]}>
              <Text style={styles.textSettings}>Discounts available</Text>
              <View>
                <TouchableOpacity
                  style={[styles.outter, isEnabled2 ? styles.off : styles.on]}
                  onPress={toggleSwitch2}
                  activeOpacity={3}>
                  <View style={isEnabled2 ? styles.innerOFF : styles.innerON} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.viewRowCenter, styles.viewItemSettings]}>
              <Text style={styles.textSettings}>When I make a purchase</Text>
              <View>
                <TouchableOpacity
                  style={[styles.outter, isEnabled3 ? styles.off : styles.on]}
                  onPress={toggleSwitch3}
                  activeOpacity={3}>
                  <View style={isEnabled3 ? styles.innerOFF : styles.innerON} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.viewRowCenter, styles.viewItemSettings]}>
              <Text style={styles.textSettings}>
                Turn on app system notifications
              </Text>
              <View>
                <TouchableOpacity
                  style={[styles.outter, isEnabled4 ? styles.off : styles.on]}
                  onPress={toggleSwitch4}
                  activeOpacity={3}>
                  <View style={isEnabled4 ? styles.innerOFF : styles.innerON} />
                </TouchableOpacity>
              </View>
            </View>
            <View style={[styles.viewItemSettings, styles.viewStart]}>
              <Text style={styles.textSettings}>
                New tips and services available
              </Text>
            </View>
            <View style={[styles.viewItemSettings, styles.viewStart]}>
              <Text style={styles.textSettings}>Participate in surveys</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
