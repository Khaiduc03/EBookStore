import React, {useState} from 'react';
import {View, ScrollView} from 'react-native';
import useStyles from './styles';
import ButtonSmall from '../ButtonSmall';
import {NavigationService} from '../../../../../../../navigation';
import {routes} from '../../../../../../../constants';

const ItemListBtnSmall: React.FC = () => {
  const styles = useStyles();
  const [selectedButton, setSelectedButton] = useState('');
  const handleButtonPress = (title: string) => {
    setSelectedButton(title);
  };

  return (
    <View style={{}}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.scrollView}>
        <View style={styles.viewConten}>
          <ButtonSmall
            title="Overview"
            onPress={() => handleButtonPress('Overview')}
            isSelected={selectedButton === 'Overview'}
          />
          <ButtonSmall
            title="Account"
            onPress={() => handleButtonPress('Account')}
            isSelected={selectedButton === 'Account'}
          />
          <ButtonSmall
            title="Service"
            onPress={() => handleButtonPress('Service')}
            isSelected={selectedButton === 'Service'}
          />
          <ButtonSmall
            title="App"
            onPress={() => handleButtonPress('App')}
            isSelected={selectedButton === 'App'}
          />
          <ButtonSmall
            title="App"
            onPress={() => handleButtonPress('App')}
            isSelected={selectedButton === 'App'}
          />
          <ButtonSmall
            title="App"
            onPress={() => handleButtonPress('App')}
            isSelected={selectedButton === 'App'}
          />
        </View>
      </ScrollView>
    </View>
  );
};

export default ItemListBtnSmall;