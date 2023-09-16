import React, { useState } from 'react';
import { View, Text } from 'react-native';
import useStyles from '../Switch/styles';
import { SwitchCustomProps } from '../Switch/types';
import { images } from '../../../assets/images/png';

import { Switch } from '@rneui/themed';



export const Switch_custom: React.FunctionComponent<SwitchCustomProps> = () => {
  const styles = useStyles();
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
// export const Switch_: React.FC<SwitchCustomProps> = props => {
//   const { istitle, title } = props;

//   return (
//     <View style={styles.view}>
//       <Text style={styles.txt}>{title}</Text>
//       <Switch_custom />
//       {istitle && <Text style={styles.txt}>{title}</Text>}
//     </View>
//   );
// };

export default Switch_custom