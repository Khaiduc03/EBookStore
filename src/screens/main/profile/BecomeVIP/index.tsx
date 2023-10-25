import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {NavigationService} from '../../../../navigation';
import {routes} from '../../../../constants';
import {HeaderCustom} from '../../../../components';
import {Vip} from '../../../../assets/svg';
import {he} from 'date-fns/locale';
import {ItemBill} from './components';

const BecomeVIP: React.FC = () => {
  const styles = useStyles();
  const handlePressGoback = () => {
    NavigationService.goBack();
  };
  return (
    <View style={styles.container}>
      <HeaderCustom
        leftIcon={{name: 'arrow-back', color: styles.iconLeftStyle.color}}
        title="Review Summary"
        rightIconRight={{name: 'plus', type: 'font-awesome-5'}}
        onPressLeftIcon={handlePressGoback}
      />
      <Vip width={'100%'} height={145} viewBox="5 0 75 145" />
      <View style={{paddingStart: 24}}>
        <Text style={styles.text}>
          Just 10$, you will become a vip member to read all comic and have a
          beatiful profile.
        </Text>
      </View>
      <View style={{padding: 20}}>
        <View style={styles.line} />
      </View>
      <View style={styles.viewBtnBill}>
        <View style={styles.btnBill}>
          <View style={styles.viewPrice}>
            <Text style={styles.textBill}>Price</Text>
            <Text style={styles.money}>$123</Text>
          </View>
          <View style={styles.viewTax}>
            <Text style={styles.textBill}>Tax</Text>
            <Text style={styles.money}>$123</Text>
          </View>
          <View style={styles.lineBill}></View>
          <View style={styles.viewTotal}>
            <Text style={styles.textBill}>Total (USD)</Text>
            <Text style={styles.money}>$123</Text>
          </View>
        </View>
        <View
          style={{paddingHorizontal: 20, width: '100%', paddingVertical: 20}}>
          <View style={styles.line} />
        </View>
        <View style={{width: '100%', height: 100}}>
          <ItemBill icGoogle title="Google Pay" />
        </View>
      </View>
    </View>
  );
};

export default BecomeVIP;
