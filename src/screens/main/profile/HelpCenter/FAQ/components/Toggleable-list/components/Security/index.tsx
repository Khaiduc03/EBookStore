import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import {Toggleable} from '../../../../../../../../../components';

const Toggleable_Securiry = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Toggleable
        title="Security and Privacy?"
        content="Ensure that you understand the privacy and security policies of the application, particularly when creating an account and engaging with the community."
      />
      <Toggleable
        title="Privacy and Data Collection?"
        content="We integrate community interaction to allow readers to share opinions, reviews, and engage in discussions, fostering a vibrant community on Comic Verse."
      />
      <Toggleable
        title="User Data Security?"
        content="We use robust security measures to protect user data from breaches and exploitation from external sources"
      />
    </View>
  );
};

export default Toggleable_Securiry;
