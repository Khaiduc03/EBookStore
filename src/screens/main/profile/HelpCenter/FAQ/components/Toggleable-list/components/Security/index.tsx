import React from 'react';
import {View} from 'react-native';
import ToggleableV1 from '../../../../../../../../../components/customs/ToggleableV1';
import useStyles from './styles';

const Toggleable_Securiry = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <View style={{marginVertical: 9}}>
        <ToggleableV1
          title="Security and Privacy?"
          content="Ensure that you understand the privacy and security policies of the application, particularly when creating an account and engaging with the community."
        />
      </View>

      <View style={{marginVertical: 9}}>
        <ToggleableV1
          title="Privacy and Data Collection?"
          content="We integrate community interaction to allow readers to share opinions, reviews, and engage in discussions, fostering a vibrant community on Comic Verse."
        />
      </View>

      <View style={{marginVertical: 9}}>
        <ToggleableV1
          title="User Data Security?"
          content="We use robust security measures to protect user data from breaches and exploitation from external sources"
        />
      </View>
    </View>
  );
};

export default Toggleable_Securiry;
