import {View, Text} from 'react-native';
import React from 'react';
import useStyles from './styles';
import { Toggleable } from '../../../../../../../../../components';

const Toggleable_Service = () => {
  const styles = useStyles();
  return (
    <View style={styles.container}>
      <Toggleable
        title="How to become a VIP member of Comic Verse?"
        content="You can purchase VIP packages in the Become a VIP section to receive all Comic Verse benefits"
      />

      <Toggleable
        title="Finding Suitable Stories?"
        content="Learn how to search for and select stories that pique your interest. Comic reading apps often feature search functionality and genre categories to assist you in easily discovering stories that align with your preferences."
      />
    </View>
  );
};

export default Toggleable_Service;
